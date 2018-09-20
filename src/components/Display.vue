<template>
  <div id="app">
    <h1>计算机图形学</h1>
    <h2>--阿豪</h2>
    <a class="link" :href="'#/'+i.url" v-for='i,k in list'>
      {{k+1}}, {{i.title}}
    </a>
  </div>
</template>

<script>
  export default {
    name: "Display",
    data() {
      return {
        list: [
          {
            title: 'dda',
            url: 'DDA',
          },
          {
            title: 'Bresenham',
            url: 'Bresenham',
          },
        ]
      }
    },
  }
</script>

<style scoped>
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .link {
    background: lightskyblue;
    padding: 10px;
    font-style: normal;
    color: black;
    font-size: 22px;
    margin: 10px;
    width: 200px;
  }
</style>
