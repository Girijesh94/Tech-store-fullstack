import { Suspense } from 'react';
import ProductDetail from './ProductDetail';
import { fetchProductById } from '@/lib/api';
import type { Metadata } from 'next';
import type { PageProps } from 'next'; // ✅ Important addition

// ✅ Correct type for `params` expected by Next.js App Router
type Props = PageProps<{
  id: string;
}>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProductById(params.id);
  return {
    title: product?.name || 'Product Detail',
    description: product?.description || 'Product info page',
  };
}

export async function generateStaticParams() {
  const ids = Array.from({ length: 12 }, (_, i) => ({ id: `${i + 1}` }));
  return ids;
}

export default function ProductPage({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail productId={params.id} />
    </Suspense>
  );
}
