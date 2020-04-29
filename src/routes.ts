import { ReactElement } from 'react';
import Home from './pages/Home.bs';

interface Route {
  component: (props: any) => ReactElement;
  path: string;
  exact?: boolean;
  onLoad?: (path: string) => PromiseConstructor;
}

const routes: Array<Route> = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export default routes;