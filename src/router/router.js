import { createRouter,createWebHashHistory } from "vue-router";
import Dishes from '../pages/dishes.vue'
import Cart from '../pages/cart.vue'
import Home from '../pages/home.vue'

export  default createRouter({
        history:createWebHashHistory(),
        routes:[
            {path: '/home',component:Home, alias:'/'},
            {path: '/dishes',component:Dishes},
            {path: '/cart', component:Cart}
        ]
})