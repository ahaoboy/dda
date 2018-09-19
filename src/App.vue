<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // import DDA from './components/DDA'
  // import DDA from './components/Bresenham'

  export default {
    name: 'App',
    components: {
      // DDA,
    }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
