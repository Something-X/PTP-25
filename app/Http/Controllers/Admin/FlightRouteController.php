<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FlightRoute;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FlightRouteController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Routes/Index', [
            'routes' => FlightRoute::latest()->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Routes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'origin' => 'required|string|max:255',
            'destination' => 'required|string|max:255',
            'base_price' => 'required|numeric|min:0',
        ]);

        FlightRoute::create($request->all());

        return redirect()->route('admin.routes.index')->with('success', 'Route created.');
    }

    public function edit(FlightRoute $flightRoute)
    {
        return Inertia::render('Admin/Routes/Edit', [
            'route' => $flightRoute,
        ]);
    }

    public function update(Request $request, FlightRoute $flightRoute)
    {
        $request->validate([
            'origin' => 'required|string|max:255',
            'destination' => 'required|string|max:255',
            'base_price' => 'required|numeric|min:0',
        ]);

        $flightRoute->update($request->all());

        return redirect()->route('admin.routes.index')->with('success', 'Route updated.');
    }

    public function destroy(FlightRoute $flightRoute)
    {
        $flightRoute->delete();

        return redirect()->route('admin.routes.index')->with('success', 'Route deleted.');
    }
}