<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Flight;
use App\Models\Payment; // <-- Tambahkan ini
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        // Ambil data untuk ditampilkan
        $bookings = Booking::with(['user', 'flight', 'payment'])->latest()->paginate(10);
        $flights = Flight::orderBy('departure_time')->get();

        // Data untuk laporan singkat
        $stats = [
            'tickets_today' => Booking::whereDate('created_at', today())->count(),
            'tickets_this_month' => Booking::whereMonth('created_at', now()->month)->count(),
            // Tambahkan query untuk total pendapatan
            'total_revenue' => Payment::where('status', 'paid')->sum('amount'),
            // Tambahkan query untuk penerbangan terpopuler
            'popular_flights' => Flight::withCount('bookings')->orderByDesc('bookings_count')->limit(5)->get(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'bookings' => $bookings,
            'flights' => $flights,
            'stats' => $stats,
        ]);
    }
}