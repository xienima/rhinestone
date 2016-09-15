<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function () {
    /* Forum API urls */
	Route::group(['prefix' => 'forum'], function () {
        Route::get('/', 'ForumController@get');
        Route::post('/', 'ForumController@create');
        Route::get('/view/{id}', 'ForumController@getForumById');
        Route::post('/save/post', 'ForumController@saveForumPost');
        Route::get('/post/{id}', 'ForumController@getPostById');
	});
});
