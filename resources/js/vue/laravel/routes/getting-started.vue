<template>
    <div> 
            <h2>Getting Started</h2> 
            <p>
                To install laravel application we need to install   
                <a :href="'//' + 'laragon.org'" class="text-danger" target="_blank">
                PHP
                </a>
                and 
                <a :href="'//' + 'getcomposer.org'" class="text-danger" target="_blank"> 
                Composer 
                 </a>.   
                Just click the link to install the requirements and in my case I am just using laragon for PHP and local server.
            </p>
            <p>
                We will install the PHP first then follow the composer and After installing the requirements to our computer, we can now create our first laravel project.
            </p>
            <p>Go to your laragon dir and navigate the www directory and it look like this.</p> 
            <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx">
<span class="token variable">C:\laragon\www</span> 
                    </code>
                </pre>    
            </div> 
            <p>
                You should navigate this folder in your CLI, using your CLI enter this command.
            </p>  
            <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx">
<span class="token variable">composer create-project --prefer-dist laravel/laravel myLaraVue</span>
                    </code>
                </pre>    
            </div>
            <p>
                In my case I'm using myLaraVue as project name and you can name your project whatever you like. 
                After creating and installing the necessary things to our project, we need to go to that project directory to execute some command.
            </p>
            <p>
                We can also install laravel apps using laragon icon > Quick app > laravel in Toolbars Icon to make it more easier for you.
            </p>
            <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx">
<span class="token variable">cd myLaraVue</span>
<span class="token variable">php artisan serve</span>
                    </code>
                </pre>    
            </div>
            <p>
                cd myLaravue will bring you to your project folder and we can now use the php artisan for the laravel command and also make it sure that your composer is installed correctly.
            </p>
            <p>
                php artisan serve will execute and allow you to run your application as website and give you the result with http://127.0.0.1:8000. 
                http://127.0.0.1 is equivalent to localhost since we are only developing in local environment and 8000 is your web port.
            </p> 

            <h2>
                Conclusion 
            </h2>
            <p>
                We got the basic installation for laravel. It's not perfect, though, as it has a short instruction but it's 
                worth it and it is much easier to setup.
            </p>
<!-- 
            <div class="board-bg-dark" data-language="jsx">
                <pre class="language-jsx">
                    <code class="language-jsx">
    <span class="token function">require</span><span class="token variable">(</span><span class="token require">'./bootstrap'</span><span class="token variable">);</span>

    <span class="token keyword">import</span> <span class="token variable">Vue</span> <span class="token keyword">from</span><span class="token string">'vue'</span> 
                    
                    </code>
                </pre> 
            </div> -->
    </div>
</template>

<script>
export default {
    
}
</script>