<?php

namespace App\Http\Controllers;

use App\Forum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForumController extends Controller
{
    private $forum;

    public function __construct (Forum $forum)
    {
        $this->forum = $forum;
    }

    public function create (Request $request)
    {
        return $request->all();
    }
}
