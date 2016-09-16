<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Mobile;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $mobile;

    public function __construct(Mobile $mobile)
    {
        $this->mobile = $mobile;
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

        return response(['data' => $mobile], 200);
    }
}
