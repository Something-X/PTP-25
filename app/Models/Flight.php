<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Flight extends Model
{
    use HasFactory;
    // Hapus 'origin' dan 'destination' dari $fillable
    protected $fillable = ['flight_code', 'airline_id', 'flight_route_id', 'departure_time', 'arrival_time'];

    public function airline(): BelongsTo
    {
        return $this->belongsTo(Airline::class);
    }

    public function flightRoute(): BelongsTo
    {
        return $this->belongsTo(FlightRoute::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}