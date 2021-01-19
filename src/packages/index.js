import UiInput from '../packages/input'

const CMPS = [UiInput]

const install = Vue => { 
  if (install.installed) return
  CMPS.forEach(cmp => Vue.component(cmp.name, cmp))
}

if (typeof window !== 'undefined' && window.Vue) { 
  install(window.Vue)
}

export default {
  version: '0.1',
  install,
  UiInput
}