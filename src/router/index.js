import Vue from 'vue'
import Router from 'vue-router'

const _import = file => () => import('@components/' + file + '.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: _import('main/main'),
      redirect: {name: 'main.mine'},
      children: [
        {
          path: 'home',
          name: 'main.home',
          component: _import('main/home')
        },
        {
          path: 'found',
          name: 'main.found',
          component: _import('main/found')
        },
        {
          path: 'message',
          name: 'main.message',
          component: _import('main/message')
        },
        {
          path: 'mine',
          name: 'main.mine',
          component: _import('main/mine')
        }
      ]
    }
  ]
})
