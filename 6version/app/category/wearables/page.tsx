'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';

export default function WearablesPage() {
  const wearables = products.filter(product => product.category === 'Wearables');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Category Hero */}
      <div 
        className="h-80 bg-gradient-to-r from-orange-600 to-red-600 flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=collection%20of%20premium%20smartwatches%20and%20fitness%20trackers%20displayed%20elegantly%20on%20gradient%20orange%20red%20background%2C%20modern%20wearable%20technology%20photography%2C%20professional%20product%20showcase&width=1200&height=400&seq=wearhero&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Watches</h1>
          <p className="text-xl md:text-2xl opacity-90">Track your fitness and stay connected</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Smart Watches</h2>
            <p className="text-gray-600">{wearables.length} products available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wearables.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}