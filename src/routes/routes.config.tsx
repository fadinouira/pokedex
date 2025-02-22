import { RouteIdEnum } from '@/config';
import { Navigate, RouteObject } from 'react-router';

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
    // TODO: Will later be replaced with <NotFound />
    path: RouteIdEnum.NotFound,
    element: <div>NotFound</div>,
  },
  {
    path: RouteIdEnum.Any,
    element: <Navigate to={RouteIdEnum.NotFound} />,
  },
];
