<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;


class PostController extends Controller
{
    public function index()
    {
      $posts = Post::all();

      return response()->json($posts);
    }

    public function store(Request $request)
    {
        $post = new Post();
        $post->name = $request->name;
        $post->save();

        return response()->json($post);
    }
}
