<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocsController extends Controller
{
    // 
    public function controllerMethod(){
        return response()->json([
            'message'=> 'Return only Json data'
        ]);
    }
    public function myBlog(){
        return view('myblog');
    }

}
