import { RouteIdEnum } from '@/app/config';
import { NotFoundPage } from '@/pages';
import { RouteObject } from 'react-router';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    // TODO: Will later be replaced with <Home />
    element: <div>Page Coming Soon</div>,
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
