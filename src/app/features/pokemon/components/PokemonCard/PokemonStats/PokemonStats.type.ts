import { ColorToken } from '@/shared';
import { PokemonStat } from '../../../types';

export interface PokemonStatsProps {
  stats: PokemonStat[];
  color: ColorToken;
}
