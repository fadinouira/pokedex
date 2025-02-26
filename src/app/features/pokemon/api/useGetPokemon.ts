import { useQuery } from '@/shared';
import { Pokemon } from '../types';
import { getPokemonByNameOrId } from './pokemonApi';

export function useGetPokemon(options: { identifier: string; lng: string }) {
  const states = useQuery<Pokemon, { identifier: string; lng: string }>(
    options,
    getPokemonByNameOrId,
  );
  return states;
}
