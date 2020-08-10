import loadable from '@loadable/component';

import { RouteConfig } from 'react-router-config';

// Interface Route {
//   Path: string;
//   Component: JSX.Element;
//   Exact?: boolean;
//   Routes?: Array<Route>;
// }

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() =>
      import(/* WebpackChunkName: "home" */ '@/pages/Home')
    )
  },
  {
    path: '/topics',
    component: loadable(() =>
      import(/* WebpackChunkName: "topics" */ '@/pages/topics')
    ),
    routes: [
      {
        path: '/topics',
        exact: true,
        component: loadable(() => import('@/pages/topics/home'))
      },
      {
        path: '/topics/:id',
        component: loadable(() => import('@/pages/topics/topic'))
      }
    ]
  },
  {
    path: '/clip',
    component: loadable(() => import('@/pages/Clip'))
  },
  {
    path: '/word-break',
    component: loadable(() => import('@/pages/WordBreak'))
  },
  {
    path: '/object-fit',
    component: loadable(() => import('@/pages/ObjectFit'))
  },
  {
    path: '/grid',
    component: loadable(() => import('@/pages/Grid'))
  },
  {
    path: '/line-height',
    component: loadable(() => import('@/pages/LineHeight'))
  },
  {
    path: '/gradient',
    component: loadable(() => import('@/pages/Gradient'))
  },
  {
    path: '/autonumeric',
    component: loadable(() => import('@/pages/Autonumeric'))
  },
  {
    path: '*',
    component: loadable(() => import('@/pages/Gradient'))
  }
];

export default routes;
