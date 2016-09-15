<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * Define mass assignable fields.
     */
    protected $fillable = [
        'body', 'user_id', 'published'
    ];

    /**
     * Define relation between Post and Comment.
     *
     * @return Eloquent model
     */
    public function posts()
    {
        return $this->belongsToMany('App\Post');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
