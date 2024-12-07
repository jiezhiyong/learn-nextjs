import { Suspense } from 'react';

export default function Page() {
  return (
    <section className="border bg-slate-200 border-dashed p-4 m-4">
      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <h1>Dashboard</h1>
      </Suspense>
    </section>
  );
}
