'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Latest iPhone 15 Pro Max",
      subtitle: "Experience the future of smartphones",
      description: "Revolutionary camera system, powerful A17 Pro chip, and stunning titanium design.",
      price: "$1,199",
      originalPrice: "$1,299",
      cta: "Shop Now",
      image: "https://readdy.ai/api/search-image?query=modern%20iPhone%2015%20Pro%20Max%20smartphone%20floating%20in%20minimalist%20studio%20environment%20with%20soft%20gradient%20blue%20purple%20background%2C%20clean%20product%20photography%2C%20premium%20tech%20aesthetic%2C%20subtle%20lighting%20effects%2C%20ultra-modern%20design%20showcase&width=800&height=600&seq=hero1&orientation=landscape"
    },
    {
      id: 2,
      title: "AirPods Pro 3rd Gen",
      subtitle: "Immersive audio experience",
      description: "Advanced noise cancellation, spatial audio, and all-day battery life.",
      price: "$249",
      originalPrice: "$299",
      cta: "Discover More",
      image: "https://readdy.ai/api/search-image?query=premium%20AirPods%20Pro%20wireless%20earbuds%20floating%20in%20elegant%20studio%20setup%20with%20soft%20gradient%20pink%20orange%20background%2C%20luxury%20tech%20product%20photography%2C%20clean%20minimalist%20aesthetic%2C%20professional%20lighting%2C%20modern%20audio%20device%20showcase&width=800&height=600&seq=hero2&orientation=landscape"
    },
    {
      id: 3,
      title: "MacBook Pro M3",
      subtitle: "Unleash your creativity",
      description: "Supercharged performance with M3 chip, stunning Liquid Retina display.",
      price: "$1,999",
      originalPrice: "$2,199",
      cta: "Learn More",
      image: "https://readdy.ai/api/search-image?query=sleek%20MacBook%20Pro%20laptop%20open%20displaying%20colorful%20screen%20in%20modern%20workspace%20with%20soft%20gradient%20green%20blue%20background%2C%20premium%20tech%20lifestyle%20photography%2C%20clean%20professional%20aesthetic%2C%20contemporary%20design%20showcase&width=800&height=600&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex items-center px-4">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-2xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <p className="text-blue-600 font-medium text-lg mb-2">{slide.subtitle}</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-8">
                    <span className="text-3xl font-bold text-green-600">{slide.price}</span>
                    <span className="text-xl text-gray-500 line-through">{slide.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Save ${parseInt(slide.originalPrice.replace('$', '')) - parseInt(slide.price.replace('$', ''))}
                    </span>
                  </div>
                  <Link
                    href="/products"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg whitespace-nowrap cursor-pointer"
                  >
                    <span>{slide.cta}</span>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-arrow-left-line text-gray-800"></i>
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-arrow-right-line text-gray-800"></i>
        </div>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}