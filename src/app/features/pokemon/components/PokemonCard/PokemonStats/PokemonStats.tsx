import { PokemonStatItem } from './PokemonStatItem';
import { PokemonStatsProps } from './PokemonStats.type';
import './PokemonStats.css';

export function PokemonStats({ stats, color }: PokemonStatsProps) {
  return (
    <div className="pokemon-stats">
      {stats.map((item) => (
        <PokemonStatItem item={item} color={color} />
      ))}
    </div>
  );
}
