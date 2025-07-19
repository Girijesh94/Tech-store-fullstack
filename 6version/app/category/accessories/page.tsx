'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';

export default function AccessoriesPage() {
  const accessories = products.filter(product => product.category === 'Accessories');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Category Hero */}
      <div 
        className="h-80 bg-gradient-to-r from-gray-600 to-blue-600 flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=variety%20of%20tech%20accessories%20including%20cables%20chargers%20cases%20and%20gadgets%20arranged%20neatly%20on%20gradient%20gray%20blue%20background%2C%20organized%20tech%20accessories%20photography%2C%20professional%20showcase&width=1200&height=400&seq=acchero&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessories</h1>
          <p className="text-xl md:text-2xl opacity-90">Essential tech accessories for your devices</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Accessories</h2>
            <p className="text-gray-600">{accessories.length} products available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {accessories.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}