<?php

namespace App;

use AlgoliaSearch\Laravel\AlgoliaEloquentTrait;
use Illuminate\Database\Eloquent\Model;

class Mobile extends Model
{
    use AlgoliaEloquentTrait;

    protected $fillable = [
        'name', 'brand', 'os', 'price', 'features', 'specs',
        'publish'
    ];
}
