import { formatPokemonStatsName } from '@/app/features/pokemon/utils';
import { formatWithLeadingZeros, ProgressIndicator, Typography } from '@/shared';
import './PokemonStatItem.css';
import { PokemonStatItemProps } from './PokemonStatItem.type';

export function PokemonStatItem({ item, color }: PokemonStatItemProps) {
  return (
    <div className="pokemon-stat-item">
      <Typography
        fontSize="2xs"
        lineHeight="xs"
        color={color}
        className="pokemon-stat-item__label"
        uppercase
      >
        {formatPokemonStatsName(item.name)}
      </Typography>
      <Typography
        fontSize="xs"
        lineHeight="xs"
        color="text-strong"
        className="pokemon-stat-item__label"
        uppercase
      >
        {formatWithLeadingZeros(item.baseStat)}
      </Typography>
      <ProgressIndicator
        color={color}
        value={item.baseStat}
        max={120}
        className="pokemon-stat-item__indicator"
      />
    </div>
  );
}
