'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';

export default function GamingPage() {
  const gamingProducts = products.filter(product => product.category === 'Gaming');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Category Hero */}
      <div 
        className="h-80 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=gaming%20console%20controllers%20and%20accessories%20arranged%20in%20dynamic%20layout%20on%20gradient%20indigo%20purple%20background%2C%20vibrant%20gaming%20equipment%20photography%2C%20professional%20tech%20showcase&width=1200&height=400&seq=gamehero&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gaming</h1>
          <p className="text-xl md:text-2xl opacity-90">Level up your gaming experience</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Gaming Products</h2>
            <p className="text-gray-600">{gamingProducts.length} products available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gamingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}