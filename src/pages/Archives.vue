<template>
    <div class="wrap">
      <PostList :articles="articles"/>
    </div>
</template>

<script>
import PostList from '../components/PostList'
import axios from 'axios'
import {ALL_POSTS} from '../utils/constant.js'
// import dayjs from 'dayjs'
export default {
  name: 'archives',
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
    axios.get(`${ALL_POSTS}`)
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
<style scopd>
</style>
