<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Airline;
use App\Models\Flight;
use App\Models\FlightRoute;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FlightController extends Controller
{
    public function index()
    {
        // Ambil data penerbangan beserta relasi airline dan flightRoute
        $flights = Flight::with(['airline', 'flightRoute'])->latest()->paginate(10);

        return Inertia::render('Admin/Flights/Index', [
            'flights' => $flights,
        ]);
    }

    public function create()
    {
        // Kirim daftar maskapai dan rute ke halaman formulir
        return Inertia::render('Admin/Flights/Create', [
            'airlines' => Airline::all(),
            'routes' => FlightRoute::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'flight_code' => 'required|string|max:255',
            'airline_id' => 'required|exists:airlines,id',
            'flight_route_id' => 'required|exists:flight_routes,id',
            'departure_time' => 'required|date',
            'arrival_time' => 'required|date|after:departure_time',
        ]);

        Flight::create($request->all());

        return redirect()->route('admin.flights.index')->with('success', 'Flight created successfully.');
    }

    public function edit(Flight $flight)
    {
        // Kirim data penerbangan yang akan diedit, beserta daftar maskapai dan rute
        return Inertia::render('Admin/Flights/Edit', [
            'flight' => $flight,
            'airlines' => Airline::all(),
            'routes' => FlightRoute::all(),
        ]);
    }

    public function update(Request $request, Flight $flight)
    {
        $request->validate([
            'flight_code' => 'required|string|max:255',
            'airline_id' => 'required|exists:airlines,id',
            'flight_route_id' => 'required|exists:flight_routes,id',
            'departure_time' => 'required|date',
            'arrival_time' => 'required|date|after:departure_time',
        ]);

        $flight->update($request->all());

        return redirect()->route('admin.flights.index')->with('success', 'Flight updated successfully.');
    }

    public function destroy(Flight $flight)
    {
        $flight->delete();
        return redirect()->route('admin.flights.index')->with('success', 'Flight deleted successfully.');
    }
}