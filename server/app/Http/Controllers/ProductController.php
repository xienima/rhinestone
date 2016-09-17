<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Mobile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    private $mobile;

    public function __construct(Mobile $mobile)
    {
        $this->mobile = $mobile;
    }

    public function getProducts()
    {
        $products = $this->mobile->orderBy('name')->get();
        return response(['data' => $products], 200);
    }

    public function saveNewMobile(Request $request)
    {
        $postData = $request->all();

        $mobile = $this->mobile->create([
            'name' => $postData['name'],
            'os' => $postData['os'],
            'price' => $postData['price'],
            'brand' => $postData['brand'],
            'specs' => '',
            'features' => ''
        ]);

        return response(['data' => $mobile], 201);
    }

    public function viewProductDetails ($id)
    {
        $product = $this->mobile->where('id', $id)->first();

        DB::table('product_views')->insert(['product_id' => $product->id, 'views' => 1]);

        return response(['data' => $product], 200);
    }
}
