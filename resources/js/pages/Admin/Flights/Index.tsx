import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { create as createFlight, edit as editFlight, destroy as destroyFlight } from '@/routes/admin/flights';

// Definisikan tipe data
type Flight = {
    id: number;
    flight_code: string;
    departure_time: string;
    arrival_time: string;
    airline: { name: string };
    flight_route: { origin: string; destination: string };
};

export default function Index({ flights }: PageProps<{ flights: { data: Flight[] } }>) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this flight schedule?')) {
            router.delete(destroyFlight({ flight: id }));
        }
    };

    const formatDate = (dateString: string) => new Date(dateString).toLocaleString('id-ID');

    return (
        <AppLayout>
            <Head title="Flights" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <Heading title="Flights Management" description="Manage your flight schedules." />
                    <Button asChild>
                        <Link href={createFlight()}>Add New Flight</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Code</TableHead>
                                    <TableHead>Airline</TableHead>
                                    <TableHead>Route</TableHead>
                                    <TableHead>Departure</TableHead>
                                    <TableHead>Arrival</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {flights.data.map((flight) => (
                                    <TableRow key={flight.id}>
                                        <TableCell>{flight.flight_code}</TableCell>
                                        <TableCell>{flight.airline.name}</TableCell>
                                        <TableCell>{flight.flight_route.origin} → {flight.flight_route.destination}</TableCell>
                                        <TableCell>{formatDate(flight.departure_time)}</TableCell>
                                        <TableCell>{formatDate(flight.arrival_time)}</TableCell>
                                        <TableCell className="space-x-2 text-right">
                                            <Button variant="outline" asChild>
                                                <Link href={editFlight({ flight: flight.id })}>Edit</Link>
                                            </Button>
                                            <Button variant="destructive" onClick={() => handleDelete(flight.id)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}