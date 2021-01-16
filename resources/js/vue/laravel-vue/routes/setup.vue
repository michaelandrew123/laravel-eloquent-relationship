<template>
    <div>
        <h2>Vue SetUp</h2>
        <p>Let's setup our new install vue into our laravel application. To start with we need to navigate our app.js inside resources folder</p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token variable">C:\laragon\www\myLaraVue\resources\js\app.js</span>
                </code>
            </pre>    
        </div> 
        <p>Our app.js file has only require('./bootstrap') inside as default.</p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-yellow">require</span><span class="token punctuation">(</span><span class="token light-brown">'./bootstrap'</span><span class="token punctuation">);</span>
                </code>
            </pre>    
        </div> 
        <p>
            Let's add some code to call our vue installed
        </p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-yellow">require</span><span class="token punctuation">(</span><span class="token light-brown">'./bootstrap'</span><span class="token punctuation">);</span>
     
    <span class="token light-pink">import</span> <span class="token light-cyan">Vue</span> <span class="token light-pink">from</span> <span class="token light-brown">'vue'</span>
                </code>
            </pre>    
        </div> 
        <p>
            Let's use and define our vue
        </p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-yellow">require</span><span class="token punctuation">(</span><span class="token light-brown">'./bootstrap'</span><span class="token punctuation">);</span>
     
    <span class="token light-pink">import</span> <span class="token light-cyan">Vue</span> <span class="token light-pink">from</span> <span class="token light-brown">'vue'</span>
    
    <span class="token light-blue">const app</span> <span class="token punctuation">=</span> <span class="token light-blue">new</span> <span class="token light-green">Vue</span><span class="token punctuation">({</span>
        <span class="token light-cyan">el:</span> <span class="token light-brown">'#app'</span>
    <span class="token punctuation">})</span>
                </code>
            </pre>    
        </div> 
        <p>
            el stands element and # number sign stands for id element
        </p> 
        <p>
            Now let's move to resources/view/myblog.blade.php
        </p>
        <p>
            We need to query the id element called app from our myblog.blade.php
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
               
            <span class="token dark-grey">&lt;/</span><span class="token light-blue">div</span><span class="token dark-grey">></span>
        
        <span class="token dark-grey">&lt;</span><span class="token light-blue">script</span> <span class="token light-cyan">src</span><span class="token punctuation">=</span><span class="token light-brown">" {</span><span class="token light-brown">{</span><span class="token light-brown"> mix('js/app.js') }}"</span><span class="token dark-grey">&lt;/</span><span class="token light-blue">script</span><span class="token dark-grey">></span>
        
        <span class="token dark-grey">&lt;/</span><span class="token light-blue">body</span><span class="token dark-grey">></span>
    <span class="token dark-grey">&lt;/</span><span class="token light-blue">html</span><span class="token dark-grey">></span>
                </code>
            </pre>    
        </div>
        <p>
            Perfect, we have a basic setup for the vue and before that, we need to run the npm run watch, npm run dev or npm run hot to build our project.  
        </p>
        <p>
            npm run watch, npm run dev and npm run hot they have same functionality but I think they have differences
        </p>
        <p>
            That command can be found in your root directory and package.json if you have those commnad in your package.json then the command should be available to run
        </p>
        <p>
            Those command will compile your Vue components into a raw javascript and install the mix-manifest.json inside your public folder. 
            As you can see we also added script tag with src mix('js/app.js') this means that we query the apps file inside to our js folder in resources.
            The vue setup will not completed without this. We call the Mix from the webpack.mix.js once we run the npm run hot it will automatic install the mix-manifest inside the public folder
            and process the files from js/app.js.
        </p>
        <p>
            I am using npm run hot I feel comfortable using on it and I notice it has a live changes when you change the backend coding.
        </p>

         <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token variable">C:\laragon\www\myLaraVue> npm run hot</span>
                </code>
            </pre>    
        </div> 

        <p>
            Now we have php artisan serve and npm run hot running together. 
        </p>
        
        <h2>Conclusion</h2>
        <p>
            Vue setup give us basic understanding on how to install the vue and apply to our laravel application.
        </p>
        <p>    
            As of now if we will enter the 127.0.0.1:8000 into our browser it give as nothing display because we dont have the component yet.
            We can add some tags and text directly into our myblog.blade.php but that's not what our vue want. Vue has a different way to add element and content to our site that more nicer and reliable.
            We already have the basic setup for the laravel vue, the next tutorial we will discuss on how to add components
        
        </p>
    </div>
</template>