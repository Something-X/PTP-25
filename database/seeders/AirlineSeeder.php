<?php

namespace Database\Seeders;

use App\Models\Airline;
use Illuminate\Database\Seeder;

class AirlineSeeder extends Seeder
{
    public function run(): void
    {
        Airline::create(['name' => 'Garuda Indonesia']);
        Airline::create(['name' => 'Lion Air']);
        Airline::create(['name' => 'AirAsia']);
    }
}