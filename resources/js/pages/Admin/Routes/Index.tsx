import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { create as createRoute, edit as editRoute, destroy as destroyRoute } from '@/routes/admin/routes';

type FlightRoute = {
    id: number;
    origin: string;
    destination: string;
    base_price: number;
};

export default function Index({ routes }: PageProps<{ routes: { data: FlightRoute[] } }>) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this route?')) {
            router.delete(destroyRoute({ flightRoute: id }));
        }
    };

    return (
        <AppLayout>
            <Head title="Routes" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <Heading title="Routes Management" description="Manage your flight route data." />
                    <Button asChild>
                        <Link href={createRoute()}>Add New Route</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Origin</TableHead>
                                    <TableHead>Destination</TableHead>
                                    <TableHead>Base Price</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {routes.data.map((route) => (
                                    <TableRow key={route.id}>
                                        <TableCell>{route.origin}</TableCell>
                                        <TableCell>{route.destination}</TableCell>
                                        <TableCell>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(route.base_price)}</TableCell>
                                        <TableCell className="space-x-2 text-right">
                                            <Button variant="outline" asChild>
                                                <Link href={editRoute({ flightRoute: route.id })}>Edit</Link>
                                            </Button>
                                            <Button variant="destructive" onClick={() => handleDelete(route.id)}>Delete</Button>
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