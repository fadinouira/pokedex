import { Tabs, Typography } from '@/shared';
import { useMemo, useState } from 'react';
import { generateColorTokenByTypeName } from '../../utils';
import { POKEMON_CARD_TABS } from './PokemonCard.constants';
import './PokemonCard.css';
import { PokemonCardProps } from './PokemonCard.type';
import { PokemonEvolution } from './PokemonEvolution';
import { PokemonStats } from './PokemonStats';
import { PokemonTypes } from './PokemonTypes';

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const [activeTab, setActiveTab] = useState(0);

  const pokemonColor = useMemo(
    () => generateColorTokenByTypeName(pokemon.types[0].name),
    [pokemon.types],
  );

  const tabs = [
    <PokemonStats stats={pokemon.stats} color={pokemonColor} />,
    <PokemonEvolution evolutions={pokemon.evolutions} color={pokemonColor} />,
  ];

  return (
    <div className="pokemon-card">
      <img src={pokemon.image} className="pokemon-card-image" />
      <Typography font="primary" fontSize="3xl" lineHeight="3xl" capitalize centerText>
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
          color={pokemonColor}
          onTabChange={(t) => setActiveTab(t)}
        />
      </div>
      {tabs[activeTab]}
    </div>
  );
}
