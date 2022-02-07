<template>
    <DisplayGames />
</template>

<script>
import DisplayGames from './components/DisplayGames.vue'

export default {
  name: 'App',
  components: {
    DisplayGames
  },
}
</script>

<style>
#app {
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
