<template>
  <div id="app">
    <Play />
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Play from './Play'

export default {
  name: 'app',
  components: {
    Play
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
