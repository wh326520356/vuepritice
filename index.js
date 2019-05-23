import Vue from "vue";
import App from "./src/App.vue"
import Router from "./src/router/router"

new Vue({
    router:Router,
    components: { App },
    template: '<App/>'
}).$mount('#example')