export default [
  {
    path: '/',
    redirect: { path: '/home' },
    component: {
      template: '<router-view></router-view>',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: r => require.ensure([], (require) => {
          r(require('src/templates/home/home.vue'));
        }, 'home'),
      },
    ],
  },
];
