import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import Form from 'next/form';
import { handleLogin } from './actions';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Form action={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </Form>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
