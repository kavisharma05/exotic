"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { enhancedProducts } from "@/data/products";
import { ExtendedProduct } from "@/types/product";

interface ProductNavigationProps {
  currentProduct: ExtendedProduct;
}

export default function ProductNavigation({ currentProduct }: ProductNavigationProps) {
  const currentIndex = enhancedProducts.findIndex(p => p.id === currentProduct.id);
  const prevProduct = currentIndex > 0 ? enhancedProducts[currentIndex - 1] : enhancedProducts[enhancedProducts.length - 1];
  const nextProduct = currentIndex < enhancedProducts.length - 1 ? enhancedProducts[currentIndex + 1] : enhancedProducts[0];

  return (
    <div className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Compact Navigation */}
        <div className="flex items-center justify-between gap-4">
          {/* Previous Product */}
          <Link
            href={`/products/${prevProduct.id}`}
            className="group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex-1 max-w-xs border border-gray-100 hover:border-primary/20"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Previous</p>
              <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary transition-colors text-sm">
                {prevProduct.name}
              </h3>
            </div>
          </Link>

          {/* Position Indicator */}
          <div className="flex flex-col items-center gap-2 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
              <span className="text-sm font-bold text-primary">{currentIndex + 1}</span>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-900">of {enhancedProducts.length}</p>
            </div>
          </div>

          {/* Next Product */}
          <Link
            href={`/products/${nextProduct.id}`}
            className="group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex-1 max-w-xs border border-gray-100 hover:border-primary/20"
          >
            <div className="flex-1 min-w-0 text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Next</p>
              <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary transition-colors text-sm">
                {nextProduct.name}
              </h3>
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}