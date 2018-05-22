import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Post from '@/pages/Post.vue'
import About from '@/pages/About.vue'
import Entry from '@/pages/Entry.vue'
import EntryHeader from '@/components/EntryHeader.vue'
import Archives from '@/pages/Archives.vue'
import Archive from '@/pages/Archive.vue'
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
      name: 'index',
      component: Index,
      meta: {
        title: 'te'
      }
    }, {
      path: '/yd',
      name: 'entryHeader',
      component: EntryHeader,
      children: [
        {
          path: 'post/:id',
          name: 'post',
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
          path: 'archives',
          name: 'archives',
          component: Archives
        }, {
          path: 'archive/:tagname',
          name: 'archive',
          component: Archive
        }, {
          path: 'guitar',
          name: 'guitar',
          component: Guitar
        }
      ]
    }
  ]
})
