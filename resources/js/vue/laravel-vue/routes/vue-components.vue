<template>
    <div>
        <h2>Vue Components</h2>
        <p>
            Last tutorial we discuss about installing our vue in laravel application and setting up our vue 
            to make it functinal and to complete it lets add components.
        </p>
        <p>
            let's navigate the resources/js folder and create a folder called vue and app.vue file inside our vue folder
        </p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token variable">C:\laragon\www\myLaraVue\resources\js\vue\app.vue</span>
                </code>
            </pre>    
        </div> 
        <p>
            Open your created file called app.vue and you should see empty and lets add some tags.
        </p>

        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token dark-grey">&lt;</span><span class="token light-blue">template</span><span class="token dark-grey">></span>
        <span class="token dark-grey">&lt;</span><span class="token light-blue">div</span><span class="token dark-grey">></span>
            <span class="token dark-grey">&lt;</span><span class="token light-blue">h2</span><span class="token dark-grey">></span>
                This is my first component
            <span class="token dark-grey">&lt;/</span><span class="token light-blue">h2</span><span class="token dark-grey">></span>
        <span class="token dark-grey">&lt;/</span><span class="token light-blue">div</span><span class="token dark-grey">></span>
    <span class="token dark-grey">&lt;/</span><span class="token light-blue">template</span><span class="token dark-grey">></span>
                </code>
            </pre>    
        </div>  
        <p>
            We have basic template component now and lets import this into our app.js. So, open app.js again and import our newly created component.
        </p>
        <p>
            myLaraVue/resources/js/app.js
        </p>
        
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-yellow">require</span><span class="token punctuation">(</span><span class="token light-brown">'./bootstrap'</span><span class="token punctuation">);</span>
     
    <span class="token light-pink">import</span> <span class="token light-cyan">Vue</span> <span class="token light-pink">from</span> <span class="token light-brown">'vue'</span>
    <span class="token light-pink">import</span> <span class="token light-cyan">App</span> <span class="token light-pink">from</span> <span class="token light-brown">'./vue/app'</span>
    
    <span class="token light-blue">const app</span> <span class="token punctuation">=</span> <span class="token light-blue">new</span> <span class="token light-green">Vue</span><span class="token punctuation">({</span>
        <span class="token light-cyan">el:</span> <span class="token light-brown">'#app'</span><span class="token punctuation">,</span>
        <span class="token  light-cyan">components: </span><span class="token punctuation">{</span><span class="token punctuation"> App </span> <span>}</span>
    <span class="token punctuation">})</span>
                </code>
            </pre>    
        </div>

        <p>
            './vue/app' or './vue/app' are the same you can enter both command whatever you like
            import App from './vue/app' calling the component from ./vue/app. 
            We also added period sign before the forwardslash because our app.js has same dir to vue/app.   
        </p>
         <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token variable">C:\laragon\www\myLaraVue\resources\js\vue\app.js</span>
    <span class="token variable">C:\laragon\www\myLaraVue\resources\js\app.js</span> 
                </code>
            </pre>    
        </div> 

        <p>
            We already have define the #app element in our myblog.blade.php. Now lets define our components called App in our myblog.blade.php
        </p>
        <p>
            myblog.blade.php
        </p>
        <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx"> 
    <span class="token dark-grey">&lt;!</span><span class="token light-blue" >DOCTYPE </span><span class="token light-cyan">html</span><span class="token dark-grey" >></span>
    <span class="token dark-grey">&lt;</span><span class="token light-blue">html </span><span class="token light-cyan">lang</span><span class="token punctuation">=</span><span class="token light-brown">"</span><span class="token light-brown">{</span><span class="token light-brown">{</span><span class="token light-brown">str_replace('_', '-', </span><span class="token light-brown">app(</span><span class="token light-brown">)</span><span class="token light-brown">->getLocale())}}"</span><span class="token punctuation"> > </span>
        <span class="token dark-grey">&lt;</span><span class="token light-blue">head</span><span class="token dark-grey">></span>
            <span class="token dark-grey">&lt;</span><span class="token light-blue">meta</span><span class="token dark-grey">></span> <span class="token light-cyan">charset</span><span class="token punctuation">=</span><span class="token light-brown">"utf-8"</span><span class="token dark-grey">></span>
            <span class="token dark-grey">&lt;</span><span class="token light-blue">meta</span><span class="token dark-grey">></span> <span class="token light-cyan">name</span><span class="token punctuation">=</span><span class="token light-brown">"viewport"</span> <span class="token light-cyan">content</span><span class="token punctuation">=</span><span class="token light-brown">"width=device-width, initial-scale=1"</span><span class="token dark-grey">></span>
            <span class="token dark-grey">&lt;</span><span class="token light-blue">title</span><span class="token dark-grey">></span><span class="token punctuation">My Blog</span><span class="token dark-grey">&lt;/</span><span class="token light-blue">title</span><span class="token dark-grey">></span>
        <span class="token dark-grey">&lt;/</span><span class="token light-blue">head</span><span class="token dark-grey">></span>
        <span class="token dark-grey">&lt;</span><span class="token light-blue">body</span><span class="token dark-grey">></span>
            <span class="token dark-grey">&lt;</span><span class="token light-blue">div</span> <span class="token light-cyan">id</span><span class="token punctuation">=</span><span class="token light-brown">"app"</span> <span class="token dark-grey">></span>         
                <span class="token dark-grey">&lt;</span><span class="token light-blue">app</span><span class="token dark-grey">></span><span class="token dark-grey">&lt;/</span><span class="token light-blue">app</span><span class="token dark-grey">></span>
            <span class="token dark-grey">&lt;/</span><span class="token light-blue">div</span><span class="token dark-grey">></span> 
        <span class="token dark-grey">&lt;</span><span class="token light-blue">script</span> <span class="token light-cyan">src</span><span class="token punctuation">=</span><span class="token light-brown">" {</span><span class="token light-brown">{</span><span class="token light-brown"> mix('js/app.js') }}"</span><span class="token dark-grey">&lt;/</span><span class="token light-blue">script</span><span class="token dark-grey">></span>
        <span class="token dark-grey">&lt;/</span><span class="token light-blue">body</span><span class="token dark-grey">></span>
    <span class="token dark-grey">&lt;/</span><span class="token light-blue">html</span><span class="token dark-grey">></span>
                </code>
            </pre>    
        </div>

        <p>
            Now lets save our changes in our file and the site should reload it automatically because we already have npm run hot running. 
            The site should display a message.
        </p>
        <div class="browser"> 
            <p>127.0.0.1:8000/myBlog</p>
        </div>
        <div class="browser-body">
            <h2>
                This is my first component
            </h2>
        </div>

        <h2>Conclusion</h2>
        <p>
            In this tutorial we learned how to emplement basic vue to our laravel. 
            We create app.vue and added tags and the first tag should be template and follow the html tags.
            Import the created app.vue in app.js then added as components to defined it in our blade.php
        </p>
        <p>   
            So far, we created a very nice basic laravel vue tutorial and the next tutorial we will discuss how to create laravel vue route
        </p>
    </div>
</template>