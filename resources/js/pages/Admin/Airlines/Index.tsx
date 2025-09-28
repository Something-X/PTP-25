import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { create as createAirline, edit as editAirline, destroy as destroyAirline } from '@/routes/admin/airlines';

type Airline = {
    id: number;
    name: string;
};

export default function Index({ airlines }: PageProps<{ airlines: { data: Airline[] } }>) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure?')) {
            router.delete(destroyAirline({ airline: id }));
        }
    };

    return (
        <AppLayout>
            <Head title="Airlines" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <Heading title="Airlines Management" description="Manage your airline data." />
                    <Button asChild>
                        <Link href={createAirline()}>Add New Airline</Link>
                    </Button>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Airline List</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {airlines.data.map((airline) => (
                                    <TableRow key={airline.id}>
                                        <TableCell>{airline.id}</TableCell>
                                        <TableCell>{airline.name}</TableCell>
                                        <TableCell className="space-x-2 text-right">
                                            <Button variant="outline" asChild>
                                                <Link href={editAirline({ airline: airline.id })}>Edit</Link>
                                            </Button>
                                            <Button variant="destructive" onClick={() => handleDelete(airline.id)}>Delete</Button>
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