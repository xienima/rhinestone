<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
    protected $fillable = [
        'title', 'body', 'user_id', 'published'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
