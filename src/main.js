import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from '@/i18n/index.js'
import http from '@/http/http.js'

// 全局挂载 http（axios）,使用的时候直接使用 this.$http 即可。
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = http

if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
