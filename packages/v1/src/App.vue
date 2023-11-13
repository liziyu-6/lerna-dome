<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <HelloWorld
      shape="square"
      :size="50"
      :src="squareUrl"
      msg="Welcome to Your Vue.js App"
    ></HelloWorld>
    <Button></Button>
  </div>
</template>

<script>
import HelloWorld from './components/hello-world/index'
import Button from './components/button/Button.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
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
