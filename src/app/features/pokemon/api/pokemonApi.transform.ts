import { Pokemon, PokemonStat, PokemonType } from '../types';
import { ApiPokemon, ApiPokemonStat, ApiPokemonType } from './pokemonApi.type';

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

export function transformApiPokemon(apiPokemon: ApiPokemon): Pokemon {
  return {
    id: apiPokemon.id,
    name: apiPokemon.name,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

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
