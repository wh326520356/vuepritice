import Vue from "vue";
import App from "./src/App.vue"
import router from "./src/router/router"
import "./src/style/style.less"

new Vue({
    el: '#example',
    router,
    components: { App },
    template: '<App/>'
})