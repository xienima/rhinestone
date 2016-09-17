<?php

namespace App;

use AlgoliaSearch\Laravel\AlgoliaEloquentTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Mobile extends Model
{
    use AlgoliaEloquentTrait;

    protected $fillable = [
        'name', 'brand', 'os', 'price', 'features', 'specs',
        'publish'
    ];

    protected $appends = ['views'];

    public function getViewsAttribute()
    {
        return DB::table('product_views')->where('product_id', $this->id)->sum('views');
    }
}
