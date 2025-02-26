import { generateStyleToken, Typography } from '@/shared';
import LongArrowRight from '@/shared/assets/icons/long_arrow_right.svg?react';
import './PokemonEvolution.css';
import { PokemonEvolutionProps } from './PokemonEvolution.type';

export function PokemonEvolution({ evolutions, color }: PokemonEvolutionProps) {
  return (
    <div className="pokemon-evolutions">
      {evolutions.map((evolution) => (
        <div key={evolution.name} className="pokemon-evolutions__item">
          <div className="pokemon-evolutions__image-container">
            <img src={evolution.image} className="pokemon-evolutions__image-item" />
            <LongArrowRight
              className="pokemon-evolutions__separator"
              stroke={generateStyleToken('color', color)}
            />
          </div>
          <Typography
            className="pokemon-evolutions__label"
            color="text-strong"
            fontSize="2xl"
            lineHeight="2xl"
          >
            {evolution.name}
          </Typography>
        </div>
      ))}
    </div>
  );
}
