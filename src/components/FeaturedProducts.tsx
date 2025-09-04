"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Deofume",
    brand: "DeOFume Collection",
    rating: 4.8,
    reviews: 234,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
    badge: "Bestseller",
    category: "Room Freshener",
    description: "Premium room freshener that eliminates odors and creates a fresh, pleasant atmosphere in any space."
  },
  {
    id: "2",
    name: "Deofresh Floor Cleaner",
    brand: "DeOFresh Collection",
    rating: 4.7,
    reviews: 189,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
    badge: "Top Rated",
    category: "Floor Cleaner",
    description: "Advanced floor cleaning formula that removes stubborn stains while leaving floors sparkling clean and fresh."
  },
  {
    id: "3",
    name: "Deofresh Soft Liquid Soap",
    brand: "DeOFresh Collection",
    rating: 4.6,
    reviews: 156,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
    category: "Liquid Soap",
    description: "Gentle yet effective liquid soap that cleanses thoroughly while keeping hands soft and moisturized."
  },
  {
    id: "4",
    name: "Deoclean Glass Cleaner",
    brand: "DeoClean Collection",
    rating: 4.9,
    reviews: 298,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png",
    badge: "Crystal Clear",
    category: "Glass Cleaner",
    description: "Professional-grade glass cleaner that delivers streak-free shine on windows, mirrors, and glass surfaces."
  },
  {
    id: "5",
    name: "Deoclean Multipurpose Liquid",
    brand: "DeoClean Collection",
    rating: 4.5,
    reviews: 167,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
    category: "Multipurpose Cleaner",
    description: "Versatile cleaning solution perfect for multiple surfaces, providing deep cleaning with a fresh scent."
  },
  {
    id: "6",
    name: "Deopic Toilet Cleaner",
    brand: "DeoPic Collection",
    rating: 4.4,
    reviews: 142,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png",
    category: "Toilet Cleaner",
    description: "Powerful toilet cleaner that eliminates germs, removes stains, and leaves toilets hygienically clean."
  },
  {
    id: "7",
    name: "Deodishwash",
    brand: "DeoDish Collection",
    rating: 4.8,
    reviews: 203,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
    badge: "Grease Fighter",
    category: "Dishwashing Liquid",
    description: "Concentrated dishwashing liquid that cuts through grease and grime, leaving dishes spotlessly clean."
  },
  {
    id: "8",
    name: "Deoshine",
    brand: "DeoShine Collection",
    rating: 4.6,
    reviews: 178,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png",
    category: "Surface Polish",
    description: "Premium surface polish that brings out natural shine while protecting surfaces from dust and fingerprints."
  },
  {
    id: "9",
    name: "Deoherb",
    brand: "DeoHerb Collection",
    rating: 4.9,
    reviews: 215,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
    badge: "Premium Quality",
    category: "Premium Floor Cleaner",
    description: "Premium quality floor cleaner with natural herbal extracts for superior cleaning and long-lasting freshness."
  }
];

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;
      const targetScrollLeft = direction === 'left' 
        ? currentScrollLeft - scrollAmount 
        : currentScrollLeft + scrollAmount;

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        scrollContainerRef.current?.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white expensive-gradient scroll-container">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium fragrances, each crafted with 
            the finest ingredients to create unforgettable scent experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative pb-8">
          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 touch-manipulation gpu-accelerated"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 touch-manipulation gpu-accelerated"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Products Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-visible scrollbar-hide px-4 sm:px-12 py-4 gpu-accelerated scroll-container"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72 sm:w-80 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="sm:hidden text-center mt-4">
            <p className="text-sm text-gray-500">Swipe to see more products →</p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-primary/90 transition-colors touch-manipulation"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
