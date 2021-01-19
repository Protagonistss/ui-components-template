import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { Button, Input } from 'ant-design-vue'
import { registryAntCmp } from './utils/util'
import UiCmp from '../../src/packages'

const CMPS = [Button, Input]

CMPS.forEach(cmp => { 
  registryAntCmp(Vue, cmp)
})

Vue.use(UiCmp)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
