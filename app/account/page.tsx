import { getCustomer } from 'lib/shopify';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AccountPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('shopify_customer_token')?.value;

  if (!accessToken) {
    redirect('/');
  }

  const customer = await getCustomer(accessToken);

  if (!customer) {
    return (
      <div>
        <h1>Error</h1>
        <p>Unable to retrieve your account information. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Account</h1>
      <p>Welcome back, {customer.firstName}!</p>
    </div>
  );
}
