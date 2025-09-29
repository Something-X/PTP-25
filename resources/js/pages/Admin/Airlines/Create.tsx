import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { route } from 'ziggy-js';

type AirlineForm = {
  name: string;
  code: string;
};

export default function Create() {
  const { data, setData, post, processing, errors } = useForm<AirlineForm>({
    name: '',
    code: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.airlines.store').toString());
  };

  return (
    <AppLayout>
      <Head title="Create Airline" />
      <div className="p-4">
        <Heading title="Create Airline" description="Add a new airline." />
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={submit} className="space-y-6 max-w-xl">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={data.name}
                  onChange={e => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="code">Code</Label>
                <Input
                  id="code"
                  value={data.code}
                  onChange={e => setData('code', e.target.value)}
                />
                <InputError message={errors.code} className="mt-2" />
              </div>
              <div className="flex items-center gap-4">
                <Button disabled={processing}>Create Airline</Button>
                <Button variant="outline" asChild>
                  <Link href={route('admin.airlines.index')}>Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
