import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
// --- Impor fungsi route yang benar ---
import {
    index as flightsIndex,
    update as updateFlight,
} from '@/routes/admin/flights';

type Airline = { id: number; name: string };
type FlightRoute = { id: number; origin: string; destination: string };
type Flight = {
    id: number;
    flight_code: string;
    airline_id: number;
    flight_route_id: number;
    departure_time: string;
    arrival_time: string;
};

const formatDateTimeLocal = (dateString: string) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 16);
};

export default function Edit({
    flight,
    airlines,
    routes,
}: PageProps<{ flight: Flight; airlines: Airline[]; routes: FlightRoute[] }>) {
    const { data, setData, patch, processing, errors } = useForm({
        flight_code: flight.flight_code,
        airline_id: flight.airline_id.toString(),
        flight_route_id: flight.flight_route_id.toString(),
        departure_time: formatDateTimeLocal(flight.departure_time),
        arrival_time: formatDateTimeLocal(flight.arrival_time),
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // --- Gunakan fungsi yang sudah diimpor ---
        patch(updateFlight({ flight: flight.id }).toString());
    };

    return (
        <AppLayout>
            <Head title="Edit Flight" />
            <div className="p-4">
                <Heading
                    title="Edit Flight"
                    description="Update the flight schedule details."
                />
                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={submit} className="max-w-xl space-y-6">
                            <div>
                                <Label htmlFor="flight_code">Flight Code</Label>
                                <Input
                                    id="flight_code"
                                    value={data.flight_code}
                                    onChange={(e) =>
                                        setData('flight_code', e.target.value)
                                    }
                                />
                                <InputError message={errors.flight_code} />
                            </div>
                            <div>
                                <Label>Airline</Label>
                                <Select
                                    defaultValue={data.airline_id}
                                    onValueChange={(value) =>
                                        setData('airline_id', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an airline..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {airlines.map((airline) => (
                                            <SelectItem
                                                key={airline.id}
                                                value={airline.id.toString()}
                                            >
                                                {airline.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.airline_id} />
                            </div>
                            <div>
                                <Label>Route</Label>
                                <Select
                                    defaultValue={data.flight_route_id}
                                    onValueChange={(value) =>
                                        setData('flight_route_id', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a route..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {routes.map((route) => (
                                            <SelectItem
                                                key={route.id}
                                                value={route.id.toString()}
                                            >
                                                {route.origin} →{' '}
                                                {route.destination}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.flight_route_id} />
                            </div>
                            <div>
                                <Label htmlFor="departure_time">
                                    Departure Time
                                </Label>
                                <Input
                                    id="departure_time"
                                    type="datetime-local"
                                    value={data.departure_time}
                                    onChange={(e) =>
                                        setData(
                                            'departure_time',
                                            e.target.value,
                                        )
                                    }
                                />
                                <InputError message={errors.departure_time} />
                            </div>
                            <div>
                                <Label htmlFor="arrival_time">
                                    Arrival Time
                                </Label>
                                <Input
                                    id="arrival_time"
                                    type="datetime-local"
                                    value={data.arrival_time}
                                    onChange={(e) =>
                                        setData('arrival_time', e.target.value)
                                    }
                                />
                                <InputError message={errors.arrival_time} />
                            </div>
                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>
                                    Update Flight
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href={flightsIndex()}>Cancel</Link>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
