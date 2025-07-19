'use client';

import Link from 'next/link';

export default function CategoryCards() {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      description: "Latest mobiles & accessories",
      productCount: "2,500+ Products",
      image: "https://readdy.ai/api/search-image?query=modern%20smartphone%20collection%20display%20with%20various%20premium%20mobile%20phones%20arranged%20elegantly%20on%20clean%20white%20background%2C%20minimalist%20tech%20product%20photography%2C%20professional%20lighting%2C%20contemporary%20mobile%20device%20showcase&width=400&height=300&seq=cat1&orientation=landscape",
      link: "/category/smartphones"
    },
    {
      id: 2,
      name: "Audio & Headphones",
      description: "Premium sound experience",
      productCount: "1,200+ Products",
      image: "https://readdy.ai/api/search-image?query=premium%20headphones%20and%20wireless%20earbuds%20collection%20arranged%20on%20modern%20minimalist%20background%2C%20high-end%20audio%20equipment%20photography%2C%20clean%20studio%20lighting%2C%20professional%20tech%20product%20display&width=400&height=300&seq=cat2&orientation=landscape",
      link: "/category/audio"
    },
    {
      id: 3,
      name: "Laptops & Computers",
      description: "Power your productivity",
      productCount: "800+ Products",
      image: "https://readdy.ai/api/search-image?query=sleek%20laptop%20computers%20and%20desktop%20setups%20in%20modern%20office%20environment%2C%20premium%20computing%20devices%20photography%2C%20clean%20professional%20workspace%2C%20contemporary%20tech%20lifestyle%20showcase&width=400&height=300&seq=cat3&orientation=landscape",
      link: "/category/computers"
    },
    {
      id: 4,
      name: "Smart Watches",
      description: "Fitness & lifestyle wearables",
      productCount: "600+ Products",
      image: "https://readdy.ai/api/search-image?query=collection%20of%20premium%20smartwatches%20and%20fitness%20trackers%20displayed%20on%20elegant%20surface%2C%20modern%20wearable%20technology%20photography%2C%20clean%20minimalist%20aesthetic%2C%20professional%20product%20showcase&width=400&height=300&seq=cat4&orientation=landscape",
      link: "/category/wearables"
    },
    {
      id: 5,
      name: "Gaming",
      description: "Consoles, controllers & games",
      productCount: "1,500+ Products",
      image: "https://readdy.ai/api/search-image?query=gaming%20console%20controllers%20and%20accessories%20arranged%20in%20dynamic%20layout%20on%20modern%20gaming%20setup%20background%2C%20vibrant%20gaming%20equipment%20photography%2C%20professional%20tech%20product%20display&width=400&height=300&seq=cat5&orientation=landscape",
      link: "/category/gaming"
    },
    {
      id: 6,
      name: "Accessories",
      description: "Chargers, cases & more",
      productCount: "3,000+ Products",
      image: "https://readdy.ai/api/search-image?query=variety%20of%20tech%20accessories%20including%20cables%20chargers%20cases%20and%20gadgets%20arranged%20neatly%20on%20clean%20white%20background%2C%20organized%20tech%20accessories%20photography%2C%20minimalist%20product%20display&width=400&height=300&seq=cat6&orientation=landscape",
      link: "/category/accessories"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest tech gadgets across all categories. From smartphones to smart home devices, we have everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-800">{category.productCount}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Explore Now</span>
                  <div className="w-4 h-4 flex items-center justify-center ml-2">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Brands */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-3xl font-bold text-gray-800">Apple</div>
            <div className="text-3xl font-bold text-gray-800">Samsung</div>
            <div className="text-3xl font-bold text-gray-800">Google</div>
            <div className="text-3xl font-bold text-gray-800">Sony</div>
            <div className="text-3xl font-bold text-gray-800">Microsoft</div>
            <div className="text-3xl font-bold text-gray-800">Nintendo</div>
          </div>
        </div>
      </div>
    </div>
  );
}