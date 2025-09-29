import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Heading from '@/components/heading';
import { Ticket, Users, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Definisikan tipe data untuk props
type Stats = {
    totalPassengers: number;
    totalBookings: number;
    topRoute: string;
};

type SalesData = {
    date: string;
    sales: number;
};

export default function Dashboard({ stats, salesData }: PageProps<{ stats: Stats, salesData: SalesData[] }>) {
    return (
        <AppLayout>
            <Head title="Admin Dashboard" />
            <div className='p-4 space-y-8'>
                <Heading
                    title="Dashboard"
                    description="Overview of your flight booking system."
                />

                {/* Kartu Statistik */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                            <Ticket className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalBookings}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Passengers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalPassengers}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Top Route</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.topRoute}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Grafik Penjualan */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sales in the Last 7 Days</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sales" fill="#8884d8" name="Ticket Sales" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

            </div>
        </AppLayout>
    );
}