
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { useWishlist } from '@/lib/context/WishlistContext';

export default function WishlistPage() {
  const { wishlistItems, clearWishlist, getWishlistCount } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-1">Save your favorite products for later</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{getWishlistCount()} items</span>
            {wishlistItems.length > 0 && (
              <button
                onClick={clearWishlist}
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-pink-100 rounded-full">
              <i className="ri-heart-line text-4xl text-pink-500"></i>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Discover amazing products and add your favorites to keep track of items you love
            </p>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line"></i>
              </div>
              <span>Explore Products</span>
            </Link>
          </div>
        ) : (
          <>
            {/* Wishlist Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <i className="ri-heart-fill text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{getWishlistCount()}</p>
                    <p className="text-gray-600 text-sm">Wishlist Items</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-price-tag-3-fill text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      ${wishlistItems.reduce((total, item) => total + (item.originalPrice ? item.originalPrice - item.price : 0), 0).toFixed(0)}
                    </p>
                    <p className="text-gray-600 text-sm">Total Savings</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-money-dollar-circle-fill text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      ${wishlistItems.reduce((total, item) => total + item.price, 0).toFixed(0)}
                    </p>
                    <p className="text-gray-600 text-sm">Total Value</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to shop?</h3>
              <p className="text-gray-600 mb-6">Browse more products and find great deals</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/cart"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
