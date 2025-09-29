import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { index as routesIndex } from '@/routes/admin/routes';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';



export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        origin: '',
        destination: '',
        base_price: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <AppLayout>
            <Head title="Add Route" />
            <div className="p-4">
                <Heading
                    title="Add New Route"
                    description="Fill in the details for the new flight route."
                />
                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={submit} className="max-w-xl space-y-6">
                            <div>
                                <Label htmlFor="origin">Origin</Label>
                                <Input
                                    id="origin"
                                    value={data.origin}
                                    onChange={(e) =>
                                        setData('origin', e.target.value)
                                    }
                                    autoFocus
                                />
                                <InputError
                                    message={errors.origin}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label htmlFor="destination">Destination</Label>
                                <Input
                                    id="destination"
                                    value={data.destination}
                                    onChange={(e) =>
                                        setData('destination', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.destination}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label htmlFor="base_price">Base Price</Label>
                                <Input
                                    id="base_price"
                                    type="number"
                                    value={data.base_price}
                                    onChange={(e) =>
                                        setData('base_price', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.base_price}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>
                                    Save Route
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href={routesIndex()}>Cancel</Link>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
