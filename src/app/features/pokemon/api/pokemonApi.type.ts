export interface ApiPokemon {
  id: number;
  name: string;

  height: number;
  weight: number;

  is_default: boolean;
  base_experience: number;
  order: number;

  stats: ApiPokemonStat[];
  types: ApiPokemonType[];
  sprites: ApiSprites;
}

export interface ApiPokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface ApiPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface ApiSprites {
  front_default: string;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: ApiOtherSprites;
}

export interface ApiOtherSprites {
  dream_world: ApiSprites;
  home: ApiSprites;
  'official-artwork': ApiSprites;
}
