<template>
    <Header />
    <DisplayGames />
</template>

<script>
  import DisplayGames from './components/DisplayGames.vue'
  import Header from './components/Header.vue'
 

  export default {
    name: 'App',
    components: {
      DisplayGames,
      Header,
    },
    
  }
</script>

<style>
  #app1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #186192;
  }

  * {
    margin: 0
  }
</style>