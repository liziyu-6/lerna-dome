import Button1 from './Button1.vue'

/* istanbul ignore next */
console.log(Button1, '?????')
Button1.install = function (Vue) {
  Vue.component(Button1.name, Button1)
}

export default Button1
