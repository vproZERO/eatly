import { createRouter,createWebHashHistory } from "vue-router";
// import Home from '../pages/Home.vue'
import Dishes from '../pages/dishes.vue'
import SignIn from '../pages/signin.vue'
import SignUp from '../pages/signup.vue'
import Cart from '../pages/cart.vue'

export  default createRouter({
        history:createWebHashHistory(),
        routes:[
            // {path: '/home',component:Home, alias:'/'},
            {path: '/dishes',component:Dishes},
            {path: '/signin', component:SignIn},
            {path: '/signup', component:SignUp},
            {path: '/cart', component:Cart}
        ]
})