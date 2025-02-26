import { Typography } from '@/shared';
import { PokemonEvolutionProps } from './PokemonEvolution.type';

export function PokemonEvolution({ evolutions }: PokemonEvolutionProps) {
  return (
    <div className="pokemon-evolutions">
      {evolutions.map((evolution) => (
        <div className="pokemon-evolutions__item">
          <img src={evolution.image} />
          <Typography>{evolution.name}</Typography>
        </div>
      ))}
    </div>
  );
}
