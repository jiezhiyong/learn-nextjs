import { fetchFilteredCustomers } from '@services/data';
import CustomersTable from '../components/customers-table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
