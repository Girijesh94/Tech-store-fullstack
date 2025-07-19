'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';

export default function SmartphonesPage() {
  const smartphones = products.filter(product => product.category === 'Smartphones');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Category Hero */}
      <div 
        className="h-80 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20smartphone%20collection%20display%20with%20various%20premium%20mobile%20phones%20floating%20in%20dynamic%20arrangement%20on%20gradient%20blue%20purple%20background%2C%20tech%20lifestyle%20photography%2C%20clean%20minimalist%20aesthetic&width=1200&height=400&seq=smarthero&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smartphones</h1>
          <p className="text-xl md:text-2xl opacity-90">Discover the latest mobile technology</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Smartphones</h2>
            <p className="text-gray-600">{smartphones.length} products available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {smartphones.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}