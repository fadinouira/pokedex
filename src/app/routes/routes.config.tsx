import { RouteIdEnum } from '@/app/config';
import { NotFoundPage } from '@/pages';
import { RouteObject } from 'react-router';
import { SearchPokemonPage } from '../features';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: <SearchPokemonPage />,
  },
  {
    path: RouteIdEnum.Pokemon,
    // TODO: Will later be replaced with <Pokemon />
    element: <div>Page Coming Soon</div>,
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
