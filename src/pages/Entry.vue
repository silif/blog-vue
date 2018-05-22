<template>
  <div>
    <!-- <div v-html="testHtml"></div> -->
    <div class="wrap">
      <h3>近期文章</h3>
      <PostList :articles="articles"/>
      <div class="norepost"><router-link to="/yd/archives">更多</router-link></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PostList from '../components/PostList'
import {LATEST_POSTS} from '../utils/constant.js'
// import dayjs from 'dayjs'
export default {
  name: 'entry',
  data () {
    return {
      articles: []
    }
  },
  components: {
    PostList
  },
  mounted () {
    const self = this
    axios.get(`${LATEST_POSTS}`)
      .then(function (response) {
        console.log(response)
        self.articles = response.data.data
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    converUTC: function (utcDate) {
      var year = utcDate.toISOString()
      return year
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
