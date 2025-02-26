import { APP_CONFIG, ENDPOINTS } from '@/app/config';
import { joinPaths } from '@/shared';
import { Pokemon } from '../types';
import { transformApiPokemon } from './pokemonApi.transform';
import { ApiPokemon } from './pokemonApi.type';

export const getPokemonByNameOrId = async (identifier: string): Promise<Pokemon> => {
  const AddressApiPath = joinPaths([APP_CONFIG.BASE_URL_API, ENDPOINTS.pokemon, identifier]);

  const response = await fetch(AddressApiPath);
  console.log('🚀 ~ getPokemonByNameOrId ~ response:', response);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const apiData: ApiPokemon = await response.json();

  return transformApiPokemon(apiData);
};
