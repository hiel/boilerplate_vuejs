import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import(/* webpackChunkName: "webMain" */ '@/components/main/Main')

Vue.use(Router)

// 라우터 생성
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: { name: 'AllOrderList' },
    },
  ],
})

export default router
