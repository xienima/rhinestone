<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getDashboardData()
    {
        $data = [];

        $query = DB::table('product_views as pv')
            ->select(DB::raw('count(pv.views) as productViews, m.*'))
            ->join('mobiles as m', 'm.id', '=', 'pv.product_id')
            ->groupBy('pv.product_id')
            ->orderBy('productViews', 'desc')
            ->limit(1)
            ->first();

        $data['productInfo'] = $query;

        $query = DB::table('users')->count();
        $data['userInfo'] = $query;

        $query = DB::table('mobiles')->count();
        $data['productCount'] = $query;

        return $data;
    }
}
