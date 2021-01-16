<template>


    <div class="docs-container"> 
        <header>
            <h1>Create Laravel Application</h1>
            <small class="badge bg-info">January 09, 2021</small>
        </header>  

        <article>
            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">
                            Getting Started
                        </a>
                        <a class="list-group-item list-group-item-action"  data-bs-toggle="collapse" href="#laravel-route-list" role="tab" aria-expanded="false" aria-controls="laravel-route-list">
                            Laravel Route
                        </a>
                            <div class="collapse" id="laravel-route-list"> 
                                <ul class="list-group">
                                    <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action"  data-bs-toggle="list"  href="#list-built-in-route"  role="tab" aria-controls="route">
                                            Basic Built-in Route
                                        </a>
                                    </li>
                                    <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#list-route-basic"  role="tab" aria-controls="basic-route">
                                            Make Controller
                                        </a>
                                    </li>
                                    <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action" id="custom-route-list" data-bs-toggle="list" href="#custom-route"  role="tab" aria-controls="custom-route">
                                            Create Custom Route
                                        </a>
                                    </li>

                                    <!-- <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action" id="custom-route-list" data-bs-toggle="list" href="#custom-route"  role="tab" aria-controls="custom-route">
                                            Slug
                                        </a>
                                    </li> -->

                                </ul>   
                            </div> 
                        <a class="list-group-item list-group-item-action" id="list-laravel-vue-component-list" data-bs-toggle="collapse" href="#laravel-vue-component" role="tab" aria-controls="laravel-vue-component">
                            Laravel + Vue Components
                        </a>

                        <div class="collapse" id="laravel-vue-component"> 
                                <ul class="list-group">
                                    <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action"  id="list-laravel-vue-route-list" data-bs-toggle="list"  href="#list-laravel-vue-routes"  role="tab" aria-controls="laravel-vue-route">
                                            Intalling Vue
                                        </a>
                                    </li> 
                                    <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action"  id="vue-setup" data-bs-toggle="list"  href="#list-vue-setup"  role="tab" aria-controls="list-vue-setup">
                                            Vue Setup
                                        </a>
                                    </li>   
                                    <li class="list-group-item" >
                                        <a class="list-group-item list-group-item-action"  id="vue-components" data-bs-toggle="list"  href="#list-vue-components"  role="tab" aria-controls="list-vue-components">
                                            Components
                                        </a>
                                    </li>   
                                </ul>   
                            </div> 
 
                         <a class="list-group-item list-group-item-action" data-bs-toggle="collapse" href="#laravel-vue-route" role="tab" aria-controls="laravel-vue-route">
                            Laravel + Vue Route
                        </a>
                    </div>
                </div>


                <div class="col-8 sidebar-right-bar">
                    <div class="tab-content" id="nav-tabContent"> 
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <getting-started />
                        </div>
                        <div class="tab-pane fade" id="list-built-in-route" role="tabpanel" aria-labelledby="list-built-in-route">
                            <laravel-route />
                        </div>
                        <div class="tab-pane fade" id="list-route-basic" role="tabpanel" aria-labelledby="list-basic-route">
                            <laravel-basic-route />
                        </div>
                        <div class="tab-pane fade" id="custom-route" role="tabpanel" aria-labelledby="custom-route-list">
                            <custom-route />
                        </div>
    
                        <div class="tab-pane fade" id="list-laravel-vue-component" role="tabpanel" aria-labelledby="list-laravel-vue-component-list">
                            <index-vue></index-vue> 
                        </div>
                        
                        <div class="tab-pane fade" id="list-vue-setup" role="tabpanel" aria-labelledby="vue-setup">
                            <setup-vue></setup-vue>
                        </div>

                        <div class="tab-pane fade" id="list-vue-components" role="tabpanel" aria-labelledby="vue-components">
                            <vue-components></vue-components> 
                        </div>



                    </div>
                </div>
                </div>
        </article>
         
    </div>
</template>

<script>
import GettingStarted from '../laravel/routes/getting-started'
import LaravelRoute from '../laravel/routes/laravel-route'
import LaravelBasicRoute from '../laravel/routes/laravel-basic-route'
import CustomRoute from '../laravel/routes/custom-route'
import slug from '../laravel/routes/custom-route'
import indexVue from '../laravel-vue/routes/index'
import setupVue from '../laravel-vue/routes/setup.vue'
import VueComponents from '../laravel-vue/routes/vue-components'

 
export default {
    components: {
        GettingStarted,
        LaravelRoute,
        LaravelBasicRoute,
        CustomRoute,
        slug,
        indexVue,
        setupVue,
        VueComponents
    } 
}
 
</script>