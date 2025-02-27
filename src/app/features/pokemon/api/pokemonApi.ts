import { APP_CONFIG, ENDPOINTS, StatusCodesEnum } from '@/app/config';
import { CustomError, joinPaths } from '@/shared';
import { Pokemon, PokemonEvolutionType } from '../types';
import { transformApiPokemon, transformDescription } from './pokemonApi.transform';
import { ApiPokemonSpecies } from './pokemonApi.type';

const fetchPokemonData = async (identifier: string) => {
  const url = joinPaths([APP_CONFIG.BASE_URL_API, ENDPOINTS.pokemon, identifier]);
  const response = await fetch(url);
  if (!response.ok) {
    throw new CustomError('Failed to fetch PokemonData', response.status as StatusCodesEnum);
  }
  const data = await response.json();
  return data;
};

const fetchPokemonSpecies = async (identifier: string) => {
  const url = joinPaths([APP_CONFIG.BASE_URL_API, ENDPOINTS.pokemonSpecies, identifier]);
  const response = await fetch(url);
  if (!response.ok) {
    throw new CustomError('Failed to fetch PokemonSpecies', response.status as StatusCodesEnum);
  }
  const speciesData = (await response.json()) as ApiPokemonSpecies;

  return speciesData;
};

const fetchEvolutionChain = async (
  speciesData: ApiPokemonSpecies,
): Promise<PokemonEvolutionType[]> => {
  if (!speciesData.evolution_chain?.url) return [];
  const response = await fetch(speciesData.evolution_chain.url);
  if (!response.ok) {
    throw new CustomError('Failed to fetch EvolutionChain', response.status as StatusCodesEnum);
  }
  const evolutionData = await response.json();

  const evolutions = [];
  let current = evolutionData.chain;
  let order = 1;
  while (current && order < 10) {
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
    const pokemonData = await fetchPokemonData(options.identifier);

    const speciesData = await fetchPokemonSpecies(options.identifier);

    const evolutions = await fetchEvolutionChain(speciesData);
    const pokemon: Pokemon = {
      ...transformApiPokemon(pokemonData),
      description: transformDescription(speciesData, options.lng),
      evolutions,
    };

    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error as CustomError | unknown;
  }
};
