<?php

namespace App\Http\Controllers;

use App\Forum;
use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class ForumController extends Controller
{
    private $forum;
    private $post;
    private $comment;

    public function __construct(Forum $forum, Post $post)
    {
        $this->forum = $forum;
        $this->post = $post;
    }

    public function get()
    {
        $forums = $this->forum->with('user')->with('posts')->get();

        return response(['data' => $forums], 200);
    }

    public function create(Request $request)
    {
        $postData = $request->all();

        $forum = $this->forum->create([
            'title' => $postData['title'],
            'body' => $postData['body'],
            'user_id' => $request->user()->id,
            'published' => 1
        ]);

        $result = $this->forum->find($forum->id)->with('user')->first();

        return response(['data' => $result], 201);
    }

    public function getForumById($id)
    {
        $forum = $this->forum->where('id', $id)
            ->with('user')
            ->with('posts')
            ->first();

        return response(['data' => $forum], 200);
    }

    public function saveForumPost(Request $request)
    {
        $postData = $request->all();

        $post = $this->post->create([
            'title' => $postData['title'],
            'body' => $postData['body'],
            'forum_id' => $postData['forumId'],
            'user_id' => $request->user()->id,
            'published' => 1,
            'category_id' => 1
        ]);

        return response(['data' => $post], 201);
    }

    public function getPostById ($id)
    {
        $post = $this->post->with('comments', 'comments.user')->where('id', 1)->first();

        return response(['data' => $post], 200);
    }
}
