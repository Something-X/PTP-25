<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\Payment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    public function run(): void
    {
        // Booking 1 - Confirmed & Paid
        $booking1 = Booking::create([
            'user_id' => 1, // Pastikan ada user dengan ID 1 (user admin)
            'flight_id' => 1, // Penerbangan ke Bali
            'passenger_name' => 'Budi Santoso',
            'status' => 'confirmed',
        ]);
        Payment::create([
            'booking_id' => $booking1->id,
            'amount' => 1200000,
            'status' => 'paid',
            'transaction_date' => now(),
        ]);

        // Booking 2 - Pending & Unpaid
        $booking2 = Booking::create([
            'user_id' => 1,
            'flight_id' => 2, // Penerbangan ke Jakarta
            'passenger_name' => 'Citra Lestari',
            'status' => 'pending',
        ]);
        Payment::create([
            'booking_id' => $booking2->id,
            'amount' => 850000,
            'status' => 'unpaid',
        ]);

         // Booking 3 - Menambah data untuk penerbangan ke Bali
         $booking3 = Booking::create([
            'user_id' => 1,
            'flight_id' => 1, // Penerbangan ke Bali lagi
            'passenger_name' => 'Dewi Anggraini',
            'status' => 'confirmed',
        ]);
        Payment::create([
            'booking_id' => $booking3->id,
            'amount' => 1250000,
            'status' => 'paid',
            'transaction_date' => now(),
        ]);
    }
}