"use client";

import { useState, useCallback, useMemo } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Grand Plaza Hotel",
    position: "General Manager",
    rating: 5,
    review: "The fragrance solutions from Zeal Marketing have completely transformed our hotel lobby. Our guests frequently comment on the wonderful ambiance, and it's become a signature part of our brand experience.",
    image: "/avatars/sarah.jpg",
    location: "New York, USA"
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    company: "Desert Rose Spa",
    position: "Owner",
    rating: 5,
    review: "Exceptional quality and service! The custom blend they created for our spa perfectly captures the essence of relaxation we wanted to achieve. Our clients love the unique scent experience.",
    image: "/avatars/ahmed.jpg",
    location: "Dubai, UAE"
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    company: "Luxury Retail Chain",
    position: "Brand Director",
    rating: 4,
    review: "Working with Zeal Marketing has elevated our retail environments significantly. The consistent quality and professional approach make them our go-to partner for all locations.",
    image: "/avatars/maria.jpg",
    location: "Madrid, Spain"
  },
  {
    id: 4,
    name: "James Thompson",
    company: "Elite Car Dealership",
    position: "Sales Manager",
    rating: 5,
    review: "The car fresheners and showroom scenting solutions have made a noticeable difference in our customer experience. Professional service and premium quality products.",
    image: "/avatars/james.jpg",
    location: "London, UK"
  },
  {
    id: 5,
    name: "Priya Sharma",
    company: "Wellness Center",
    position: "Founder",
    rating: 5,
    review: "The natural and therapeutic fragrances are perfect for our wellness center. They create the calming atmosphere our clients need for their healing journey.",
    image: "/avatars/priya.jpg",
    location: "Mumbai, India"
  },
  {
    id: 6,
    name: "Robert Chen",
    company: "Tech Corporate Office",
    position: "Facilities Manager",
    rating: 4,
    review: "Implementing their office fragrance solutions has improved our workplace environment remarkably. Employees have noted the positive change in office ambiance.",
    image: "/avatars/robert.jpg",
    location: "Singapore"
  }
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  
  // Memoize calculations for better performance
  const totalPages = useMemo(() => Math.ceil(reviews.length / reviewsPerPage), [reviewsPerPage]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const getCurrentReviews = useMemo(() => {
    const start = currentIndex * reviewsPerPage;
    return reviews.slice(start, start + reviewsPerPage);
  }, [currentIndex, reviewsPerPage]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary scroll-container relative">
      {/* Floral Background */}
      <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses worldwide, our fragrance solutions have transformed 
            countless spaces and created memorable experiences.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full shadow-lg border border-white/30 transition-colors duration-200 backdrop-blur-sm touch-manipulation gpu-accelerated"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full shadow-lg border border-white/30 transition-colors duration-200 backdrop-blur-sm touch-manipulation gpu-accelerated"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Reviews Grid */}
          <div className="px-0 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {getCurrentReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 min-h-[280px] sm:h-[300px] flex flex-col optimize-animations"
                >
                  {/* Quote Icon */}
                  <div className="mb-3 sm:mb-4">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    &ldquo;{review.review}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center mt-auto">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-primary font-semibold text-sm sm:text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                        {review.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {review.position}, {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
                  index === currentIndex
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile navigation hint */}
          <div className="sm:hidden text-center mt-4">
            <p className="text-sm text-white/70">Tap dots to see more reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
