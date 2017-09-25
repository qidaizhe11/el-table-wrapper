import ElTableWrapper from './ElTableWrapper'
import ElTableColumnWrapper from './ElTableColumnWrapper'

ElTableWrapper.install = function(Vue) {
  Vue.component(ElTableWrapper.name, ElTableWrapper)
}

ElTableColumnWrapper.install = function(Vue) {
  Vue.component(ElTableColumnWrapper.name, ElTableColumnWrapper)
}

export {
  ElTableWrapper,
  ElTableColumnWrapper
}

// export default function(Vue) {
//   Vue.component(ElTableWrapper.name, ElTableWrapper)
//   Vue.component(ElTableColumnWrapper.name, ElTableColumnWrapper)
// };

// export { ElTableWrapper, ElTableColumnWrapper }
