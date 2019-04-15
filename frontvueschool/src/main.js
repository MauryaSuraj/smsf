import Vue from 'vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'
import App from './App.vue'
import { routes } from './routes'

Vue.use(Toasted, {
  iconPack : 'fontawesome',
  theme : 'bubble',
  singleton : true,
  fullwidth : true
})

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
