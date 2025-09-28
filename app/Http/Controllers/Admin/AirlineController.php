<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Airline;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AirlineController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Airlines/Index', [
            'airlines' => Airline::latest()->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Airlines/Create');
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);
        Airline::create($request->all());
        return redirect()->route('admin.airlines.index')->with('success', 'Airline created.');
    }

    public function edit(Airline $airline)
    {
        return Inertia::render('Admin/Airlines/Edit', [
            'airline' => $airline,
        ]);
    }

    public function update(Request $request, Airline $airline)
    {
        $request->validate(['name' => 'required|string|max:255']);
        $airline->update($request->all());
        return redirect()->route('admin.airlines.index')->with('success', 'Airline updated.');
    }

    public function destroy(Airline $airline)
    {
        $airline->delete();
        return redirect()->route('admin.airlines.index')->with('success', 'Airline deleted.');
    }
}