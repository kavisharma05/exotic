import { Metadata } from "next";
import { notFound } from "next/navigation";
import { enhancedProducts } from "@/data/products";
import { ProductDetailPageProps } from "@/types/product";
import ProductDetailPage from "@/components/ProductDetailPage";

// Generate static params for all products
export async function generateStaticParams() {
  return enhancedProducts.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = enhancedProducts.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${product.brand} | Premium Cleaning Products`,
    description: product.longDescription,
    keywords: [
      product.name,
      product.brand,
      product.category,
      ...product.features,
      "cleaning products",
      "premium quality",
      "eco-friendly"
    ].join(", "),
    openGraph: {
      title: `${product.name} - ${product.brand}`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - ${product.brand}`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductDetailPageRoute({ params }: ProductDetailPageProps) {
  const product = enhancedProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    description: product.longDescription,
    image: product.images,
    category: product.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
      bestRating: 5,
      worstRating: 1,
    },
    additionalProperty: Object.entries(product.specifications).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProductDetailPage product={product} />
    </>
  );
}