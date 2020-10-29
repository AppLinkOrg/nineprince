import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
// import Setting from '@/components/Setting'
// import Tabs from '@/components/Tabs'
import Setfocus from '@/components/Setfocus'
import Sedetails from '@/components/Sedetails'
import Myinfor from '@/components/Myinfor'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Tabs',
    //   component: Tabs,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Home',
    //       component: Home
    //     },
    //     {
    //       path: 'setting',
    //       name: 'Setting',
    //       component: Setting
    //     },

        
    //   ]
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
 {
      path: '/sedetails',
      name: 'Sedetails',
      component: Sedetails
    },
    {
         path: '/setfocus',
         name: 'Setfocus',
         component: Setfocus
       },
       {
            path: '/myinfor',
            name: 'Myinfor',
            component: Myinfor
          }
  ]
})