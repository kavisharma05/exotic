
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCategories from "@/components/ProductCategories";
import Industries from "@/components/Industries";
import ClientReviews from "@/components/ClientReviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Clock, Droplets, Award, Grid3X3 } from "lucide-react";

export default function HomePage() {



  return (
    <div className="min-h-screen bg-white gpu-accelerated">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary scroll-container relative">
        {/* Floral Background */}
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          
          {/* Mobile: Modern 2x2 Grid, Tablet & Desktop: Original layout */}
          {/* Mobile Modern 2x2 Grid Layout */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-4">
              {/* Long-Lasting Scent */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                    <Clock className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Long-Lasting</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">
                    Premium fragrances all day
                  </p>
                </div>
              </div>

              {/* Water Based */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                    <Droplets className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Water Based</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">
                    Eco-friendly & gentle
                  </p>
                </div>
              </div>

              {/* ISO Certified */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                    <Award className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">ISO Certified</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">
                    Quality assured standards
                  </p>
                </div>
              </div>

              {/* Wide Range */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                    <Grid3X3 className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Wide Range</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">
                    Extensive collection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
            
            {/* Long-Lasting Scent */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                  <Clock className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">Long-Lasting Scent</h3>
                <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                  Premium fragrances that stay with you all day long.
                </p>
              </div>
            </div>

            {/* Water Based */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                  <Droplets className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">Water Based</h3>
                <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                  Eco-friendly water-based formulations that are gentle and safe.
                </p>
              </div>
            </div>

            {/* ISO Certified */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                  <Award className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">ISO Certified</h3>
                <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                  Quality assured with international ISO certification standards.
                </p>
              </div>
            </div>

            {/* Wide Range */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                  <Grid3X3 className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">Wide Range</h3>
                <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                  Extensive collection of fragrances for every occasion and preference.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Product Categories Section */}
      <ProductCategories />

      {/* Industries Section */}
      <Industries />

      {/* Client Reviews Section */}
      <ClientReviews />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />






    </div>
  );
}
