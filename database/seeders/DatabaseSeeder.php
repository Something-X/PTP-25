<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Membuat user admin
        User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'is_admin' => true,
            ]
        );

        // Panggil seeder lain dengan urutan yang benar
        $this->call([
            AirlineSeeder::class,
            FlightRouteSeeder::class,
            FlightSeeder::class,
            BookingSeeder::class, // BookingSeeder harus setelah FlightSeeder
        ]);
    }
}