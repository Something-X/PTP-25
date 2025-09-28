<?php

namespace Database\Seeders;

use App\Models\Flight;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FlightSeeder extends Seeder
{
    public function run(): void
    {
        Flight::create([
            'flight_code' => 'GA-213',
            'origin' => 'Jakarta (CGK)',
            'destination' => 'Bali (DPS)',
            'departure_time' => now()->addDays(1)->setTime(10, 0),
            'arrival_time' => now()->addDays(1)->setTime(12, 0),
        ]);

        Flight::create([
            'flight_code' => 'QZ-7510',
            'origin' => 'Surabaya (SUB)',
            'destination' => 'Jakarta (CGK)',
            'departure_time' => now()->addDays(2)->setTime(15, 30),
            'arrival_time' => now()->addDays(2)->setTime(17, 0),
        ]);

        Flight::create([
            'flight_code' => 'JT-567',
            'origin' => 'Bali (DPS)',
            'destination' => 'Yogyakarta (YIA)',
            'departure_time' => now()->addDays(3)->setTime(8, 45),
            'arrival_time' => now()->addDays(3)->setTime(9, 15),
        ]);
    }
}