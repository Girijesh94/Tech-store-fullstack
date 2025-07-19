
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface WishlistNotificationProps {
  show: boolean;
  productName: string;
  isAdded: boolean;
  onClose: () => void;
}

export default function WishlistNotification({ show, productName, isAdded, onClose }: WishlistNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-pink-200 shadow-2xl rounded-xl p-4 max-w-sm animate-in slide-in-from-right duration-300">
      <div className="flex items-start space-x-3">
        <div className={`w-8 h-8 ${isAdded ? 'bg-pink-100' : 'bg-gray-100'} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
          <i className={`${isAdded ? 'ri-heart-fill text-pink-600' : 'ri-heart-line text-gray-600'}`}></i>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <p className="font-semibold text-gray-900">
              {isAdded ? 'Added to wishlist!' : 'Removed from wishlist'}
            </p>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <i className="ri-close-line text-sm text-gray-500"></i>
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{productName}</p>
          {isAdded && (
            <Link
              href="/wishlist"
              onClick={onClose}
              className="inline-block bg-pink-600 text-white text-xs py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              View Wishlist
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
