import ElTableWrapper from './ElTableWrapperMe'

ElTableWrapper.install = function(Vue) {
  Vue.component(ElTableWrapper.name, ElTableWrapper)
}

export default ElTableWrapper
