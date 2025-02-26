import { RouteIdEnum, RouterPaths } from '@/app/config';
import { NotFoundPage } from '@/pages';
import { Navigate, RouteObject } from 'react-router';
import { PokemonNotFoundPage, SearchPokemonPage, ViewPokemonPage } from '../features';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: <SearchPokemonPage />,
  },
  {
    path: RouteIdEnum.Pokemon,
    children: [
      {
        path: RouteIdEnum.id,
        element: <ViewPokemonPage />,
      },
      {
        path: RouteIdEnum.Root,
        element: <Navigate to={RouterPaths.RootPaths.rootPath} />,
      },
      {
        path: RouteIdEnum.Any,
        element: <PokemonNotFoundPage />,
      },
    ],
  },
  {
    path: RouteIdEnum.NotFound,
    element: <NotFoundPage />,
  },
  {
    path: RouteIdEnum.Any,
    element: <NotFoundPage />,
  },
];
