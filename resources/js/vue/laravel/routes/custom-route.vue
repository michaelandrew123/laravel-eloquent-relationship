<template>
    <div>
        <h2>Custom Route</h2>
        <p>
            As we discuss in make controller tab, it's introduce us on how we can create our custom route. First we will create public function called myBlog and you can call it whatever you want or index maybe as your default. In my case lets call it myBlog.
        </p>

        <p>
            app/Http/Controllers/TestController.php
        </p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-blue">&lt;?php  </span>
        <span class="token light-blue">namespace</span><span class="token light-green"> App\Http\Controllers</span> <span class="token punctuation">;</span>
        <span class="token light-blue">use</span><span class="token punctuation"> Illuminate\Http\</span><span class="token light-green">Request</span> <span class="token punctuation">;</span>
        <span class="token light-blue">class</span> <span class="token light-green">TestController</span> <span class="token light-blue">extends</span> <span class="token light-green">Controller</span><span class="token punctuation">{</span>
        <span class="token light-green">//</span> 
        <span class="token light-blue">public function </span><span class="token light-yellow">myBlog</span><span class="token punctuation">(){</span>
            <span class="token light-pink">return </span><span class="token light-brown">"Hello World"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> 
                </code>
            </pre>    
        </div> 

        <p>
            Lets navigate our web.php inside routes folder and add another route for our index public function.
        </p>
        <p>
            myLaraVue/routes/web.php
        </p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-blue">&lt;?php  </span>
        <span class="token light-blue">use</span><span class="token punctuation"> Illuminate\Support\Facades\</span><span class="token light-green">Route</span> <span class="token punctuation">;</span>
        <span class="token light-green">Route</span><span class="token punctuation">::</span><span class="token light-yellow">get</span><span class="token punctuation">(</span><span class="token light-brown">'/'</span><span class="token punctuation">,</span><span class="token light-blue">function</span><span class="token punctuation">() {</span>
            <span class="token light-pink">return </span><span class="token light-yellow">view</span><span class="token punctuation">(</span><span class="token light-brown">'welcome'</span><span class="token punctuation">);</span>
        <span class="token punctuation">}</span>
        <span class="token light-green">//Add this piece of code</span> 
        <span class="token light-green">Route</span><span class="token punctuation">::</span><span class="token light-yellow">get</span><span class="token punctuation">(</span><span class="token light-brown">'/myBlog'</span><span class="token punctuation">,</span><span class="token light-brown">'TestController@myBlog'</span><span class="token punctuation">);</span>
                </code>
            </pre>    
        </div>
        <p>
            When you enter this to your browser.
        </p>
        <div class="browser"> 
            <p>127.0.0.1:8000/myBlog</p>
        </div>
        <p>
            The result would be.
        </p>
        <div class="browser-body">
            <p>
                Hello World
            </p>
        </div> 
        <p>
            And now lets create blade php file for our route inside resources/views and lets call it myblog.blade.php
        </p> 
        <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx"> 
    <span class="token variable">myLaraVue/resources/views/myblog.blade.php</span>
                </code>
            </pre>    
        </div> 
        <p>
            Open your myblog.blade.php and add html:5 code into it and lets call this file to our controller
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
            <span class="token dark-grey">&lt;</span><span class="token light-blue">h1</span><span class="token dark-grey">></span>
                <span class="token punctuation">Welcome to my blog!!!</span> 
            <span class="token dark-grey">&lt;/</span><span class="token light-blue">h1</span><span class="token dark-grey">></span>
        <span class="token dark-grey">&lt;/</span><span class="token light-blue">body</span><span class="token dark-grey">></span>
    <span class="token dark-grey">&lt;/</span><span class="token light-blue">html</span><span class="token dark-grey">></span>
                </code>
            </pre>    
        </div>
        <p>
            TestController.php
        </p> 
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-blue">&lt;?php  </span>
        <span class="token light-blue">namespace</span><span class="token light-green"> App\Http\Controllers</span> <span class="token punctuation">;</span>
        <span class="token light-blue">use</span><span class="token punctuation"> Illuminate\Http\</span><span class="token light-green">Request</span> <span class="token punctuation">;</span>
        <span class="token light-blue">class</span> <span class="token light-green">TestController</span> <span class="token light-blue">extends</span> <span class="token light-green">Controller</span><span class="token punctuation">{</span>
        <span class="token light-green">//</span> 
        <span class="token light-blue">public function </span><span class="token light-yellow">myBlog</span><span class="token punctuation">(){</span>
            <span class="token light-pink">return </span><span class="token light-yellow">view</span><span class="token punctuation">(</span><span class="token light-brown">"myblog"</span><span class="token punctuation">);</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> 
                </code>
            </pre>    
        </div>

        <p>
            Refresh your browser.
        </p>
        <div class="browser"> 
            <p>127.0.0.1:8000/myBlog</p>
        </div>
        <p>
            Result:
        </p>
        <div class="browser-body">
            <h1>
                Welcome to my blog!!! 
            </h1>
        </div> 
        <p>
            We notice that the word are too large it's because we are using heading 1 which has a default font size. 
        </p>
        <h2>Conclusion</h2>
        <p>
            We made custom laravel routes, basically to create the routes we need the three files and that is TestController, web.php and myBlog.blade.php.
            We have lot of function and methods to create laravel route but in this tutorial we only focus on basic laravel routes. 
        </p>
        <p>
            Yeah, it's amazing we have basic custom laravel routes. 
        </p>
    </div>
</template>
 

 <style  scoped>
     
 </style>