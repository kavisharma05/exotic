// Base product interface used in product listings
export interface Product {
  id: string;
  name: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  description: string;
  price?: string;
  features?: string[];
}

// Product variant interface for color and quantity options
export interface ProductVariant {
  color: string;
  colorCode: string;
  quantity: string; // e.g., "500ml", "1L", "5L"
  quantityValue: number; // numeric value for sorting (500, 1000, 5000)
  image: string;
  price?: number;
  stock: number;
  available: boolean;
}

// Extended product interface for detail pages
export interface ExtendedProduct {
  id: string;
  name: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
  variants: ProductVariant[];
  basePrice: number;
  images: string[];
  relatedProducts: string[];
}

// Product card component props
export interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

// Product detail page props
export interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}