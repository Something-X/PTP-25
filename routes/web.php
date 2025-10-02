<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\BookingController;
use App\Http\Controllers\Admin\AirlineController;
use App\Http\Controllers\Admin\FlightRouteController;
use App\Http\Controllers\Admin\FlightController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// --- SATU BLOK UNTUK SEMUA ROUTE ADMIN ---
Route::prefix('admin')->name('admin.')->group(function () {
    // Rute untuk login admin (di luar middleware 'admin')
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store'])->name('login.store');

    // Grup untuk rute yang hanya bisa diakses oleh admin
    Route::middleware('admin')->group(function () {
        // Dashboard
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Bookings
        Route::patch('bookings/{booking}', [BookingController::class, 'update'])->name('bookings.update');

        // Airlines (CRUD)
        Route::resource('airlines', AirlineController::class);

        // Routes (CRUD)
        Route::resource('routes', FlightRouteController::class)->parameters(['routes' => 'flightRoute']);
    });
});

Route::prefix('admin')->name('admin.')->group(function () {
    // ... (route login)
    Route::middleware('admin')->group(function () {
        // ... (dashboard, airlines, routes)

        // --- TAMBAHKAN ROUTE INI ---
        Route::resource('flights', FlightController::class);
    });
});

// File route bawaan
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';