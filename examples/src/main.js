import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'
import { registryAntCmp } from './utils/util'
const CMPS = [Button]

CMPS.forEach(cmp => { 
  registryAntCmp(Vue, cmp)
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
