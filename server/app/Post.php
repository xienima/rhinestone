<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Define the fields which are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body', 'forum_id', 'user_id',
        'published', 'category_id'
    ];

    /**
     * Define which modesl to be touched.
     *
     * @var array
     */
    protected $touches = ['forum'];

    /**
     * Define relation between Post and Forum.
     *
     * @return Eloquent model
     */
    public function forum()
    {
        return $this->belongsTo('App\Forum');
    }

    /**
     * Define relation between Post and Comments.
     *
     * @return Eloquent model
     */
    public function comments()
    {
        return $this->belongsToMany('App\Comment');
    }
}
