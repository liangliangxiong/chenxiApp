import App from './App'
import uView from 'uview-ui';
import store from "./store";
import tabBar from "@/components/tabbar/tabbar.vue"//引入我们自己定义的tabBar组件
import Search from "@/components/search/search.vue"
import Buttonbox from "@/components/buttonbox/buttonbox.vue"

import Vue from 'vue'
Vue.component('tab-bar', tabBar)//使用tabBar组件
Vue.component('search', Search)
Vue.component('buttonbox', Buttonbox)

Vue.use(uView);

import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()
