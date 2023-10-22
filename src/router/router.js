import { createRouter,createWebHashHistory } from "vue-router";
import Dishes from '../pages/dishes.vue'
import Cart from '../pages/cart.vue'
import Home from '../pages/home.vue'
import SignIn from '../pages/signin.vue'
import SignUp from '../pages/signup.vue'


export  default createRouter({
        history:createWebHashHistory(),
        routes:[
            {path: '/home',component:Home, alias:'/'},
            {path: '/dishes',component:Dishes},
            {path: '/cart', component:Cart},
            {path: '/signin', component:SignIn ,},
            {path: '/signup', component:SignUp}
        ]
})