<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid"> 
                
                <router-link class="navbar-brand" aria-current="page" to="/documentation">Documentation</router-link> 
                   
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"> 
                        <router-link class="nav-link active" aria-current="page" to="/laravel-vue">Laravel Vue</router-link> 
                    </li>
                    <li class="nav-item"> 
                        <router-link class="nav-link" aria-current="page" to="/react">React</router-link> 
                    </li> 
                    <li class="nav-item"> 
                        <router-link class="nav-link" aria-current="page" to="/pythonDjango">Python/Django</router-link> 
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

 