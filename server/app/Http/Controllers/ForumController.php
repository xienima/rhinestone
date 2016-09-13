<?php

namespace App\Http\Controllers;

use App\Forum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForumController extends Controller
{
    private $forum;

    public function __construct(Forum $forum)
    {
        $this->forum = $forum;
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
        $forum = $this->forum->where('id', $id)->with('user')->first();

        return response(['data' => $forum], 200);
    }
}
