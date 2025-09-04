"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { 
  Search, 
  Grid3X3, 
  List, 
  ChevronDown,
  Star,
  Award,
  Droplets,
  Clock,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const allProducts = [
  {
    id: "1",
    name: "Deofume",
    brand: "DeOFume Collection",
    rating: 4.8,
    reviews: 234,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
    badge: "Bestseller",
    category: "Room Freshener",
    description: "Premium room freshener that eliminates odors and creates a fresh, pleasant atmosphere in any space.",
    features: ["Long-lasting", "Water-based", "Eco-friendly"]
  },
  {
    id: "2",
    name: "Deofresh Floor Cleaner",
    brand: "DeOFresh Collection",
    rating: 4.7,
    reviews: 189,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
    badge: "Top Rated",
    category: "Floor Cleaner",
    description: "Advanced floor cleaning formula that removes stubborn stains while leaving floors sparkling clean and fresh.",
    features: ["Stain removal", "Fresh scent", "Safe formula"]
  },
  {
    id: "3",
    name: "Deofresh Soft Liquid Soap",
    brand: "DeOFresh Collection",
    rating: 4.6,
    reviews: 156,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
    category: "Liquid Soap",
    description: "Gentle yet effective liquid soap that cleanses thoroughly while keeping hands soft and moisturized.",
    features: ["Gentle formula", "Moisturizing", "Antibacterial"]
  },
  {
    id: "4",
    name: "Deoclean Glass Cleaner",
    brand: "DeoClean Collection",
    rating: 4.9,
    reviews: 298,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png",
    badge: "Crystal Clear",
    category: "Glass Cleaner",
    description: "Professional-grade glass cleaner that delivers streak-free shine on windows, mirrors, and glass surfaces.",
    features: ["Streak-free", "Professional grade", "Quick drying"]
  },
  {
    id: "5",
    name: "Deoclean Multipurpose Liquid",
    brand: "DeoClean Collection",
    rating: 4.5,
    reviews: 167,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
    category: "Multipurpose Cleaner",
    description: "Versatile cleaning solution perfect for multiple surfaces, providing deep cleaning with a fresh scent.",
    features: ["Multi-surface", "Deep cleaning", "Fresh scent"]
  },
  {
    id: "6",
    name: "Deopic Toilet Cleaner",
    brand: "DeoPic Collection",
    rating: 4.4,
    reviews: 142,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png",
    category: "Toilet Cleaner",
    description: "Powerful toilet cleaner that eliminates germs, removes stains, and leaves toilets hygienically clean.",
    features: ["Germ-free", "Stain removal", "Hygienic"]
  },
  {
    id: "7",
    name: "Deodishwash",
    brand: "DeoDish Collection",
    rating: 4.8,
    reviews: 203,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
    badge: "Grease Fighter",
    category: "Dishwashing Liquid",
    description: "Concentrated dishwashing liquid that cuts through grease and grime, leaving dishes spotlessly clean.",
    features: ["Grease cutting", "Concentrated", "Gentle on hands"]
  },
  {
    id: "8",
    name: "Deoshine",
    brand: "DeoShine Collection",
    rating: 4.6,
    reviews: 178,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png",
    category: "Surface Polish",
    description: "Premium surface polish that brings out natural shine while protecting surfaces from dust and fingerprints.",
    features: ["Natural shine", "Dust protection", "Premium quality"]
  },
  {
    id: "9",
    name: "Deoherb",
    brand: "DeoHerb Collection",
    rating: 4.9,
    reviews: 215,
    image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
    badge: "Premium Quality",
    category: "Premium Floor Cleaner",
    description: "Premium quality floor cleaner with natural herbal extracts for superior cleaning and long-lasting freshness.",
    features: ["Herbal extracts", "Premium quality", "Long-lasting"]
  },
  {
    id: "10",
    name: "Deofresh Air Freshener",
    brand: "DeOFresh Collection",
    rating: 4.7,
    reviews: 189,
    image: "/products/deofresh-air-freshener.jpg",
    category: "Air Freshener",
    description: "Instant air freshener that neutralizes odors and fills your space with delightful fragrances.",
    features: ["Instant action", "Odor neutralizer", "Delightful fragrance"]
  },
  {
    id: "11",
    name: "Deoclean Bathroom Cleaner",
    brand: "DeoClean Collection",
    rating: 4.5,
    reviews: 134,
    image: "/products/deoclean-bathroom-cleaner.jpg",
    category: "Bathroom Cleaner",
    description: "Specialized bathroom cleaner that tackles soap scum, mildew, and grime for a sparkling clean bathroom.",
    features: ["Soap scum removal", "Anti-mildew", "Deep cleaning"]
  },
  {
    id: "12",
    name: "Deopic Car Freshener",
    brand: "DeoPic Collection",
    rating: 4.6,
    reviews: 167,
    image: "/products/deopic-car-freshener.jpg",
    category: "Car Freshener",
    description: "Long-lasting car freshener that keeps your vehicle smelling fresh and pleasant during every journey.",
    features: ["Long-lasting", "Car specific", "Pleasant fragrance"]
  }
];

