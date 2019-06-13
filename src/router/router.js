import Router from "vue-router";
import Vue from 'vue'
Vue.use(Router);

export default new Router ({
    routes: [
        {
            path:'/home',
            mame: 'home',
            component: resolve=> require(['../components/Home.vue'],resolve)
        },
        {
            path: '/test',
            name: 'test',
            component: resolve=>require(['../components/test.vue'],resolve)
        }
    ]
})