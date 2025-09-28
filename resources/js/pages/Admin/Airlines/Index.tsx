import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { create as createAirline, edit as editAirline, destroy as destroyAirline } from '@/routes/admin/airlines';

export default function Index({ airlines }: PageProps<{ airlines: { data: any[] } }>) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this airline?')) {
            router.delete(destroyAirline({ airline: id }));
        }
    };

    return (
        <AppLayout>
            <Head title="Airlines" />
            <div className="p-4">
                <Heading title="Airlines Management" description="Manage your airline data." />
                <div className="flex justify-end mb-4">
                    <Button asChild>
                        <Link href={createAirline()}>Add New Airline</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {airlines.data.map((airline) => (
                                    <TableRow key={airline.id}>
                                        <TableCell>{airline.name}</TableCell>
                                        <TableCell className="space-x-2">
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