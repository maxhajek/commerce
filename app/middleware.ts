import { getCustomer } from 'lib/shopify'; // Adjust the path based on your project structure
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('shopify_customer_token')?.value;

  if (!token) {
    // Redirect to homepage if no token is found
    return NextResponse.redirect(new URL('/', request.url));
  }

  const customer = await getCustomer(token);

  if (!customer) {
    // Redirect to error page or handle as needed
    return NextResponse.redirect(new URL('/error', request.url));
  }

  // Attach customer info to the request headers
  const response = NextResponse.next();
  response.headers.set('x-customer-firstname', customer.firstName);
  response.headers.set('x-customer-id', customer.id);

  return response;
}

// Apply middleware only to specific routes
export const config = {};
