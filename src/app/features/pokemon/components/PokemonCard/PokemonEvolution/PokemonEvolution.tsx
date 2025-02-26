import { generateStyleToken, Typography } from '@/shared';
import { Fragment } from 'react/jsx-runtime';
import './PokemonEvolution.css';
import { PokemonEvolutionProps } from './PokemonEvolution.type';
import LongArrowRight from '@/shared/assets/icons/long_arrow_right.svg?react';

export function PokemonEvolution({ evolutions, color }: PokemonEvolutionProps) {
  return (
    <div className="pokemon-evolutions">
      {evolutions.map((evolution, index) => (
        <Fragment key={evolution.name}>
          <div className="pokemon-evolutions__item">
            <div className="pokemon-evolutions__image-container">
            <LongArrowRight stroke={generateStyleToken('color', color)} />
              <img src={evolution.image} className="pokemon-evolutions__image-item" />
              {index + 1 < evolutions.length && (
                <LongArrowRight stroke={generateStyleToken('color', color)} />
              )}
            </div>
            <Typography color="text-strong" fontSize="2xl" lineHeight="2xl">
              {evolution.name}
            </Typography>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
