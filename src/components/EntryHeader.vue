<template>
  <div>
    <div class="header">
      <!-- <li><router-link to="/">index</router-link></li>  -->
      <li><router-link to="/yd/entry">blog</router-link></li>
      <li><router-link to="/yd/archives">归档</router-link></li>
      <li><router-link to="/yd/guitar">音乐</router-link></li>
      <li><router-link to="/yd/about">关于</router-link></li>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'EnteryHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fade-enter-active{
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.header{
  padding: 20px 0 ;
  display: flex;
  justify-content: center;
}
.header a{
  color: #333;
}
.header li{
  list-style: none;
}
</style>
