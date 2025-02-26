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
