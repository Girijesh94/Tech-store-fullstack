import { fetchProductById } from '@/lib/api';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function ProductPage({ params }: PageProps) {
  const product = await fetchProductById(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">Price: ₹{product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}
