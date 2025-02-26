import { Typography } from '@/shared';
import './PokemonCard.css';
import { PokemonCardProps } from './PokemonCard.type';

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="pokemon-card">
      <Typography
        font="primary"
        fontSize="2xl"
        lineHeight="2xl"
        className="pokemon-card-title"
        capitalize
        centerText
      >
        {pokemon.name}
      </Typography>
      <Typography
        font="primary"
        fontSize="2xl"
        lineHeight="2xl"
        className="pokemon-card-title"
        capitalizeFirstLetter
        centerText
      >
        {pokemon.description}
      </Typography>
    </div>
  );
}