const categories = [
  "All Products",
  "Room Freshener",
  "Floor Cleaner", 
  "Liquid Soap",
  "Glass Cleaner",
  "Multipurpose Cleaner",
  "Toilet Cleaner",
  "Dishwashing Liquid",
  "Surface Polish",
  "Air Freshener",
  "Bathroom Cleaner",
  "Car Freshener"
];

const collections = [
  "All Collections",
  "DeOFume Collection",
  "DeOFresh Collection", 
  "DeoClean Collection",
  "DeoPic Collection",
  "DeoDish Collection",
  "DeoShine Collection",
  "DeoHerb Collection"
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedCollection, setSelectedCollection] = useState("All Collections");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter products based on search, category, and collection
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesCollection = selectedCollection === "All Collections" || product.brand === selectedCollection;
    
    return matchesSearch && matchesCategory && matchesCollection;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0; // featured order
    }
  });

  return (
    <div className="min-h-screen bg-white gpu-accelerated">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl decorative-blur-light"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/15 rounded-full blur-xl decorative-blur-light"></div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-primary/20 shadow-lg badge-bg">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Premium Product Collection</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Discover Our Complete
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Fragrance Collection
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our comprehensive range of premium fragrances and cleaning solutions, 
              each crafted with the finest ingredients and designed to transform your space.
            </p>

            {/* Hero Stats - Mobile optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">12+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Products</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">4.7+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Rating</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Eco-Friendly</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">ISO</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Certified</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Search Bar */}
            <div className="mb-4 sm:mb-6">
              <div className="relative max-w-full sm:max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm sm:text-base touch-manipulation"
                />
              </div>
            </div>

            {/* Filters and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
              
              {/* Filters */}
              <div className="w-full lg:w-auto">
                {/* Mobile: Stack filters vertically */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex gap-3 sm:gap-4 w-full lg:w-auto">
                  {/* Category Filter */}
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm touch-manipulation"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* Collection Filter */}
                  <div className="relative">
                    <select
                      value={selectedCollection}
                      onChange={(e) => setSelectedCollection(e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm touch-manipulation"
                    >
                      {collections.map(collection => (
                        <option key={collection} value={collection}>{collection}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>

                  {/* Sort Filter */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm touch-manipulation"
                    >
                      <option value="featured">Featured</option>
                      <option value="rating">Highest Rated</option>
                      <option value="reviews">Most Reviews</option>
                      <option value="name">Name A-Z</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* View Mode and Results Count */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
                <span className="text-sm text-gray-600 order-2 sm:order-1">
                  {sortedProducts.length} products found
                </span>
                
                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1 order-1 sm:order-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors touch-manipulation ${
                      viewMode === "grid" 
                        ? "bg-white text-primary shadow-sm" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors touch-manipulation ${
                      viewMode === "list" 
                        ? "bg-white text-primary shadow-sm" 
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            {sortedProducts.length > 0 ? (
              <div className={`${
                viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" 
                  : "space-y-4 sm:space-y-6"
              }`}>
                {sortedProducts.map((product) => (
                  <div key={product.id} className={viewMode === "list" ? "max-w-none" : ""}>
                    <ProductCard product={product} viewMode={viewMode} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6 px-4 sm:px-0">
                  Try adjusting your search criteria or browse all products.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Products");
                    setSelectedCollection("All Collections");
                  }}
                  className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors touch-manipulation"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative scroll-container">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
              Why Choose Our Products?
            </h2>
            
            {/* Mobile: Modern 2x2 Grid, Tablet & Desktop: Original layout */}
            {/* Mobile Modern 2x2 Grid Layout */}
            <div className="sm:hidden">
              <div className="grid grid-cols-2 gap-4">
                {/* Long-Lasting */}
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                      <Clock className="w-6 h-6 text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Long-Lasting</h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      Premium fragrances all day
                    </p>
                  </div>
                </div>

                {/* Water Based */}
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                      <Droplets className="w-6 h-6 text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Water Based</h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      Eco-friendly & gentle
                    </p>
                  </div>
                </div>

                {/* ISO Certified */}
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                      <Award className="w-6 h-6 text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">ISO Certified</h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      Quality assured standards
                    </p>
                  </div>
                </div>

                {/* Top Rated */}
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                      <Star className="w-6 h-6 text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Top Rated</h3>
                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      Loved by customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet & Desktop Grid Layout */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
              
              {/* Long-Lasting */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    <Clock className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">Long-Lasting</h3>
                  <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                    Premium fragrances that stay with you all day long.
                  </p>
                </div>
              </div>

              {/* Water Based */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    <Droplets className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">Water Based</h3>
                  <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                    Eco-friendly formulations that are gentle and safe.
                  </p>
                </div>
              </div>

              {/* ISO Certified */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    <Award className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">ISO Certified</h3>
                  <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                    Quality assured with international standards.
                  </p>
                </div>
              </div>

              {/* Top Rated */}
              <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                    <Star className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">Top Rated</h3>
                  <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                    Loved by customers with 4.7+ average rating.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
