<?php

use Inertia\Inertia;

Route::view('/', 'welcome');

Route::get('/charts', function () {
    return Inertia::render('charts');
});