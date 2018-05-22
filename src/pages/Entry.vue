<template>
  <div>
    <!-- <div v-html="testHtml"></div> -->
    <div class="wrap">
      <h3>近期文章</h3>
      <ul class="post-list">
        <li :key="item.id" v-for="item in articles">
          <span class="createdat">{{item.createdAt.slice(0,10)}} » </span>
          <router-link :to="{ name: 'Post', params: { id: item.id }}">{{item.title}}</router-link>
          <span class="tag">（标签：{{item.tag}}）</span>
        </li>
      </ul>
      <div class="norepost"><router-link to="/yd/archives">更多</router-link></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {LATEST_POSTS} from '../utils/constant.js'
// import dayjs from 'dayjs'
export default {
  name: 'Entry',
  data () {
    return {
      articles: []
    }
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
.createdat{
  color: #999;
  font-size: 12px;
}
.wrap{
  width: 800px;
  margin: auto;
  text-align: left;
}
.post-list li{
  padding: 1em 0 ;
}
.norepost{
  padding-left: 50px;
}
.tag{
  font-size: 12px;
  font-style: oblique;
  color: #999;
}
</style>
