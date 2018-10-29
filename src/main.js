// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import Users from './components/Users'
import Test from './components/Test'
import User from './models/User'
import Notifications from 'vue-notification'
import ProgressBar from 'vue-simple-progress'

Vue.use(vueResource)
Vue.use(vueRouter)
Vue.config.productionTip = false

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  {path: '/', component: Users},
  {path: '/test', component: Test}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  components: { App, ProgressBar, Notifications }, 
  template:
  `
  <div id=app>
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/Test">Test</router-link></li>
    </ul>
    <router-view></router-view>
  </div>

  `
}).$mount('#app')
