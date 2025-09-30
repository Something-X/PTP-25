import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Heading from '@/components/heading';
import { Ticket, Users, TrendingUp } from 'lucide-react';
// --- 1. Impor komponen AreaChart dan Area ---
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

// Fungsi untuk format tanggal (tetap sama)
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
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

                {/* Kartu Statistik (tetap sama) */}
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

                {/* --- GRAFIK BARU: AREA CHART DENGAN GRADIEN --- */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sales in the Last 7 Days</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={350}>
                            <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                {/* 2. Definisikan gradien di sini */}
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    tickFormatter={formatDate}
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    allowDecimals={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        borderColor: 'hsl(var(--border))'
                                    }}
                                    labelFormatter={formatDate}
                                />
                                {/* 3. Gunakan Area, bukan Bar, dan panggil gradien */}
                                <Area
                                    type="monotone" // Membuat garis melengkung halus
                                    dataKey="sales"
                                    stroke="hsl(var(--primary))"
                                    fillOpacity={1}
                                    fill="url(#colorSales)" // Menggunakan gradien
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

            </div>
        </AppLayout>
    );
}