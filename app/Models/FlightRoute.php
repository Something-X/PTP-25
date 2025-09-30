<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasMany;


class FlightRoute extends Model
{
    use HasFactory;
    protected $fillable = ['origin', 'destination', 'base_price'];

    public function flights(): HasMany
    {
        return $this->hasMany(Flight::class);
    }

    public function bookings(): HasManyThrough
    {
        return $this->hasManyThrough(Booking::class, Flight::class);
    }
}