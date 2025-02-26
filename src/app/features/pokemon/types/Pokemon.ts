import { PokemonStat } from './PokemonStat';
import { PokemonType } from './PokemonType';

export interface Pokemon {
  id: number;
  name: string;
  description: string;
  image: string;

  height: number;
  weight: number;

  isDefault: boolean;
  baseExperience: number;
  order: number;

  stats: PokemonStat[];
  types: PokemonType[];
}
