import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';

export default function Edit({ route: flightRoute }: PageProps<{ route: any }>) {
    const { data, setData, patch, processing, errors } = useForm({
        origin: flightRoute.origin,
        destination: flightRoute.destination,
        base_price: flightRoute.base_price,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('admin.routes.update', { flightRoute: flightRoute.id }));
    };

    return (
        <AppLayout>
            <Head title="Edit Route" />
            <div className="p-4">
                <Heading title="Edit Route" description="Update the flight route details." />
                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={submit} className="space-y-6 max-w-xl">
                            <div>
                                <Label htmlFor="origin">Origin</Label>
                                <Input id="origin" value={data.origin} onChange={e => setData('origin', e.target.value)} />
                                <InputError message={errors.origin} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="destination">Destination</Label>
                                <Input id="destination" value={data.destination} onChange={e => setData('destination', e.target.value)} />
                                <InputError message={errors.destination} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="base_price">Base Price</Label>
                                <Input id="base_price" type="number" value={data.base_price} onChange={e => setData('base_price', e.target.value)} />
                                <InputError message={errors.base_price} className="mt-2" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Update Route</Button>
                                <Button variant="outline" asChild>
                                    <Link href={route('admin.routes.index')}>Cancel</Link>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}