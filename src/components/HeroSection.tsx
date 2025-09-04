"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  // Hero images for slideshow
  const imageUrls = [
    "https://res.cloudinary.com/dixayfqq8/image/upload/v1756882959/hero1_ddzaf4.png",
    "https://res.cloudinary.com/dixayfqq8/image/upload/v1756895664/hero2_fq2nt2.png",
    "https://res.cloudinary.com/dixayfqq8/image/upload/v1756922808/hero3_hhth5s.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = () => {
    if (currentImageIndex < imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setImageError(true);
    }
  };

  // Auto-slideshow functionality
  useEffect(() => {
    if (imageError) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [imageError, imageUrls.length]);

  return (
    <section className={`relative w-full h-screen overflow-hidden ${
      imageError
        ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'
        : 'bg-white'
    }`}>
      {/* Background Image */}
      {!imageError && (
        <div className="absolute inset-0">
          <Image
            key={currentImageIndex} // Force re-render when URL changes
            src={imageUrls[currentImageIndex]}
            alt="Exotic Fragrances Hero"
            fill
            className="object-cover object-center"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
            onError={handleImageError}
          />
        </div>
      )}

      {/* Fallback decorative elements when image fails */}
      {imageError && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      )}
    </section>
  );
}
