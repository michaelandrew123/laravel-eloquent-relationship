require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'
import router from './router'

const app = new Vue({
    el: '#app',
    components: { App },
    router
})
