<template>
  <div class="mainbody">
    <div class="infomation">
      <!-- <span>{{postInfo.title}}</span> -->
      <span>标签：{{postInfo.tagname}}</span>
      <span>创建日期：{{postInfo.created | moment("YYYY-MM-DD")}}</span>
      <span class="id">id：{{postInfo.id}}</span>
    </div>
    <div class="post" v-html="post">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {ONE_POST} from '../utils/constant.js'
export default {
  name: 'post',
  data () {
    return {
      loading: true,
      post: '',
      postInfo: {}
    }
  },
  mounted () {
    const self = this
    const id = this.$route.params.id
    console.log(this.$route.params.id)
    axios.get(`${ONE_POST}/${id}`)
      .then(function (response) {
        if (response.data.result === 'success' && response.data.data) {
          self.post = response.data.data.post
          let postData = response.data.data
          self.postInfo = {
            title: postData.title,
            created: postData.createdAt,
            id: postData.id,
            tagname: postData.tagname
          }
          self.loading = false
        } else {
          self.result = 'nodata'
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<style>
.post{
    width: 800px;
    margin: auto;
    word-wrap: break-word;
    border: 1px solid #ddd;
    padding: 34px;
    border-radius: 2px;
    text-align: left;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
}
.post h1{
    font-weight: 600;
    border-bottom: 1px solid #eee;
}
.post li{
    position: relative;
}
.post pre{
  background: #f6f8fa;
  padding: .6em;
  border-radius: 4px;
}
.infomation{
  text-align: right;
  padding: 1em;
}
.id{
  text-decoration: line-through
}
</style>
