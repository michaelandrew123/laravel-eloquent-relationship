<template>
    <div> 
        <h2>Laravel Route</h2> 
        <p>
            As we already done installing laravel in our computer lets discuss some basic of laravel route 
            so we can come up some idea in creating laravel vue routes in the future. It has a quite different but you can just follow along with me. 
        </p>
      
        <p>
            Now go to your routes folder inside your project folder and we will use web.php for laravel route.
        </p> 
        <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx"> 
    <span class="token variable">myLaraVue/routes/web.php</span>
                </code>
            </pre>    
        </div>
        <p>web.php</p>
        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-blue">&lt;?php  </span>
        <span class="token light-blue">use</span><span class="token punctuation"> Illuminate\Support\Facades\</span><span class="token light-green">Route</span> <span class="token punctuation">;</span>
        <span class="token light-green">Route</span><span class="token punctuation">::</span><span class="token light-yellow">get</span><span class="token punctuation">(</span><span class="token light-brown">'/'</span><span class="token punctuation">,</span><span class="token light-blue">function</span><span class="token punctuation">() {</span>
            <span class="token light-pink">return </span><span class="token light-yellow">view</span><span class="token punctuation">(</span><span class="token light-brown">'welcome'</span><span class="token punctuation">);</span>
        <span class="token punctuation">}</span>
                </code>
            </pre>    
        </div>
        <p>
            TestController.php and web.php was combining together and that what we see in our local site 127.0.0.1:8000. 
        </p>
        <p>
            Return statement with that view('welcome') telling the application to return a content in our web site.
        </p>
        <p>
            The view('welcome') is a build in code in laravel and we can navigate the welcome balde directory.
        </p>
        <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx"> 
    <span class="token variable">myLaraVue/resources/views/welcome.blade.php</span>
                </code>
            </pre>    
        </div> 


    </div>
</template>