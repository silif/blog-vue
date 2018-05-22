<template>
    <div class="wrap">
      <h3>{{tagname}}</h3>
      <PostList :articles="articles"/>
    </div>
</template>

<script>
import axios from 'axios'
import PostList from '../components/PostList'
import {POSTS_BY_TAGNAME} from '../utils/constant.js'
// import dayjs from 'dayjs'
export default {
  name: 'archive',
  data () {
    return {
      articles: [],
      tagname: ''
    }
  },
  components: {
    PostList
  },
  mounted () {
    const self = this
    const tagname = this.$route.params.tagname
    axios.get(`${POSTS_BY_TAGNAME}/${tagname}`)
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

<style>

</style>
