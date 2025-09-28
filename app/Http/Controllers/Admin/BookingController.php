<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function update(Request $request, Booking $booking)
    {
        $request->validate([
            'status' => 'required|in:pending,confirmed,canceled',
        ]);

        $booking->update(['status' => $request->status]);

        return back()->with('success', 'Booking status updated successfully.');
    }
}