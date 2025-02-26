import { PokemonStatItem } from './PokemonStatItem';
import './PokemonStats.css';
import { PokemonStatsProps } from './PokemonStats.type';

export function PokemonStats({ stats, color }: PokemonStatsProps) {
  return (
    <div className="pokemon-stats">
      {stats.map((item) => (
        <PokemonStatItem key={item.name} item={item} color={color} />
      ))}
    </div>
  );
}
