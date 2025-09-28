<?php

namespace Database\Seeders;

use App\Models\FlightRoute;
use Illuminate\Database\Seeder;

class FlightRouteSeeder extends Seeder
{
    public function run(): void
    {
        FlightRoute::create(['origin' => 'Jakarta (CGK)', 'destination' => 'Bali (DPS)', 'base_price' => 1200000]);
        FlightRoute::create(['origin' => 'Surabaya (SUB)', 'destination' => 'Jakarta (CGK)', 'base_price' => 850000]);
        FlightRoute::create(['origin' => 'Bali (DPS)', 'destination' => 'Yogyakarta (YIA)', 'base_price' => 750000]);
    }
}