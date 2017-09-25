<template>
  <div id="app">
    <Play2 />
  </div>
</template>

<script>
// import Hello from './components/Hello'
// import Play from './components/Play'
import Play2 from './components/Play2'

export default {
  name: 'app',
  components: {
    Play2
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
