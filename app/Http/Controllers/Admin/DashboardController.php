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
        // --- Statistik untuk kartu ringkasan (sudah benar) ---
        $totalPassengers = User::where('is_admin', false)->count();
        $totalBookings = Booking::count();
        $topRoute = FlightRoute::withCount('bookings')
                                ->orderByDesc('bookings_count')
                                ->first();

        // --- LOGIKA BARU UNTUK GRAFIK (DIPERBAIKI) ---
        // 1. Ambil data penjualan yang ada dari database
        $salesByDate = Booking::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('count(*) as sales')
        )
        ->where('created_at', '>=', now()->subDays(6)) // 7 hari termasuk hari ini
        ->groupBy('date')
        ->get()
        ->keyBy('date'); // Jadikan tanggal sebagai key untuk pencarian mudah

        // 2. Buat rentang tanggal 7 hari yang lengkap
        $salesData = collect();
        foreach (range(0, 6) as $i) {
            // Mulai dari 6 hari yang lalu hingga hari ini
            $date = now()->subDays(6 - $i)->format('Y-m-d');

            // Cek apakah ada penjualan di tanggal ini, jika tidak, nilainya 0
            $sales = $salesByDate->get($date)->sales ?? 0;

            // Tambahkan ke koleksi data
            $salesData->push([
                'date' => $date,
                'sales' => $sales,
            ]);
        }
        // --- AKHIR DARI LOGIKA BARU ---

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalPassengers' => $totalPassengers,
                'totalBookings' => $totalBookings,
                'topRoute' => $topRoute ? $topRoute->origin . ' → ' . $topRoute->destination : 'N/A',
            ],
            'salesData' => $salesData, // Kirim data yang sudah lengkap
        ]);
    }
}