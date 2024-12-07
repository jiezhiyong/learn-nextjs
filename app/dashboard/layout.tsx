export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="border border-blue-400 border-dashed p-4 m-4">
      <nav>Dashboard Nav</nav>
      {children}
    </section>
  );
}
