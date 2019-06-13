import Vue from "vue";
import App from "./src/App.vue";
import store from './src/state/state';
import router from "./src/router/router";
import "./src/style/style.less";
router.beforeEach((to,form,next)=>{
    next();
})
new Vue({
    el: '#example',
    router,
    store,
    components: { App },
    template: '<App/>'
})