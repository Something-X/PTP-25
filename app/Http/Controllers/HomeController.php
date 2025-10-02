<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        // Mulai query untuk mengambil data penerbangan
        $flights = Flight::with(['airline', 'flightRoute'])
                    ->when($request->input('search'), function ($query, $search) {
                        $query->whereHas('flightRoute', function ($q) use ($search) {
                            $q->where('origin', 'like', "%{$search}%")
                              ->orWhere('destination', 'like', "%{$search}%");
                        });
                    })
                    ->latest('departure_time')
                    ->paginate(10);

        return Inertia::render('Welcome', [
            'flights' => $flights,
            'filters' => $request->only(['search']), // Kirim filter pencarian kembali ke view
        ]);
    }
}