
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';
import { useWishlist } from '@/lib/context/WishlistContext';
import CartNotification from './CartNotification';
import WishlistNotification from './WishlistNotification';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);
  const [wishlistAction, setWishlistAction] = useState<{ added: boolean; name: string }>({ added: false, name: '' });
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(product.id);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock !== false) {
      addToCart(product);
      setShowCartNotification(true);
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setWishlistAction({ added: false, name: product.name });
    } else {
      addToWishlist(product);
      setWishlistAction({ added: true, name: product.name });
    }
    setShowWishlistNotification(true);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    // Quick view functionality can be added here
  };

  return (
    <>
      <div className="group relative">
        <Link href={`/products/${product.id}`} className="block">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-gray-100">
                {!imageError ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <i className="ri-image-line text-4xl text-gray-400"></i>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Badges */}
              <div className="absolute top-3 left-3 space-y-2">
                {discount > 0 && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    -{discount}%
                  </div>
                )}
                {product.inStock === false && (
                  <div className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Out of Stock
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleWishlist}
                  className={`w-10 h-10 ${isWishlisted ? 'bg-pink-100 hover:bg-pink-200' : 'bg-white/90 hover:bg-white'} rounded-full flex items-center justify-center transition-colors shadow-lg`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={isWishlisted ? "ri-heart-fill text-pink-500" : "ri-heart-line text-gray-600"}></i>
                  </div>
                </button>
                <button
                  onClick={handleQuickView}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-eye-line text-gray-600"></i>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-blue-600 font-medium">{product.category}</div>
                <div className="text-xs text-gray-500 font-medium">{product.brand}</div>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-5">
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 flex items-center justify-center">
                      <i className={i < Math.floor(product.rating) ? "ri-star-fill" : "ri-star-line"}></i>
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-bold text-green-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        </Link>
        
        {/* Add to Cart Button - Outside Link */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleAddToCart}
            disabled={product.inStock === false}
            className={`w-full py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${
              product.inStock === false
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <CartNotification
        show={showCartNotification}
        productName={product.name}
        onClose={() => setShowCartNotification(false)}
      />

      <WishlistNotification
        show={showWishlistNotification}
        productName={wishlistAction.name}
        isAdded={wishlistAction.added}
        onClose={() => setShowWishlistNotification(false)}
      />
    </>
  );
}
