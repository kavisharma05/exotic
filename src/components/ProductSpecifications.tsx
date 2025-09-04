"use client";

import { ExtendedProduct } from "@/types/product";
import { ChevronDown, ChevronUp, Settings, Star, Shield } from "lucide-react";
import { useState } from "react";

interface ProductSpecificationsProps {
  product: ExtendedProduct;
}

export default function ProductSpecifications({ product }: ProductSpecificationsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-6 sm:p-8 lg:p-10">
      {/* Compact Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 mb-4">
          <Settings className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Technical Details</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Specifications & Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Complete technical information for {product.name}
        </p>
      </div>

      {/* Compact Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column - Key Info */}
        <div className="space-y-6">
          {/* Brand & Category */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Brand</p>
                <p className="text-lg font-semibold text-gray-900">{product.brand}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Category</p>
                <p className="text-lg font-semibold text-gray-900">{product.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Rating</p>
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
                  <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Color Options */}
          {product.variants.length > 1 && (
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Colors</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.variants.map((variant) => (
                  <div key={variant.color} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: variant.colorCode }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{variant.color}</p>
                      <p className={`text-xs ${variant.available ? "text-green-600" : "text-red-600"}`}>
                        {variant.available ? "Available" : "Unavailable"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Middle Column - Features */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Key Features
            </h3>
            <div className="space-y-3">
              {product.features.slice(0, 8).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Specifications */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-900 px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Specifications
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {Object.entries(product.specifications).slice(0, isExpanded ? undefined : 8).map(([key, value]) => (
                <div key={key} className="px-6 py-3 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <dt className="text-sm font-medium text-gray-600">{key}</dt>
                    <dd className="text-sm font-semibold text-gray-900">{value}</dd>
                  </div>
                </div>
              ))}
            </div>
            {Object.entries(product.specifications).length > 8 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-3 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-t border-gray-100"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All Specs
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}