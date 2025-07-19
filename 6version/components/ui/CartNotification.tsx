
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface CartNotificationProps {
  show: boolean;
  productName: string;
  onClose: () => void;
}

export default function CartNotification({ show, productName, onClose }: CartNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-green-200 shadow-2xl rounded-xl p-4 max-w-sm animate-in slide-in-from-right duration-300">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-check-line text-green-600"></i>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <p className="font-semibold text-gray-900">Added to cart!</p>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <i className="ri-close-line text-sm text-gray-500"></i>
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{productName}</p>
          <div className="flex space-x-2">
            <Link
              href="/cart"
              onClick={onClose}
              className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer"
            >
              View Cart
            </Link>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
