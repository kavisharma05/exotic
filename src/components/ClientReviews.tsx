"use client";

import { useState, useCallback, useMemo } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "JV Enterprise",
    position: "Managing Director",
    rating: 5,
    review: "The cleaning solutions from Zeal Marketing have completely transformed our business operations. The quality and effectiveness of their products have exceeded our expectations, and our customers consistently praise the clean, fresh environment.",
    image: "/avatars/rajesh.jpg",
    location: "Mumbai, India"
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Rajesh Grah Udhyog Aurangabad",
    position: "Operations Manager",
    rating: 5,
    review: "Exceptional quality and service! The custom cleaning solutions they provided perfectly meet our industrial requirements. Our facility has never been cleaner, and the products are both effective and safe for our workers.",
    image: "/avatars/priya.jpg",
    location: "Aurangabad, India"
  },
  {
    id: 3,
    name: "Vikram Singh",
    company: "Laxita Enterprises",
    position: "General Manager",
    rating: 4,
    review: "Working with Zeal Marketing has elevated our cleaning standards significantly. The consistent quality and professional approach make them our trusted partner for all our cleaning needs across multiple locations.",
    image: "/avatars/vikram.jpg",
    location: "Delhi, India"
  },
  {
    id: 4,
    name: "Anita Reddy",
    company: "Radhika Chemical Hyderabad",
    position: "Quality Manager",
    rating: 5,
    review: "The chemical cleaning solutions have made a remarkable difference in our operations. Professional service, premium quality products, and excellent customer support. Highly recommended for any business.",
    image: "/avatars/anita.jpg",
    location: "Hyderabad, India"
  },
  {
    id: 5,
    name: "Dr. Suresh Patel",
    company: "Vijay Shree Chemicals Hyderabad",
    position: "Director",
    rating: 5,
    review: "The specialized cleaning formulations are perfect for our chemical manufacturing facility. They create the safe, hygienic environment our workers need while maintaining the highest quality standards.",
    image: "/avatars/suresh.jpg",
    location: "Hyderabad, India"
  },
  {
    id: 6,
    name: "Mrs. Kavita Mehta",
    company: "Vedaant Pre School",
    position: "Principal",
    rating: 4,
    review: "Implementing their child-safe cleaning solutions has improved our school environment remarkably. Parents and staff have noted the positive change in cleanliness and safety standards.",
    image: "/avatars/kavita.jpg",
    location: "Pune, India"
  },
  {
    id: 7,
    name: "Amit Jain",
    company: "New Dev Shree Store Indore",
    position: "Store Manager",
    rating: 5,
    review: "The retail cleaning solutions have transformed our store environment. Our customers frequently comment on the clean, fresh atmosphere, and it's become a key part of our customer experience.",
    image: "/avatars/amit.jpg",
    location: "Indore, India"
  },
  {
    id: 8,
    name: "Dr. Rajesh Bhandari",
    company: "Bhandari Hospital",
    position: "Chief Medical Officer",
    rating: 5,
    review: "The medical-grade cleaning solutions are essential for our hospital operations. They provide the hygiene and safety standards we require while being gentle on sensitive medical equipment and surfaces.",
    image: "/avatars/rajesh_b.jpg",
    location: "Mumbai, India"
  },
  {
    id: 9,
    name: "Dr. Priya Varma",
    company: "V-One Hospital",
    position: "Administrator",
    rating: 4,
    review: "Our hospital has seen significant improvements in cleanliness and hygiene since implementing Zeal Marketing's solutions. The products are effective, safe, and meet all our medical facility requirements.",
    image: "/avatars/priya_v.jpg",
    location: "Bangalore, India"
  },
  {
    id: 10,
    name: "Mrs. Sunita Desai",
    company: "Lokmanya Vidhyaniketan",
    position: "Principal",
    rating: 5,
    review: "The educational institution cleaning solutions have created a healthier learning environment for our students. The products are safe, effective, and help maintain the high standards our school is known for.",
    image: "/avatars/sunita.jpg",
    location: "Mumbai, India"
  },
  {
    id: 11,
    name: "Mr. Ravi Kumar",
    company: "Delhi Public School",
    position: "Facilities Manager",
    rating: 4,
    review: "The comprehensive cleaning solutions have elevated our school's maintenance standards. Students, parents, and staff all appreciate the clean, fresh environment that supports better learning outcomes.",
    image: "/avatars/ravi.jpg",
    location: "Delhi, India"
  },
  {
    id: 12,
    name: "Dr. Anil Tejankar",
    company: "Tejankar Hospital Ujjain",
    position: "Medical Director",
    rating: 5,
    review: "The hospital-grade cleaning solutions have been instrumental in maintaining our facility's hygiene standards. Professional service, reliable products, and excellent support make them our preferred partner.",
    image: "/avatars/anil.jpg",
    location: "Ujjain, India"
  },
  {
    id: 13,
    name: "Mr. Sanjay Agarwal",
    company: "Hotel Sarovar Portico",
    position: "General Manager",
    rating: 5,
    review: "The hospitality cleaning solutions have enhanced our guest experience significantly. Our guests frequently compliment the clean, fresh ambiance, and it's become a signature part of our hotel's brand experience.",
    image: "/avatars/sanjay.jpg",
    location: "Mumbai, India"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Loved by Our Customers
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses worldwide, our cleaning solutions have transformed 
            countless spaces and created exceptional experiences for our valued customers.
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 h-[320px] flex flex-col optimize-animations"
                >
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <Quote className="w-5 h-5 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
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
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow mb-4">
                    <p className="text-gray-700 leading-relaxed text-sm line-clamp-6">
                      &ldquo;{review.review}&rdquo;
                    </p>
                  </div>

                  {/* Customer Info - Fixed at bottom */}
                  <div className="flex items-center pt-3 border-t border-gray-100">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {review.position}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {review.company}
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
