"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "@/types/product";

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  // Use primary color theme for all cards to match brand colors
  const theme = { hover: 'from-primary/5', badge: 'bg-primary' };

  if (viewMode === "list") {
    return (
      <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 optimize-animations" suppressHydrationWarning>
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.hover} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
        <div className="relative z-10 flex flex-col sm:flex-row">
          {/* Product Image */}
          <div className="relative w-full sm:w-48 h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 expensive-gradient">
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 z-20">
                <span className={`${theme.badge} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {product.badge}
                </span>
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 items-center justify-center hidden">
              <div className="w-20 h-28 bg-gradient-to-t from-primary/20 to-primary/5 rounded-lg border-2 border-primary/10 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary/40 text-xs font-medium text-center">
                  {product.name.split(' ')[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between h-full">
              <div className="flex-1">
                {/* Category */}
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">
                  {product.category}
                </div>

                {/* Product Name & Brand */}
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{product.brand}</p>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : i < product.rating
                            ? 'text-yellow-400 fill-current opacity-50'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Price and Button */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 mt-4 sm:mt-0 sm:ml-6">
                {product.price && (
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                  </div>
                )}
                <Link 
                  href={`/products/${product.id}`}
                  className="bg-primary text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-primary/90 transition-colors duration-200 touch-manipulation gpu-accelerated whitespace-nowrap inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 optimize-animations"
      suppressHydrationWarning
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.hover} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
      <div className="relative z-10">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-20">
            <span className={`${theme.badge} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 expensive-gradient">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.nextElementSibling as HTMLElement;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          <div className="absolute inset-0 items-center justify-center hidden">
            {/* Fallback placeholder */}
            <div className="w-20 h-28 sm:w-24 sm:h-32 bg-gradient-to-t from-primary/20 to-primary/5 rounded-lg border-2 border-primary/10 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary/40 text-xs font-medium text-center">
                {product.name.split(' ')[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-6">
          {/* Category */}
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">
            {product.category}
          </div>

          {/* Product Name & Brand */}
          <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{product.brand}</p>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          {product.features && (
            <div className="flex flex-wrap gap-1 mb-4">
              {product.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Rating and Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : i < product.rating
                        ? 'text-yellow-400 fill-current opacity-50'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating}
              </span>
            </div>
            {product.price && (
              <div className="text-lg font-bold text-primary">{product.price}</div>
            )}
          </div>

          {/* Learn More Button */}
          <Link 
            href={`/products/${product.id}`}
            className="w-full mt-4 bg-primary text-white py-3 sm:py-3 rounded-full font-medium text-base hover:bg-primary/90 transition-colors duration-200 touch-manipulation gpu-accelerated inline-block text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
