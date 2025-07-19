
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import CartNotification from '@/components/ui/CartNotification';
import WishlistNotification from '@/components/ui/WishlistNotification';
import { products } from '@/lib/data/products';
import { useCart } from '@/lib/context/CartContext';
import { useWishlist } from '@/lib/context/WishlistContext';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);
  const [wishlistAction, setWishlistAction] = useState<{ added: boolean; name: string }>({ added: false, name: '' });
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const product = products.find(p => p.id === parseInt(productId));
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
  const isWishlisted = product ? isInWishlist(product.id) : false;
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gray-100 rounded-full">
            <i className="ri-error-warning-line text-4xl text-gray-400"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Browse Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowCartNotification(true);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setWishlistAction({ added: false, name: product.name });
    } else {
      addToWishlist(product);
      setWishlistAction({ added: true, name: product.name });
    }
    setShowWishlistNotification(true);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
          <div className="w-3 h-3 flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <Link href="/products" className="hover:text-blue-600 cursor-pointer">Products</Link>
          <div className="w-3 h-3 flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-blue-600 cursor-pointer">
            {product.category}
          </Link>
          <div className="w-3 h-3 flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -{discount}% OFF
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-blue-600 font-medium">{product.brand}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">SKU: {product.id.toString().padStart(6, '0')}</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 flex items-center justify-center">
                        <i className={i < Math.floor(product.rating) ? "ri-star-fill" : "ri-star-line"}></i>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Write a review
                </button>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-green-600">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        Save ${product.originalPrice - product.price}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-600">Free shipping on orders over $100</p>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock !== false ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <span className="text-green-600 font-medium">In Stock</span>
                    <span className="text-sm text-gray-600">- Ready to ship</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-close-line text-red-600"></i>
                    </div>
                    <span className="text-red-600 font-medium">Out of Stock</span>
                    <span className="text-sm text-gray-600">- Notify when available</span>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-subtract-line"></i>
                    </div>
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  Total: <span className="font-semibold">${(product.price * quantity).toFixed(2)}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={product.inStock === false}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <button 
                  onClick={handleWishlist}
                  className={`px-6 py-3 border rounded-full transition-colors whitespace-nowrap ${
                    isWishlisted 
                      ? 'border-pink-300 bg-pink-50 text-pink-600 hover:bg-pink-100' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={isWishlisted ? "ri-heart-fill" : "ri-heart-line"}></i>
                  </div>
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-share-line"></i>
                  </div>
                </button>
              </div>

              {/* Key Features */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold mb-3 text-blue-900">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-blue-800">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-check-line text-blue-600"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'reviews', label: `Reviews (${product.reviews})` },
                { id: 'specifications', label: 'Specifications' },
                { id: 'shipping', label: 'Shipping & Returns' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-checkbox-circle-line text-green-600"></i>
                        </div>
                        {product.name}
                      </li>
                      <li className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-checkbox-circle-line text-green-600"></i>
                        </div>
                        User Manual
                      </li>
                      <li className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-checkbox-circle-line text-green-600"></i>
                        </div>
                        Warranty Card
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Compatibility:</h4>
                    <p className="text-gray-600">
                      Compatible with most modern devices and operating systems. Check specifications for detailed compatibility information.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="text-center py-8">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                    <i className="ri-star-line text-2xl text-gray-400"></i>
                  </div>
                  <p className="text-gray-600">Reviews are coming soon. Be the first to review this product!</p>
                </div>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Brand:</span>
                      <span className="text-gray-600">{product.brand}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Category:</span>
                      <span className="text-gray-600">{product.category}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Model:</span>
                      <span className="text-gray-600">{product.name}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Rating:</span>
                      <span className="text-gray-600">{product.rating}/5 stars</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Warranty:</span>
                      <span className="text-gray-600">1 Year Manufacturer</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">SKU:</span>
                      <span className="text-gray-600">{product.id.toString().padStart(6, '0')}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Shipping & Returns</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Shipping Information:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Free standard shipping on orders over $100</li>
                      <li>• Express shipping available for $9.99</li>
                      <li>• Standard delivery: 3-5 business days</li>
                      <li>• Express delivery: 1-2 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Return Policy:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 30-day return window</li>
                      <li>• Items must be in original condition</li>
                      <li>• Free return shipping</li>
                      <li>• Full refund or exchange available</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
              <Link
                href={`/category/${product.category.toLowerCase()}`}
                className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
              >
                View All {product.category}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </main>

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

      <Footer />
    </div>
  );
}
