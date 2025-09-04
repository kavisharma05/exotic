"use client";

import { Droplets, Home, Zap, Toilet, Gem, UtensilsCrossed, Sparkles, Soup, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Soft Liquid Soap",
    description: "Gentle and moisturizing liquid soaps for daily use",
    icon: Droplets,
    itemCount: "15+ Products"
  },
  {
    id: 2,
    name: "Room Freshener",
    description: "Long-lasting room sprays and diffusers for every space",
    icon: Home,
    itemCount: "20+ Products"
  },
  {
    id: 3,
    name: "Floor Cleaner",
    description: "Effective floor cleaning solutions for all surface types",
    icon: Zap,
    itemCount: "12+ Products"
  },
  {
    id: 4,
    name: "Toilet Cleaner",
    description: "Powerful toilet bowl cleaners and sanitizers",
    icon: Toilet,
    itemCount: "10+ Products"
  },
  {
    id: 5,
    name: "Glass Cleaner",
    description: "Streak-free glass and mirror cleaning solutions",
    icon: Sparkles,
    itemCount: "8+ Products"
  },
  {
    id: 6,
    name: "Dishwash",
    description: "Concentrated dishwashing liquids for effective cleaning",
    icon: UtensilsCrossed,
    itemCount: "14+ Products"
  },
  {
    id: 7,
    name: "Marble Cleaner",
    description: "Specialized cleaners for marble and stone surfaces",
    icon: Gem,
    itemCount: "6+ Products"
  },
  {
    id: 8,
    name: "Multipurpose Liquid Soap",
    description: "Versatile cleaning solutions for multiple applications",
    icon: Soup,
    itemCount: "18+ Products"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary scroll-container relative">
      {/* Floral Background */}
      <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Product Categories
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Explore our diverse range of fragrance categories, each carefully crafted 
            to meet your specific needs and preferences.
          </p>
        </div>

        {/* Categories Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.id}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white transition-all duration-300 expensive-shadow border border-white/20 optimize-animations"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {/* Item Count */}
                  <div className="text-xs text-gray-600 font-medium uppercase tracking-wider mb-6">
                    {category.itemCount}
                  </div>

                  {/* Explore Button */}
                  <button className="w-full bg-primary hover:bg-primary/90 text-white border border-primary hover:border-primary/90 py-3 rounded-full font-medium transition-colors duration-200 touch-manipulation gpu-accelerated">
                    Explore Category
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Products Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-colors duration-200 shadow-lg touch-manipulation gpu-accelerated"
          >
            Explore All Products
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
