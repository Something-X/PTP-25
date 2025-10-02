import { Head, Link, router } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
// --- 1. Impor fungsi 'home' dari Wayfinder ---
import { home } from '@/routes';

// Definisikan tipe data
type Flight = {
    id: number;
    flight_code: string;
    departure_time: string;
    arrival_time: string;
    airline: { name: string };
    flight_route: { origin: string; destination: string; base_price: number };
};

const formatDate = (dateString: string) => new Date(dateString).toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' });
const formatCurrency = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

export default function Welcome({ flights, filters }: PageProps<{ flights: { data: Flight[] }, filters: { search: string } }>) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // --- 2. Gunakan fungsi 'home()' yang sudah diimpor ---
        router.get(home(), { search }, { preserveState: true, preserveScroll: true });
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Head title="Welcome" />
            <div className="container mx-auto py-12 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Find Your Next Flight</h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">Book your ticket with the best price and service.</p>
                </div>

                {/* Search Form */}
                <Card className="max-w-2xl mx-auto mb-12">
                    <CardContent className="pt-6">
                        <form onSubmit={handleSearch} className="flex gap-4">
                            <Input
                                type="text"
                                placeholder="Search by origin or destination..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="flex-grow"
                            />
                            <Button type="submit">Search</Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Flight List */}
                <div className="space-y-6">
                    {flights.data.map(flight => (
                        <Card key={flight.id} className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-4">
                                <div className="p-6 md:col-span-3">
                                    <div className="flex items-center justify-between">
                                        <Badge>{flight.airline.name}</Badge>
                                        <p className="font-mono text-sm text-gray-500">{flight.flight_code}</p>
                                    </div>
                                    <div className="flex items-center gap-4 my-4">
                                        <div>
                                            <p className="font-bold text-xl">{new Date(flight.departure_time).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
                                            <p className="text-sm text-gray-500">{flight.flight_route.origin}</p>
                                        </div>
                                        <div className="flex-grow text-center text-sm text-gray-400">→</div>
                                        <div>
                                            <p className="font-bold text-xl text-right">{new Date(flight.arrival_time).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
                                            <p className="text-sm text-gray-500 text-right">{flight.flight_route.destination}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Departure: {formatDate(flight.departure_time)}
                                    </p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-6 flex flex-col justify-center items-center text-center">
                                    <p className="text-2xl font-bold text-primary">{formatCurrency(flight.flight_route.base_price)}</p>
                                    <Button className="mt-4 w-full" asChild>
                                        <Link href="#">Book Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}