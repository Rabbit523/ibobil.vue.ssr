import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import metaMixin from './util/meta'
import * as filters from './util/filters'
require('intersection-observer');
// import VueCarousel from 'vue-carousel';
// import Lazyload from "vue-lazyload-img"
// Vue.use(Lazyload, {
//   fade: true,
//   speed: 20,
//   time: 300
// })
import { VLazyImagePlugin } from "v-lazy-image";
Vue.use(VLazyImagePlugin);


// import 'bootstrap/dist/css/bootstrap.css'
import './scss/style.scss'
// mixin for handling title
Vue.mixin(metaMixin)
Vue.mixin({
  data() {
    return {
      SERVER_URL: 'https://ibobil.fantasylab.io/api/auth/'
    }
  }
})
// Vue.use(VueCarousel);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp() {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
