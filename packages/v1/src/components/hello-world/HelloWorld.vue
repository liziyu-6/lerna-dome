<!--
 * @Author: lijun liziyu@163.com
 * @Date: 2023-11-07 10:39:53
 * @LastEditors: lijun liziyu@163.com
 * @LastEditTime: 2023-11-13 16:55:44
 * @FilePath: \dome\resh\pages\dome\src\components\hello-world\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>2222</div>
</template>
<script>
export default {
  name: 'HelloWorld',

  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].includes(val)
      }
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    }
  },

  data() {
    return {
      isImageExist: true
    }
  }
}
</script>
