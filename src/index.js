import ElTableWrapper from './components/ElTableWrapper'

const install = function(Vue) {
  Vue.component(ElTableWrapper.name, ElTableWrapper)
}

ElTableWrapper.install = install

export default ElTableWrapper

export {
  install,
  ElTableWrapper
}
