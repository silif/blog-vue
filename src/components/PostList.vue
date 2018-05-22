<template>
  <ul class="post-list">
    <li :key="item.id" v-for="item in articles">
      <span class="createdat">{{item.createdAt.slice(0,10)}} » </span>
      <router-link class="postlink" :to="{ name: 'post', params: { id: item.id }}">{{item.title}}</router-link>
      <span class="tag">（标签：
        <router-link class="taglink" :to="{name:'archive', params: { tagname:item.tagname }}">{{item.tagname}}</router-link>）
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'postlist',
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
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
  .taglink{
    color: #999;
  }
  .taglink:hover{
    color: #918
  }
  .post-list .postlink{
    color: #333;
    padding:  .1em 0;
  }
  .post-list .postlink:hover{
    color: #918
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
