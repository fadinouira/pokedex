import { RouteIdEnum } from '@/app/config';
import { NotFoundPage } from '@/pages';
import { RouteObject } from 'react-router';
import { SearchPokemonPage, ViewPokemonPage } from '../features';

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
