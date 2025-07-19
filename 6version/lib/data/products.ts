export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  brand: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    image: "https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20smartphone%20in%20titanium%20finish%20on%20clean%20white%20background%2C%20premium%20product%20photography%2C%20professional%20lighting%2C%20modern%20tech%20device%20showcase&width=400&height=400&seq=prod1&orientation=squarish",
    rating: 4.8,
    reviews: 2547,
    category: "Smartphones",
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and revolutionary camera system.",
    features: ["A17 Pro Chip", "48MP Camera System", "Titanium Design", "Action Button", "USB-C"],
    inStock: true,
    brand: "Apple"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1099,
    originalPrice: 1199,
    image: "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20smartphone%20with%20S%20Pen%20stylus%20on%20minimalist%20background%2C%20premium%20mobile%20device%20photography%2C%20clean%20studio%20lighting%2C%20modern%20tech%20showcase&width=400&height=400&seq=prod2&orientation=squarish",
    rating: 4.7,
    reviews: 1832,
    category: "Smartphones",
    description: "Ultimate productivity powerhouse with built-in S Pen, advanced AI features, and stunning display.",
    features: ["S Pen Included", "200MP Camera", "AI Features", "5000mAh Battery", "120Hz Display"],
    inStock: true,
    brand: "Samsung"
  },
  {
    id: 3,
    name: "AirPods Pro 3rd Gen",
    price: 249,
    originalPrice: 299,
    image: "https://readdy.ai/api/search-image?query=Apple%20AirPods%20Pro%20wireless%20earbuds%20with%20charging%20case%20on%20elegant%20surface%2C%20premium%20audio%20product%20photography%2C%20clean%20minimalist%20aesthetic%2C%20professional%20lighting&width=400&height=400&seq=prod3&orientation=squarish",
    rating: 4.6,
    reviews: 3421,
    category: "Audio",
    description: "Immersive audio experience with advanced noise cancellation and spatial audio technology.",
    features: ["Active Noise Cancellation", "Spatial Audio", "6 Hours Battery", "MagSafe Charging", "Sweat Resistant"],
    inStock: true,
    brand: "Apple"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    image: "https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5%20premium%20noise%20canceling%20headphones%20in%20sleek%20design%20on%20modern%20background%2C%20high-end%20audio%20equipment%20photography%2C%20professional%20product%20showcase&width=400&height=400&seq=prod4&orientation=squarish",
    rating: 4.9,
    reviews: 1654,
    category: "Audio",
    description: "Industry-leading noise cancellation with exceptional sound quality and all-day comfort.",
    features: ["30 Hours Battery", "Noise Cancellation", "Quick Charge", "Touch Controls", "Premium Sound"],
    inStock: true,
    brand: "Sony"
  },
  {
    id: 5,
    name: "MacBook Air M3",
    price: 1299,
    originalPrice: 1399,
    image: "https://readdy.ai/api/search-image?query=MacBook%20Air%20M3%20laptop%20in%20space%20gray%20open%20displaying%20colorful%20screen%20on%20clean%20desk%20setup%2C%20premium%20laptop%20photography%2C%20professional%20workspace%20aesthetic&width=400&height=400&seq=prod5&orientation=squarish",
    rating: 4.8,
    reviews: 987,
    category: "Computers",
    description: "Supercharged by M3 chip with incredible performance, stunning Liquid Retina display, and all-day battery.",
    features: ["M3 Chip", "18 Hours Battery", "Liquid Retina Display", "1080p Camera", "MagSafe Charging"],
    inStock: true,
    brand: "Apple"
  },
  {
    id: 6,
    name: "Dell XPS 13 Plus",
    price: 1199,
    originalPrice: 1299,
    image: "https://readdy.ai/api/search-image?query=Dell%20XPS%2013%20Plus%20ultrabook%20laptop%20with%20edge-to-edge%20keyboard%20and%20OLED%20display%20in%20modern%20office%20setting%2C%20premium%20computing%20device%20photography&width=400&height=400&seq=prod6&orientation=squarish",
    rating: 4.5,
    reviews: 743,
    category: "Computers",
    description: "Ultra-premium ultrabook with stunning OLED display, innovative design, and powerful performance.",
    features: ["OLED Display", "12th Gen Intel", "Edge-to-edge Keyboard", "Premium Build", "Thunderbolt 4"],
    inStock: true,
    brand: "Dell"
  },
  {
    id: 7,
    name: "Apple Watch Series 9",
    price: 399,
    originalPrice: 449,
    image: "https://readdy.ai/api/search-image?query=Apple%20Watch%20Series%209%20smartwatch%20with%20sport%20band%20displaying%20colorful%20watch%20face%20on%20elegant%20surface%2C%20premium%20wearable%20technology%20photography&width=400&height=400&seq=prod7&orientation=squarish",
    rating: 4.7,
    reviews: 2156,
    category: "Wearables",
    description: "Most advanced Apple Watch with Double Tap gesture, brighter display, and enhanced health features.",
    features: ["Double Tap Gesture", "S9 Chip", "Brighter Display", "Health Monitoring", "18 Hours Battery"],
    inStock: true,
    brand: "Apple"
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch 6",
    price: 329,
    originalPrice: 379,
    image: "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Watch%206%20smartwatch%20with%20circular%20display%20and%20premium%20metal%20band%20on%20modern%20surface%2C%20sleek%20wearable%20device%20photography&width=400&height=400&seq=prod8&orientation=squarish",
    rating: 4.4,
    reviews: 1324,
    category: "Wearables",
    description: "Advanced health monitoring with comprehensive fitness tracking and premium design.",
    features: ["Advanced Health Sensors", "Fitness Tracking", "Sleep Monitoring", "Water Resistant", "Long Battery"],
    inStock: true,
    brand: "Samsung"
  },
  {
    id: 9,
    name: "PlayStation 5",
    price: 499,
    originalPrice: 549,
    image: "https://readdy.ai/api/search-image?query=PlayStation%205%20gaming%20console%20with%20DualSense%20controller%20in%20modern%20gaming%20setup%2C%20premium%20gaming%20hardware%20photography%2C%20clean%20product%20showcase&width=400&height=400&seq=prod9&orientation=squarish",
    rating: 4.9,
    reviews: 4521,
    category: "Gaming",
    description: "Next-generation gaming console with ultra-fast SSD, ray tracing, and immersive 3D audio.",
    features: ["Ultra-fast SSD", "Ray Tracing", "3D Audio", "DualSense Controller", "4K Gaming"],
    inStock: false,
    brand: "Sony"
  },
  {
    id: 10,
    name: "Xbox Series X",
    price: 499,
    originalPrice: 549,
    image: "https://readdy.ai/api/search-image?query=Xbox%20Series%20X%20gaming%20console%20with%20wireless%20controller%20in%20sleek%20black%20design%20on%20modern%20entertainment%20setup%2C%20premium%20gaming%20photography&width=400&height=400&seq=prod10&orientation=squarish",
    rating: 4.8,
    reviews: 3764,
    category: "Gaming",
    description: "Most powerful Xbox ever with 4K gaming, quick resume, and backward compatibility.",
    features: ["4K Gaming", "Quick Resume", "Smart Delivery", "Backward Compatible", "Game Pass Ready"],
    inStock: true,
    brand: "Microsoft"
  },
  {
    id: 11,
    name: "Anker PowerBank 20000mAh",
    price: 59,
    originalPrice: 79,
    image: "https://readdy.ai/api/search-image?query=Anker%20portable%20power%20bank%20charger%20with%20multiple%20ports%20and%20LED%20indicators%20on%20clean%20white%20background%2C%20premium%20tech%20accessory%20photography&width=400&height=400&seq=prod11&orientation=squarish",
    rating: 4.6,
    reviews: 8542,
    category: "Accessories",
    description: "High-capacity portable charger with fast charging technology and multiple device support.",
    features: ["20000mAh Capacity", "Fast Charging", "Multiple Ports", "LED Display", "Safe Charging"],
    inStock: true,
    brand: "Anker"
  },
  {
    id: 12,
    name: "Logitech MX Master 3S",
    price: 99,
    originalPrice: 119,
    image: "https://readdy.ai/api/search-image?query=Logitech%20MX%20Master%203S%20wireless%20mouse%20with%20ergonomic%20design%20and%20precision%20scroll%20wheel%20on%20modern%20desk%20setup%2C%20premium%20computer%20accessory%20photography&width=400&height=400&seq=prod12&orientation=squarish",
    rating: 4.8,
    reviews: 2847,
    category: "Accessories",
    description: "Advanced wireless mouse with precision tracking, customizable buttons, and ergonomic design.",
    features: ["Precision Tracking", "Customizable Buttons", "70-Day Battery", "Multi-Device", "Ergonomic Design"],
    inStock: true,
    brand: "Logitech"
  }
];

export const categories = [
  { id: 1, name: "Smartphones", slug: "smartphones" },
  { id: 2, name: "Audio", slug: "audio" },
  { id: 3, name: "Computers", slug: "computers" },
  { id: 4, name: "Wearables", slug: "wearables" },
  { id: 5, name: "Gaming", slug: "gaming" },
  { id: 6, name: "Accessories", slug: "accessories" }
];

export const brands = [
  "Apple", "Samsung", "Sony", "Dell", "Microsoft", "Anker", "Logitech", "Google", "Nintendo", "HP"
];