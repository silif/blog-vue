
import func from './vue-temp/vue-editor-bridge';
<style scoped>
.upload-form label{
    width: 6em;
    display: inline-block
}
.upload-form input{
    width: 20em;
    padding: 3px;
    border-radius: 4px;
    border: 1px solid #444;
    text-indent: 3px;
}
.fo-item{
    padding: 10px 0;
}
</style>
<template>
    <div>
        <h3>上传文档</h3>
        <form enctype="multipart/form-data" class="upload-form">
            <div class="fo-item">
                <label for="">
                    标题：
                </label>
                <input type="text" v-model="title">
            </div>
            <div class="fo-item">
                <label for="tagname">
                    标签：
                </label>
                <input type="text" name="" id="tagname" v-model="tagname">
            </div>
            <div class="fo-item">
                <label for="post">
                    文章：
                </label>
                <input type="file" name="" @change="selectFile($event)" id="post" >
            </div>
            <div class="fo-item">
                <label for="username">
                    username:
                </label>
                <input type="text" name="" id="username" v-model="username">
            </div>
            <div class="fo-item">
                <label for="password">
                    password:
                </label>
                <input type="password" name="" id="password" v-model="password">
            </div>
            <div class="fo-item">
                <button v-bind:class="{loading:loading}" v-on:click.stop.prevent="upload">上传</button>
            </div>
        </form>
    </div>
</template>
<script>
import {NEW_POST} from '../utils/constant.js'
import axios from 'axios'
export default {
  name: 'Upload',
  data () {
    return {
      title: '',
      tagname: '',
      post: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    upload: function () {
      this.loading = true
      const {title, tagname, password, username, post} = this
      let params = new FormData()
      params.append('title', title)
      params.append('tagname', tagname)
      params.append('post', post)
      // const self = this
      axios.post(`${NEW_POST}/${username}/${password}`, params)
        .then(function (response) {
          console.log(response)
          if(response.data.result === 'success') {
            alert("上传成功！")
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    selectFile: function (event) {
      this.post = event.target.files[0]
    }
  }
}
</script>
