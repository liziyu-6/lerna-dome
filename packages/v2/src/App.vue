<!--
 * @Author: lijun liziyu@163.com
 * @Date: 2023-11-13 14:41:40
 * @LastEditors: lijun liziyu@163.com
 * @LastEditTime: 2023-11-13 16:21:30
 * @FilePath: \dome\lerna-dome\packages\v2\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import { HelloWorld } from 'v1'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
