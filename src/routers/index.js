/**
 * Created by niefz on 2018/9/18.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './module/home';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    ...Home,
  ],
});
