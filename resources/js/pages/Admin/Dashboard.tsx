import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge, badgeVariants } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { update as updateBooking } from '@/routes/admin/bookings';
import Heading from '@/components/heading';
import { VariantProps } from 'class-variance-authority';
import { Plane, Ticket, TrendingUp, Wallet } from 'lucide-react';

// Definisikan tipe data untuk TypeScript
type Booking = {
    id: number;
    passenger_name: string;
    status: 'pending' | 'confirmed' | 'canceled';
    user: { name: string };
    flight: { destination: string; departure_time: string };
    payment: { status: 'paid' | 'unpaid' } | null;
};

type Flight = {
    id: number;
    flight_code: string;
    origin: string;
    destination: string;
    departure_time: string;
    bookings_count?: number;
}

type DashboardPageProps = PageProps<{
    bookings: { data: Booking[] };
    flights: Flight[];
    stats: {
        tickets_today: number;
        tickets_this_month: number;
        total_revenue: number;
        popular_flights: Flight[];
    };
}>

// Fungsi helper untuk format Rupiah
const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

export default function Dashboard({ bookings, flights, stats }: DashboardPageProps) {

    const handleStatusChange = (bookingId: number, newStatus: string) => {
        router.patch(updateBooking({ booking: bookingId }), {
            status: newStatus,
        }, {
            preserveScroll: true,
        });
    };

    const getStatusVariant = (status: string): VariantProps<typeof badgeVariants>['variant'] => {
        switch (status) {
            case 'confirmed': return 'success';
            case 'canceled': return 'destructive';
            default: return 'outline';
        }
    };

    return (
        <AppLayout>
            <Head title="Admin Dashboard" />
            <div className='p-4'>
                <Heading
                    title="Admin Dashboard"
                    description="Welcome to the admin dashboard."
                />

                {/* Laporan Singkat (Diperbarui) */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tiket Terjual (Hari Ini)</CardTitle>
                            <Ticket className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.tickets_today}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tiket Terjual (Bulan Ini)</CardTitle>
                            <Ticket className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.tickets_this_month}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
                            <Wallet className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{formatRupiah(stats.total_revenue)}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Penerbangan Terfavorit</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats.popular_flights[0]?.destination || 'N/A'}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {stats.popular_flights[0]?.bookings_count || 0} pemesanan
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Data Pemesanan */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Data Pemesanan Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Penumpang</TableHead>
                                        <TableHead>Tujuan</TableHead>
                                        <TableHead>Status Bayar</TableHead>
                                        <TableHead>Status Booking</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {bookings.data.map((booking: Booking) => (
                                        <TableRow key={booking.id}>
                                            <TableCell>{booking.passenger_name}</TableCell>
                                            <TableCell>{booking.flight.destination}</TableCell>
                                            <TableCell>
                                                <Badge variant={booking.payment?.status === 'paid' ? 'success' : 'destructive'}>
                                                    {booking.payment?.status ?? 'unpaid'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                    defaultValue={booking.status}
                                                    onValueChange={(value) => handleStatusChange(booking.id, value)}
                                                >
                                                    <SelectTrigger className="w-[150px]">
                                                        <SelectValue placeholder="Update status..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="pending">Pending</SelectItem>
                                                        <SelectItem value="confirmed">Confirmed</SelectItem>
                                                        <SelectItem value="canceled">Canceled</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Jadwal Penerbangan (BARU) */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Jadwal Penerbangan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Kode</TableHead>
                                        <TableHead>Asal</TableHead>
                                        <TableHead>Tujuan</TableHead>
                                        <TableHead>Jadwal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {flights.map((flight: Flight) => (
                                        <TableRow key={flight.id}>
                                            <TableCell className="font-mono">{flight.flight_code}</TableCell>
                                            <TableCell>{flight.origin}</TableCell>
                                            <TableCell>{flight.destination}</TableCell>
                                            <TableCell>{new Date(flight.departure_time).toLocaleString('id-ID')}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </AppLayout>
    );
}