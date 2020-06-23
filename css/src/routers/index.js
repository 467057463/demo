import loadable from "@loadable/component";

const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import(/* webpackChunkName: "home" */ '@/pages/Home'))
  },
  {
    path: '/topics',
    component: loadable(() => import(/* webpackChunkName: "topics" */ '@/pages/topics')),
    routes: [
      {
        path: '/topics',
        exact: true,
        component: loadable(() => import('@/pages/topics/home')),
      },
      {
        path: '/topics/:id',
        component: loadable(() => import('@/pages/topics/topic')),
      }
    ]
  },
  {
    path: '/clip',
    component: loadable(() => import('@/pages/Clip')),    
  },
  {
    path: '/word-break',
    component: loadable(() => import('@/pages/WordBreak')),
  },
  {
    path: '/object-fit',
    component: loadable(() => import('@/pages/ObjectFit')),    
  },
  {
    path: '/grid',
    component: loadable(() => import('@/pages/Grid')),    
  },
  {
    path: '/line-height',
    component: loadable(() => import('@/pages/LineHeight')),  

  },
  {
    path: '/gradient',
    component: loadable(() => import('@/pages/Gradient')),      
  },
  {
    path: '*',
    component: loadable(() => import('@/pages/Gradient'))
  }
]

export default routes;