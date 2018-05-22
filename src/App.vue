<template>
  <div id="app">
    <!-- <ul class="header">
      <li><router-link to="/">index</router-link></li>
      <li><router-link to="/entry">首页</router-link></li>
      <li><router-link to="/archives">归档</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
    </ul> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.header{
  display: flex;
  justify-content: center;
}
.header li{
  padding: 0 1em
}
</style>
