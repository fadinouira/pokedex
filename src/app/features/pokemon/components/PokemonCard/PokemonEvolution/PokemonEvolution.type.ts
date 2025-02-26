import { ColorToken } from '@/shared';
import { PokemonEvolutionType } from '../../../types';

export interface PokemonEvolutionProps {
  evolutions: PokemonEvolutionType[];
  color: ColorToken;
}
