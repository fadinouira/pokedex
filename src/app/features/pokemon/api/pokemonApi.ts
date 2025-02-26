import { APP_CONFIG, ENDPOINTS } from '@/app/config';
import { joinPaths } from '@/shared';
import { Pokemon, PokemonEvolutionType } from '../types';
import { transformApiPokemon, transformDescription } from './pokemonApi.transform';
import { ApiPokemonSpecies } from './pokemonApi.type';

const fetchPokemonData = async (identifier: string) => {
  const url = joinPaths([APP_CONFIG.BASE_URL_API, ENDPOINTS.pokemon, identifier]);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch Pokémon data: ${response.status}`);
  return response.json();
};

const fetchPokemonSpecies = async (identifier: string) => {
  const url = joinPaths([APP_CONFIG.BASE_URL_API, ENDPOINTS.pokemonSpecies, identifier]);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch Pokémon species: ${response.status}`);
  const speciesData = (await response.json()) as ApiPokemonSpecies;

  return speciesData;
};

const fetchEvolutionChain = async (
  speciesData: ApiPokemonSpecies,
): Promise<PokemonEvolutionType[]> => {
  if (!speciesData.evolution_chain?.url) return [];
  const response = await fetch(speciesData.evolution_chain.url);
  if (!response.ok) throw new Error(`Failed to fetch evolution chain: ${response.status}`);
  const evolutionData = await response.json();

  const evolutions = [];
  let current = evolutionData.chain;
  let order = 1;
  while (current) {
    const name = current.species.name;
    const spriteData = await fetchPokemonData(name);
    const image = spriteData.sprites.other['official-artwork'].front_default;
    evolutions.push({ order, name, image });
    current = current.evolves_to.length ? current.evolves_to[0] : null;
    order++;
  }
  return evolutions;
};

export const getPokemonByNameOrId = async (options: {
  identifier: string;
  lng: string;
}): Promise<Pokemon> => {
  try {
    const [pokemonData, speciesData] = await Promise.all([
      fetchPokemonData(options.identifier),
      fetchPokemonSpecies(options.identifier),
    ]);

    const evolutions = await fetchEvolutionChain(speciesData);
    const pokemon: Pokemon = {
      ...transformApiPokemon(pokemonData),
      description: transformDescription(speciesData, options.lng),
      evolutions,
    };

    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
};
