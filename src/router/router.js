import Router from "vue-router";
import Vue from 'vue'
Vue.use(Router);

export default new Router ({
    routers: [
        {
            path: '/',
            name: 'app',
            component: resolve=>require(['../App.vue'],resolve)
        },
        {
            path:'/home',
            mame: 'home',
            component: resolve=> require(['../components/Home.vue'],resolve)
        }
    ]
})