<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\FlightRoute;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        // Statistik untuk kartu ringkasan
        $totalPassengers = User::where('is_admin', false)->count();
        $totalBookings = Booking::count();
        $topRoute = FlightRoute::withCount('bookings')
                                ->orderByDesc('bookings_count')
                                ->first();

        // Data untuk grafik penjualan 7 hari terakhir
        $salesData = Booking::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('count(*) as sales')
        )
        ->where('created_at', '>=', now()->subDays(7))
        ->groupBy('date')
        ->orderBy('date', 'asc')
        ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalPassengers' => $totalPassengers,
                'totalBookings' => $totalBookings,
                'topRoute' => $topRoute ? $topRoute->origin . ' → ' . $topRoute->destination : 'N/A',
            ],
            'salesData' => $salesData,
        ]);
    }
}