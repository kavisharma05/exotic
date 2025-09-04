"use client";

import { ExtendedProduct } from "@/types/product";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductDetailHero from "@/components/ProductDetailHero";
import ProductNavigation from "@/components/ProductNavigation";
import RelatedProducts from "@/components/RelatedProducts";
import ErrorBoundary from "@/components/ErrorBoundary";

interface ProductDetailPageProps {
  product: ExtendedProduct;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Product Detail Content */}
      <ErrorBoundary>
        <ProductDetailHero product={product} />
      </ErrorBoundary>

      <ErrorBoundary>
        <RelatedProducts currentProduct={product} />
      </ErrorBoundary>

      <ErrorBoundary>
        <ProductNavigation currentProduct={product} />
      </ErrorBoundary>

      <Footer />
    </div>
  );
}