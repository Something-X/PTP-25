<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('flights', function (Blueprint $table) {
            // Tambahkan foreign key baru
            $table->foreignId('airline_id')->after('id')->constrained()->cascadeOnDelete();
            $table->foreignId('flight_route_id')->after('airline_id')->constrained()->cascadeOnDelete();

            // Hapus kolom lama yang sudah tidak relevan
            $table->dropColumn(['origin', 'destination']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('flights', function (Blueprint $table) {
            //
        });
    }
};
