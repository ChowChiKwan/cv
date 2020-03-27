/**
 * Created by niefz on 2018/9/18.
 */
import '@babel/polyfill';

import Vue from 'vue';

import { Loading } from 'element-ui';
import router from './routers';
import store from './stores';

import './sass/reset.scss';
import './sass/common.scss';
import './sass/element.scss';

import App from './index.vue';

Vue.use(Loading.directive);

/**
 * Element 全局配置
 * @type {{size: string}}
 */
Vue.prototype.$ELEMENT = { size: 'small' };


const app = new Vue({
  el: '.wrapper',
  router,
  store,
  render: h => h(App),
});

export default { app };
