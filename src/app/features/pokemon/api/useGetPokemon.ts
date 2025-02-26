import { useQuery } from '@/shared';
import { Pokemon } from '../types';
import { getPokemonByNameOrId } from './pokemonApi';

export function useGetPokemon(id: string) {
  const states = useQuery<Pokemon, string>(id, getPokemonByNameOrId);
  return states;
}
