<template>
    <div>
        <h2>
            Make Controller
        </h2>
        <p>First we need to make controller for our route reference</p>

        
            <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx"> 
    <span class="token variable">php artisan make:controller TestController</span>
                    </code>
                </pre>    
            </div>
        <p>
            The php artisan make controller command will create a controller called TestController.php for you. 
            You can navigate the path inside to your project folder.
        </p>

        <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx"> 
    <span class="token variable">app/Http/Controllers/TestController.php</span>
                </code>
            </pre>    
        </div> 
        <p>
            Open TestController and it look like this.
        </p>

        <div class="board-bg-dark" data-language="jsx">
            <pre class="language-jsx">
                <code class="language-jsx"> 
    <span class="token light-blue">&lt;?php  </span>
        <span class="token light-blue">namespace</span><span class="token light-green"> App\Http\Controllers</span> <span class="token punctuation">;</span>
        <span class="token light-blue">use</span><span class="token punctuation"> Illuminate\Http\</span><span class="token light-green">Request</span> <span class="token punctuation">;</span>
        <span class="token light-blue">class</span> <span class="token light-green">TestController</span> <span class="token light-blue">extends</span> <span class="token light-green">Controller</span><span class="token punctuation">{</span>
        <span class="token light-green">//</span> 
        <span class="token punctuation">}</span>
                </code>
            </pre>    
        </div>

        <p>
            We can now create our own custom route
        </p>
        <h2>
            Conclusion
        </h2>

        <p>
            We thankful to the laravel organization because they built this kind of powerful application for us. So now we have already reference for routing and it's time for us to create our own.
        </p>

    </div>

</template>
<script>
export default {
    
}
</script>