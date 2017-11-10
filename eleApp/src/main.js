
import Vue from 'vue'
import app from './App'
import router from './router'

import VueResouce from 'vue-resource' //用于ajax请求的vue插件

import './mock/mockServer'  //引入加载模块
import './common/stylus/fonts.styl'

import moment from 'moment'
import VueScroller from 'vue-scroller'

Vue.use(VueResouce)
Vue.use(VueScroller)

new Vue({
  el:'#app',
  router,
  render: h => h(app)
})




