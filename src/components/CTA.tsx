"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden gpu-accelerated">

      {/* Optimized Background Elements */}
      <div className="absolute inset-0 decorative-container">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/15 rounded-full decorative-blur-light"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/8 rounded-full decorative-blur-heavy"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full decorative-blur-light"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-primary/12 rounded-full decorative-blur-light"></div>
      </div>

      {/* Optimized Pattern Overlay */}
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Optimized Premium Badge */}
          <div className="inline-flex items-center gap-2 badge-bg text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20 optimized-shadow">
            Premium Fragrance Solutions
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Transform 
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Your Space?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            Create signature scent experiences that perfectly capture your brand&apos;s essence and leave lasting impressions on your customers.
          </p>

          {/* Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-primary/90 transition-colors duration-200 touch-manipulation gpu-accelerated w-full sm:w-auto"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-white hover:bg-primary text-primary hover:text-white border-2 border-primary hover:border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-colors duration-200 touch-manipulation gpu-accelerated w-full sm:w-auto"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Optimized Trust Indicators - Always Single Row */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="trust-text">ISO Certified Quality</span>
            </div>
            <div className="trust-item">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="trust-text">500+ Happy Clients</span>
            </div>
            <div className="trust-item">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="trust-text">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
