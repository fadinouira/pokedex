import { PokemonStat } from '@/app/features/pokemon/types';
import { ColorToken } from '@/shared';

export interface PokemonStatItemProps {
  item: PokemonStat;
  color: ColorToken;
}
