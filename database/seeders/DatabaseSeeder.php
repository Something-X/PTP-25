<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // --- USER ADMIN ---
        // Membuat user admin jika belum ada
        User::firstOrCreate(
            ['email' => 'admin@example.com'], // Kunci pencarian
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'is_admin' => true, // <-- Poin paling penting!
            ]
        );

        // Panggil seeder lain untuk data penerbangan & pemesanan
        $this->call([
            FlightSeeder::class,
            BookingSeeder::class,
        ]);
    }
}