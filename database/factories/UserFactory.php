<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Category::class, function (Faker $faker) {
    $randomNumber = rand(1,15);
    $title = $faker->sentence(5);
    $slug = $slug = Str::slug($title, '-');

    return [
        'name' => $title,
        'slug' => $slug, 
    ];
});
$factory->define(App\Post::class, function (Faker $faker) {
    $randomNumber = rand(1,15);
    $title = $faker->sentence(10);
    $slug = $slug = Str::slug($title, '-');

    return [
        // 'name' => $faker->name,
        'cat_id' => $randomNumber,
        // 'title' => $faker->unique()->safeEmail,
        'title' => $title,
        'slug' => $slug, 
        'body' => $faker->sentence(50), 
        // 'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm',
        // 'remember_token' => str_random(10),
    ];
});
