import { Pokemon, PokemonStat, PokemonType } from '../types';
import { ApiPokemon, ApiPokemonSpecies, ApiPokemonStat, ApiPokemonType } from './pokemonApi.type';

export function transformPokemonStat(apiStat: ApiPokemonStat): PokemonStat {
  return {
    baseStat: apiStat.base_stat,
    effort: apiStat.effort,
    name: apiStat.stat.name,
    url: apiStat.stat.url,
  };
}

export function transformPokemonType(apiType: ApiPokemonType): PokemonType {
  return {
    slot: apiType.slot,
    name: apiType.type.name,
    url: apiType.type.url,
  };
}

export function transformDescription(species: ApiPokemonSpecies, lng: string): string {
  return (
    species.flavor_text_entries.find((entry) => entry.language.name === lng)?.flavor_text ||
    'No description available.'
  );
}

export function transformApiPokemon(apiPokemon: ApiPokemon): Pokemon {
  return {
    id: apiPokemon.id,
    name: apiPokemon.name,

    evolutions: [],
    description: '',

    image: apiPokemon.sprites.other['official-artwork'].front_default,
    height: apiPokemon.height,
    weight: apiPokemon.weight,
    isDefault: apiPokemon.is_default,
    baseExperience: apiPokemon.base_experience,
    order: apiPokemon.order,

    stats: apiPokemon.stats.map(transformPokemonStat),
    types: apiPokemon.types.map(transformPokemonType),
  };
}
