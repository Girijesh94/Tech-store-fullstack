'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/context/CartContext';
import { useWishlist } from '@/lib/context/WishlistContext';
import { useAuth } from '@/lib/context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              TechStore
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-12 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-gray-500 text-sm"></i>
              </div>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Categories - Desktop */}
            <Link href="/products" className="hidden lg:flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-apps-line"></i>
              </div>
              <span className="text-sm font-medium">Categories</span>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-heart-line text-gray-700"></i>
              </div>
              {getWishlistCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getWishlistCount()}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-shopping-cart-line text-gray-700"></i>
              </div>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User Profile */}
            {isAuthenticated && user ? (
              <Link href="/account" className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-sm">{user.name.split(' ')[0]}</span>
              </Link>
            ) : (
              <Link href="/login" className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-user-line"></i>
                </div>
                <span className="text-sm">Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-16 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
              <i className="ri-search-line text-gray-500 text-sm"></i>
            </div>
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700 transition-colors text-xs whitespace-nowrap"
            >
              Go
            </button>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/products" className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-apps-line"></i>
                </div>
                <span>Categories</span>
              </Link>
              <Link href="/wishlist" className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-heart-line"></i>
                </div>
                <span>Wishlist ({getWishlistCount()})</span>
              </Link>
              <Link href="/cart" className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-shopping-cart-line"></i>
                </div>
                <span>Cart ({getCartCount()})</span>
              </Link>
              {isAuthenticated && user ? (
                <Link href="/account" className="flex items-center space-x-3 px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span>{user.name}</span>
                </Link>
              ) : (
                <Link href="/login" className="flex items-center space-x-3 px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}