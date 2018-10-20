<template>
  <div id="app">
    
    <users/>
  </div>
</template>

<script>
import users from './components/users'
import test from './components/Test'

export default {
  name: 'App',
  components: {
    users,test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 25px;
}
</style>
