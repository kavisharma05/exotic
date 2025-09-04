"use client";

import { ExtendedProduct } from "@/types/product";
import { enhancedProducts } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Shield, Sparkles, Award, TrendingUp } from "lucide-react";

interface RelatedProductsProps {
  currentProduct: ExtendedProduct;
}

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Enhanced recommendation logic for more precise suggestions
  const getRecommendedProducts = () => {
    // First priority: Explicitly related products
    const explicitlyRelated = enhancedProducts.filter(product =>
      currentProduct.relatedProducts.includes(product.id)
    );

    if (explicitlyRelated.length >= 3) {
      return explicitlyRelated.slice(0, 3);
    }

    // Second priority: Same category, high-rated products
    const sameCategoryProducts = enhancedProducts
      .filter(product =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
      )
      .sort((a, b) => b.rating - a.rating) // Sort by rating
      .slice(0, 3 - explicitlyRelated.length);

    const recommendations = [...explicitlyRelated, ...sameCategoryProducts];

    // Third priority: Similar brand products with high ratings
    if (recommendations.length < 3) {
      const brandProducts = enhancedProducts
        .filter(product =>
          product.brand === currentProduct.brand &&
          product.id !== currentProduct.id &&
          !recommendations.some(rec => rec.id === product.id)
        )
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3 - recommendations.length);

      recommendations.push(...brandProducts);
    }

    // Fourth priority: High-rated products from other categories
    if (recommendations.length < 3) {
      const highRatedProducts = enhancedProducts
        .filter(product =>
          product.id !== currentProduct.id &&
          !recommendations.some(rec => rec.id === product.id)
        )
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3 - recommendations.length);

      recommendations.push(...highRatedProducts);
    }

    return recommendations.slice(0, 3);
  };

  const displayProducts = getRecommendedProducts();

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-primary tracking-wide">PREMIUM RECOMMENDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Curated for Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover handpicked products that complement your selection, chosen by our experts for premium quality and performance
            </p>
          </div>

          {/* Premium Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {displayProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border border-white/50"
              >
                {/* Product Image with Premium Overlay */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Premium Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-bold border border-primary/20 shadow-lg">
                      {product.badge}
                    </div>
                  )}

                  {/* Premium Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quality Indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Premium Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-6 bg-primary rounded-full"></div>
                      <p className="text-sm font-semibold text-gray-700">{product.brand}</p>
                    </div>
                  </div>

                  {/* Premium Rating Display */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-xl mb-4 border border-yellow-200/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <TrendingUp className="w-3 h-3" />
                        <span>{product.reviews} reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 font-semibold shadow-sm"
                          >
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 3 && (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 font-semibold border border-gray-200">
                            +{product.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Premium CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600 font-semibold">Premium Quality</span>
                      </div>
                      <span className="text-sm text-primary font-bold group-hover:underline transition-all duration-300">
                        Explore Now →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-bold text-primary tracking-wide">EXPAND YOUR COLLECTION</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Discover Our Complete Premium Range
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore our extensive collection of professionally crafted products designed to meet the highest standards of quality and performance
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl"
                >
                  <span>View Complete Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border-2 border-primary/30 text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg"
                >
                  <Shield className="w-5 h-5" />
                  <span>Expert Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}