<template>
  <div id="app">
    <DDA/>
  </div>
</template>

<script>
  import DDA from './components/DDA'

  export default {
    name: 'App',
    components: {
      DDA,
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
