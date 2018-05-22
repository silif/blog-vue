<template>
  <div class="index-in-c">
    <IndexInfo/>
  </div>
</template>

<script>
import IndexInfo from '../components/IndexInfo'
export default {
  name: 'Index',
  components: {
    IndexInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index-in-c{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
