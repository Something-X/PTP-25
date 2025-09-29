// resources/js/pages/Admin/Routes/Edit.tsx
import React from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

type FlightRoute = {
  id: number;
  name: string;
  code: string;
  // tambahin field lain sesuai kebutuhan tabel kamu
};

type Props = {
  flightRoute: FlightRoute;
};

export default function Edit({ flightRoute }: Props) {
  // Inertia useForm, isi default data dari props
  const form = useForm({
    name: flightRoute.name,
    code: flightRoute.code,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // Gunakan flightRoute.id, bukan id yang undefined
    form.put(route('posts.update', flightRoute.id));
  };

  return (
    <div className="container">
      <h1 className="mb-4">Edit Flight Route</h1>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={form.data.name}
            onChange={e => form.setData('name', e.target.value)}
          />
          {form.errors.name && (
            <div className="text-danger">{form.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            type="text"
            className="form-control"
            value={form.data.code}
            onChange={e => form.setData('code', e.target.value)}
          />
          {form.errors.code && (
            <div className="text-danger">{form.errors.code}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={form.processing}
        >
          Update
        </button>
      </form>
    </div>
  );
}
