import HelloWorld from './components/hello-world/index.js'

import Button1 from './components/button1/index.js'
const components = [HelloWorld, Button1]
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export { HelloWorld, Button1 }
export default {
  install
}
