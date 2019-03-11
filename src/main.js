import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 数据存储
import store from './store'
// ant ui主题
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
