
import { createRouter, createWebHashHistory} from "vue-router"

import Main from "../components/Main.vue";
import loginRegister from "../components/loginRegister.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Manage from"../views/Manage.vue"
import Setting from"../views/Setting.vue"



const router =createRouter({
  history:createWebHashHistory(),
  routes : [ 
    {
      path: '/',
      name: 'login',
      component: loginRegister
    },
  

 
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {
          path:'/main/home',
          name:'home',
          component : Home

        },
        {
          path:'/main/user',
          name:'user',
          component : User

        },
        {
          path:'/main/manage',
          name:'manage',
          component : Manage

        },
        {
          path:'/main/setting',
          name:'setting',
          component : Setting

        },
      ]
    },
 
  ]
}

) 
    




export default router;
