"use client";

import { useState } from "react";
import { Star, ArrowLeft, ChevronRight, Info, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { ExtendedProduct } from "@/types/product";
import ProductImageGallery from "./ProductImageGallery";

interface ProductDetailHeroProps {
  product: ExtendedProduct;
}

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
  const [selectedQuantity, setSelectedQuantity] = useState(product.variants[0].quantity);

  // Get unique colors and quantities
  const uniqueColors = Array.from(new Set(product.variants.map(v => v.color)));
  const uniqueQuantities = Array.from(new Set(product.variants.map(v => v.quantity)))
    .sort((a, b) => {
      const aValue = product.variants.find(v => v.quantity === a)?.quantityValue || 0;
      const bValue = product.variants.find(v => v.quantity === b)?.quantityValue || 0;
      return aValue - bValue;
    });

  const handleColorChange = (color: string) => {
    // Find the variant that matches the selected color and current quantity
    const matchingVariant = product.variants.find(v =>
      v.color === color && v.quantity === selectedQuantity
    );

    if (matchingVariant) {
      setSelectedColor(color);
      setSelectedImageIndex(0);
    } else {
      // If no matching variant, find the first available variant with the selected color
      const colorVariant = product.variants.find(v => v.color === color && v.available);
      if (colorVariant) {
        setSelectedColor(color);
        setSelectedQuantity(colorVariant.quantity);
        setSelectedImageIndex(0);
      }
    }
  };

  const handleQuantityChange = (quantity: string) => {
    // Find the variant that matches the selected quantity and current color
    const matchingVariant = product.variants.find(v =>
      v.quantity === quantity && v.color === selectedColor
    );

    if (matchingVariant) {
      setSelectedQuantity(quantity);
      setSelectedImageIndex(0);
    } else {
      // If no matching variant, find the first available variant with the selected quantity
      const availableVariant = product.variants.find(v => v.quantity === quantity && v.available);
      if (availableVariant) {
        setSelectedQuantity(quantity);
        setSelectedColor(availableVariant.color);
        setSelectedImageIndex(0);
      }
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Compact Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Product Images - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
            selectedImageIndex={selectedImageIndex}
            onImageChange={setSelectedImageIndex}
          />
        </div>

        {/* Product Details - Takes 3 columns on large screens */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header Section */}
          <div className="space-y-4">
            {product.badge && (
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                <Shield className="w-4 h-4 mr-2" />
                {product.badge}
              </div>
            )}

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-primary rounded-full"></div>
                <p className="text-lg text-gray-600 font-semibold">{product.brand}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">{product.rating}</span>
                <span className="text-sm text-gray-600 ml-1">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Key Features - Compact Grid */}
          {product.features && product.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Color Variants */}
          {uniqueColors.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Color Options
              </h3>
              <div className="flex flex-wrap gap-3">
                {uniqueColors.map((color) => {
                  const colorVariant = product.variants.find(v => v.color === color);
                  const isAvailable = product.variants.some(v => v.color === color && v.available);
                  return (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      disabled={!isAvailable}
                      className={`relative px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-gray-200 hover:border-gray-300"
                      } ${!isAvailable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full border border-white shadow-sm"
                          style={{ backgroundColor: colorVariant?.colorCode || "#ccc" }}
                        />
                        <span className="text-sm font-medium">{color}</span>
                      </div>
                      {selectedColor === color && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Options */}
          {uniqueQuantities.length >= 1 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Size Options
              </h3>
              <div className="flex flex-wrap gap-3">
                {uniqueQuantities.map((quantity) => {
                  const isAvailable = product.variants.some(v => v.quantity === quantity && v.available);
                  return (
                    <button
                      key={quantity}
                      onClick={() => handleQuantityChange(quantity)}
                      disabled={!isAvailable}
                      className={`relative px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedQuantity === quantity
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-gray-200 hover:border-gray-300"
                      } ${!isAvailable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-900">{quantity}</span>
                      </div>
                      {selectedQuantity === quantity && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Compact CTA Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Shield className="w-4 h-4" />
                Get Quote
              </Link>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              Professional consultation available • Custom quotes provided
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );}
