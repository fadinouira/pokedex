export const APP_COLORS_TOKENS = [
  'brand-primary',
  'brand-primary-hover',
  'brand-primary-foreground',
  'brand-primary-disabled',
  'bg-default',
  'bg-light',
  'text-strong',
  'text-default',
  'text-muted',
  'text-disabled',
  'text-label',
  'border-default',
  'border-muted',
  'border-disabled',
];

export const POKEMON_COLOR_TOKENS = [
  'pokemon-normal',
  'pokemon-water',
  'pokemon-fire',
  'pokemon-grass',
  'pokemon-electric',
  'pokemon-ice',
  'pokemon-fighting',
  'pokemon-poison',
  'pokemon-ground',
  'pokemon-flying',
  'pokemon-psychic',
  'pokemon-bug',
  'pokemon-rock',
  'pokemon-ghost',
  'pokemon-dark',
  'pokemon-dragon',
  'pokemon-steel',
  'pokemon-fairy',
];

export const COLORS_TOKENS = [...APP_COLORS_TOKENS, ...POKEMON_COLOR_TOKENS] as const;
