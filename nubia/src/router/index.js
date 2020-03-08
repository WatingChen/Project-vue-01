import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/views/Product'
import Home from '@/views/Home'
import MyCart from '@/views/MyCart'
import Login from '@/views/Login'
import Phone from '@/views/Phone'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/myCart',
    component: MyCart
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/product/s/:id',
    component: Product
  },
  {
    path: '/phone/:xxx/:id',
    component: Phone,
    children: [
    ]
  }
]

const router = new VueRouter({
  routes
})

// 配置全局路由守卫（拦截）
// router.beforeEach((to, from, next)=>{
//   // console.log(to) //跳转的是myCart才拦截
//   if (to.path === '/myCart'){
//     // console.log("被拦截")
//     if (localStorage.getItem('token')){
//       next()
//     } else {
//       console.log('重定向到 login页面')
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

/**
 * 重写路由的push方法
*/
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default router
