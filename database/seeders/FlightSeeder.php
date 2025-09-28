<?php

namespace Database\Seeders;

use App\Models\Flight;
use Illuminate\Database\Seeder;

class FlightSeeder extends Seeder
{
    public function run(): void
    {
        // Penerbangan 1
        Flight::create([
            'flight_code' => 'GA-213',
            'airline_id' => 1, // Merujuk ke Garuda Indonesia
            'flight_route_id' => 1, // Merujuk ke rute Jakarta -> Bali
            'departure_time' => now()->addDays(1)->setTime(10, 0),
            'arrival_time' => now()->addDays(1)->setTime(12, 0),
        ]);

        // Penerbangan 2
        Flight::create([
            'flight_code' => 'QZ-7510',
            'airline_id' => 3, // Merujuk ke AirAsia
            'flight_route_id' => 2, // Merujuk ke rute Surabaya -> Jakarta
            'departure_time' => now()->addDays(2)->setTime(15, 30),
            'arrival_time' => now()->addDays(2)->setTime(17, 0),
        ]);

        // Penerbangan 3
        Flight::create([
            'flight_code' => 'JT-567',
            'airline_id' => 2, // Merujuk ke Lion Air
            'flight_route_id' => 1, // Merujuk ke rute Jakarta -> Bali
            'departure_time' => now()->addDays(3)->setTime(8, 45),
            'arrival_time' => now()->addDays(3)->setTime(9, 15),
        ]);
    }
}