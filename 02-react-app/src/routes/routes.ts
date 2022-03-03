import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));
/**
 * Con webpack puedo cambiar el nombre del chunk
 * que es el archivo build que se genera
 * Manera de hacerlo  abajo
 */

// const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2Page" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

// export const routes: Route[] = [
//   {
//     to: '/lazy1',
//     path: 'lazy1',
//     Component: Lazy1,
//     name: 'Lazy Page 1',
//   },
//   {
//     to: '/lazy2',
//     path: 'lazy2',
//     Component: Lazy2,
//     name: 'Lazy Page 2',
//   },
//   {
//     to: '/lazy3',
//     path: 'lazy3',
//     Component: Lazy3,
//     name: 'Lazy Page 3',
//   }
// ]

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload',
    Component: LazyLayout,
    name: 'lazyload - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  }
]