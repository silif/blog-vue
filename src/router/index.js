import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Post from '@/pages/Post.vue'
import About from '@/pages/About.vue'
import Entry from '@/pages/Entry.vue'
import EntryHeader from '@/components/EntryHeader.vue'
import Archives from '@/pages/Archives.vue'
import Guitar from '@/pages/Guitar.vue'
Vue.use(Router)
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: ''
      }
    }, {
      path: '/yd',
      name: 'EntryHeader',
      component: EntryHeader,
      children: [
        {
          path: 'post/:id',
          name: 'Post',
          component: Post
        }, {
          path: 'about',
          name: 'about',
          component: About
        }, {
          path: 'entry',
          name: 'entry',
          component: Entry
        }, {
          path: 'Archives',
          name: 'archives',
          component: Archives
        }, {
          path: 'Guitar',
          name: 'guitar',
          component: Guitar
        }
      ]
    }
  ]
})
