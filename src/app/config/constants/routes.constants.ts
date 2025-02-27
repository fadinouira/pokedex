import { joinPaths } from '@/shared';
import { RouteIdEnum } from '../enums';

export const RouterPaths = {
  RootPaths: {
    anyPath: '*',
    rootPath: '/',
    notFoundPath: joinPaths([RouteIdEnum.Root, RouteIdEnum.NotFound]),
  },
  PokemonPaths: {
    rootPath: joinPaths([RouteIdEnum.Root, RouteIdEnum.Pokemon]),
    pokemonViewPath: (id: string) => joinPaths([RouteIdEnum.Root, RouteIdEnum.Pokemon, id]),
  },
};
