import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  routes: [
    // { path: '/login', component: 'login' },
    { path: '/', component: '@/pages/test1/index' },
    {
      path: '/',
      component: '@/layout',
      routes: [
        { path: '/test1', component: '@/pages/test1/index' },
        { path: '/test2', component: '@/pages/test2/index' },
        { path: '/read-books-1', component: '@/pages/read-books-1/index' },
        { path: '/read-books-2', component: '@/pages/read-books-2/index' },
        { path: '/person-time-line-1', component: '@/pages/person-time-line-1/index' },
        { path: '/writer-time-line-1', component: '@/pages/writer-time-line-1/index' },
        
        
      ],
    }, 
  ]
});
