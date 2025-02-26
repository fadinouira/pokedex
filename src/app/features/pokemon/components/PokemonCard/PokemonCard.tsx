import { Tabs, Typography } from '@/shared';
import { useState } from 'react';
import { generateColorTokenByTypeName } from '../../utils';
import { POKEMON_CARD_TABS } from './PokemonCard.constants';
import './PokemonCard.css';
import { PokemonCardProps } from './PokemonCard.type';
import { PokemonTypes } from './PokemonTypes';

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pokemon-card">
      <Typography font="primary" fontSize="2xl" lineHeight="2xl" capitalize centerText>
        {pokemon.name}
      </Typography>
      <PokemonTypes types={pokemon.types} />
      <Typography
        font="primary"
        fontSize="md"
        lineHeight="md"
        className="pokemon-card-description"
        capitalizeFirstLetter
        centerText
      >
        {pokemon.description}
      </Typography>
      <div className="pokemon-card-tabs-container">
        <Tabs
          activeIndex={activeTab}
          items={POKEMON_CARD_TABS}
          color={generateColorTokenByTypeName(pokemon.types[0].name)}
          onTabChange={(t) => setActiveTab(t)}
        />
      </div>
    </div>
  );
}
