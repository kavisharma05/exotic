"use client";

import { Building2, Hotel, ShoppingBag, Car, Plane, Users, Briefcase, Hospital } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    id: 1,
    name: "Hotels & Hospitality",
    description: "Luxury fragrances for hotels, resorts, and hospitality spaces",
    icon: Hotel,
  },
  {
    id: 2,
    name: "Retail Stores",
    description: "Ambient scenting solutions for retail and shopping centers",
    icon: ShoppingBag,
  },
  {
    id: 3,
    name: "Corporate Offices",
    description: "Professional fragrance solutions for office environments",
    icon: Building2,
  },
  {
    id: 4,
    name: "Automotive",
    description: "Specialized fragrances for car dealerships and showrooms",
    icon: Car,
  },
  {
    id: 5,
    name: "Airlines & Travel",
    description: "Travel-friendly fragrances and aviation industry solutions",
    icon: Plane,
  },
  {
    id: 6,
    name: "Events & Venues",
    description: "Custom scenting for events, weddings, and special occasions",
    icon: Users,
  },
  {
    id: 7,
    name: "Healthcare",
    description: "Gentle, therapeutic fragrances for medical facilities",
    icon: Hospital,
  },
  {
    id: 8,
    name: "Professional Services",
    description: "Signature scents for salons, spas, and professional services",
    icon: Briefcase,
  },
];

export default function Industries() {
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white scroll-container">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From hospitality to healthcare, we provide tailored fragrance solutions 
            across diverse industries worldwide.
          </p>
        </div>

        {/* Industries Grid - Mobile: Modern 2x2 Grid, Tablet: 2 columns, Desktop: 4 columns */}
        
        {/* Mobile Modern Grid */}
        <div className="sm:hidden">
          <div className="grid grid-cols-2 gap-4">
            {industries.slice(0, showAllIndustries ? industries.length : 4).map((industry) => {
              const IconComponent = industry.icon;
              
              return (
                <div
                  key={industry.id}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                      <IconComponent className="w-6 h-6 text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {industry.name.split(' ')[0]}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      {industry.description.split(' ').slice(0, 4).join(' ')}...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile "View All" indicator */}
          <div className="text-center mt-6">
            {!showAllIndustries && (
              <>
                <p className="text-sm text-gray-500 mb-4">+{industries.length - 4} more industries</p>
                <button 
                  onClick={() => setShowAllIndustries(true)}
                  className="text-primary font-medium text-sm underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  View All Industries →
                </button>
              </>
            )}
            {showAllIndustries && (
              <button 
                onClick={() => setShowAllIndustries(false)}
                className="text-primary font-medium text-sm underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                Show Less ←
              </button>
            )}
          </div>
        </div>

        {/* Tablet & Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="group bg-gray-50 hover:bg-primary/5 rounded-xl p-6 text-center transition-colors duration-200 hover:shadow-lg border border-gray-100 hover:border-primary/20 optimize-animations"
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-12 sm:h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 rounded-xl transition-colors duration-200 gpu-accelerated">
                  <IconComponent className="w-7 h-7 sm:w-6 sm:h-6 text-primary" />
                </div>

                {/* Industry Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Don&apos;t see your industry? We create custom solutions for every business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-colors duration-200 touch-manipulation gpu-accelerated"
          >
            Get Custom Solution
            <Briefcase className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
