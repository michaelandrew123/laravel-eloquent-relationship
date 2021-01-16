import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import newDocs from './vue/pages/docs'
import laravelVue from './vue/pages/laravel-vue'
import react from './vue/pages/react'
import pythonDjango from './vue/pages/python-django'
 

const routes = [
    {
        path: '/documentation',
        component: newDocs 
    },
    {
        path: '/laravel-vue',
        component: laravelVue
    },
    {
        path: '/react',
        component: react
    },
    {   
        path: '/pythonDjango',
        component: pythonDjango
    } 

]


export default new Router({
    mode: 'history',
    routes
})