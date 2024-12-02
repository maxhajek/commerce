'use server';

import { loginCustomer } from 'lib/shopify';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function handleLogin(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (typeof email !== 'string' || typeof password !== 'string') {
    return;
  }

  const accessTokenData = await loginCustomer({ email, password });

  if (!accessTokenData) {
    console.error('Invalid credentials');
    return;
  }

  const { accessToken, expiresAt } = accessTokenData;

  const cookieStore = await cookies();

  cookieStore.set('shopify_customer_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(expiresAt),
    sameSite: 'lax'
  });

  redirect('/account');
}
