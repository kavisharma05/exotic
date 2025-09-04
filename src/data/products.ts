import { ExtendedProduct } from "@/types/product";

// Enhanced product data with additional fields for detail pages
export const enhancedProducts: ExtendedProduct[] = [
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
    longDescription: "Transform your living space with Deofume, our premium room freshener that goes beyond masking odors to completely eliminate them. This water-based formula creates a fresh, pleasant atmosphere that lasts all day. Perfect for homes, offices, and commercial spaces, Deofume combines advanced odor-neutralizing technology with delightful fragrances that enhance your environment without overwhelming it.",
    features: ["Long-lasting", "Water-based", "Eco-friendly", "Odor elimination", "Safe for pets"],
    specifications: {
      "Volume": "500ml",
      "Fragrance Type": "Fresh & Clean",
      "Duration": "8-10 hours",
      "Ingredients": "Water-based formula",
      "Coverage": "Up to 200 sq ft",
      "Application": "Spray bottle"
    },
    basePrice: 299,
    variants: [
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        stock: 25,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 499,
        stock: 20,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 1999,
        stock: 8,
        available: true
      },
      {
        color: "Fresh Green",
        colorCode: "#10B981",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 319,
        stock: 15,
        available: true
      },
      {
        color: "Fresh Green",
        colorCode: "#10B981",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 549,
        stock: 12,
        available: true
      },
      {
        color: "Fresh Green",
        colorCode: "#10B981",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 2199,
        stock: 5,
        available: true
      },
      {
        color: "Lavender Purple",
        colorCode: "#8B5CF6",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 329,
        stock: 0,
        available: false
      },
      {
        color: "Lavender Purple",
        colorCode: "#8B5CF6",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 579,
        stock: 0,
        available: false
      },
      {
        color: "Lavender Purple",
        colorCode: "#8B5CF6",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
        price: 2299,
        stock: 0,
        available: false
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710858/Artboard_4_bchjft.png"
    ],
    relatedProducts: ["2", "3", "10"]
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
    longDescription: "Experience the power of advanced cleaning with Deofresh Floor Cleaner. This concentrated formula tackles even the most stubborn stains while being gentle on all floor types. From hardwood to tile, marble to laminate, our versatile cleaner leaves surfaces sparkling clean with a fresh, pleasant scent that doesn't overpower your space.",
    features: ["Stain removal", "Fresh scent", "Safe formula", "Multi-surface", "Concentrated"],
    specifications: {
      "Volume": "1L",
      "Dilution Ratio": "1:10",
      "Surface Types": "All floors",
      "pH Level": "Neutral",
      "Drying Time": "5-10 minutes",
      "Fragrance": "Fresh citrus"
    },
    basePrice: 249,
    variants: [
      {
        color: "Citrus Orange",
        colorCode: "#F97316",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
        stock: 30,
        available: true
      },
      {
        color: "Citrus Orange",
        colorCode: "#F97316",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
        price: 249,
        stock: 25,
        available: true
      },
      {
        color: "Citrus Orange",
        colorCode: "#F97316",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
        price: 999,
        stock: 12,
        available: true
      },
      {
        color: "Pine Green",
        colorCode: "#059669",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
        price: 259,
        stock: 20,
        available: true
      },
      {
        color: "Pine Green",
        colorCode: "#059669",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
        price: 469,
        stock: 18,
        available: true
      },
      {
        color: "Pine Green",
        colorCode: "#059669",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
        price: 1879,
        stock: 8,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710855/Artboard_2_jegjkt.png"
    ],
    relatedProducts: ["1", "5", "9"]
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
    longDescription: "Pamper your hands with Deofresh Soft Liquid Soap, a perfect blend of effective cleansing and gentle care. Our antibacterial formula removes dirt and germs while moisturizing ingredients keep your hands soft and smooth. Ideal for frequent use, this soap is gentle enough for sensitive skin yet powerful enough for thorough cleaning.",
    features: ["Gentle formula", "Moisturizing", "Antibacterial", "Sensitive skin", "pH balanced"],
    specifications: {
      "Volume": "500ml",
      "pH Level": "5.5-6.5",
      "Skin Type": "All skin types",
      "Antibacterial": "Yes",
      "Moisturizers": "Aloe vera, Glycerin",
      "Fragrance": "Mild floral"
    },
    basePrice: 179,
    variants: [
      {
        color: "Soft Pink",
        colorCode: "#F472B6",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
        stock: 40,
        available: true
      },
      {
        color: "Soft Pink",
        colorCode: "#F472B6",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
        price: 179,
        stock: 32,
        available: true
      },
      {
        color: "Soft Pink",
        colorCode: "#F472B6",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
        price: 719,
        stock: 15,
        available: true
      },
      {
        color: "Gentle Blue",
        colorCode: "#60A5FA",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
        price: 189,
        stock: 35,
        available: true
      },
      {
        color: "Gentle Blue",
        colorCode: "#60A5FA",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
        price: 339,
        stock: 28,
        available: true
      },
      {
        color: "Gentle Blue",
        colorCode: "#60A5FA",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
        price: 1359,
        stock: 12,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710828/Artboard_7_dwmeuy.png"
    ],
    relatedProducts: ["1", "7", "11"]
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
    longDescription: "Achieve crystal-clear results with Deoclean Glass Cleaner, the professional-grade solution for all your glass cleaning needs. Our advanced formula cuts through dirt, grime, and fingerprints while leaving zero streaks or residue. Perfect for windows, mirrors, glass doors, and automotive glass.",
    features: ["Streak-free", "Professional grade", "Quick drying", "Ammonia-free", "Anti-static"],
    specifications: {
      "Volume": "750ml",
      "Formula": "Ammonia-free",
      "Drying Time": "30 seconds",
      "Surface Types": "All glass surfaces",
      "Application": "Spray & wipe",
      "Finish": "Crystal clear"
    },
    basePrice: 199,
    variants: [
      {
        color: "Crystal Blue",
        colorCode: "#3B82F6",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png",
        stock: 50,
        available: true
      },
      {
        color: "Crystal Blue",
        colorCode: "#3B82F6",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png",
        price: 199,
        stock: 42,
        available: true
      },
      {
        color: "Crystal Blue",
        colorCode: "#3B82F6",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png",
        price: 799,
        stock: 18,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710834/Artboard_3_ekqpct.png"
    ],
    relatedProducts: ["5", "8", "11"]
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
    longDescription: "Simplify your cleaning routine with Deoclean Multipurpose Liquid, the one solution for all your cleaning needs. This versatile cleaner works effectively on countertops, appliances, furniture, and more, providing deep cleaning power with a refreshing scent.",
    features: ["Multi-surface", "Deep cleaning", "Fresh scent", "Concentrated", "Biodegradable"],
    specifications: {
      "Volume": "1L",
      "Dilution": "Ready to use",
      "Surface Types": "Multiple surfaces",
      "pH Level": "Neutral",
      "Biodegradable": "Yes",
      "Fragrance": "Fresh lemon"
    },
    basePrice: 229,
    variants: [
      {
        color: "Lemon Yellow",
        colorCode: "#EAB308",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
        stock: 35,
        available: true
      },
      {
        color: "Lemon Yellow",
        colorCode: "#EAB308",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
        price: 229,
        stock: 30,
        available: true
      },
      {
        color: "Lemon Yellow",
        colorCode: "#EAB308",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
        price: 919,
        stock: 14,
        available: true
      },
      {
        color: "Fresh Mint",
        colorCode: "#10B981",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
        price: 239,
        stock: 28,
        available: true
      },
      {
        color: "Fresh Mint",
        colorCode: "#10B981",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
        price: 429,
        stock: 24,
        available: true
      },
      {
        color: "Fresh Mint",
        colorCode: "#10B981",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
        price: 1719,
        stock: 10,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710843/Artboard_1_k9zodd.png"
    ],
    relatedProducts: ["2", "4", "6"]
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
    longDescription: "Maintain the highest standards of hygiene with Deopic Toilet Cleaner. This powerful formula eliminates 99.9% of germs while removing tough stains and mineral deposits. The thick liquid clings to surfaces for maximum cleaning power and leaves a fresh, clean scent.",
    features: ["Germ-free", "Stain removal", "Hygienic", "Thick formula", "Disinfectant"],
    specifications: {
      "Volume": "500ml",
      "Germ Kill": "99.9%",
      "Formula": "Thick liquid",
      "Contact Time": "5 minutes",
      "Disinfectant": "Yes",
      "Fragrance": "Fresh pine"
    },
    basePrice: 159,
    variants: [
      {
        color: "Pine Green",
        colorCode: "#059669",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png",
        stock: 45,
        available: true
      },
      {
        color: "Pine Green",
        colorCode: "#059669",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png",
        price: 159,
        stock: 38,
        available: true
      },
      {
        color: "Pine Green",
        colorCode: "#059669",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png",
        price: 639,
        stock: 16,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710835/Artboard_5_rbi6xu.png"
    ],
    relatedProducts: ["5", "11", "9"]
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
    longDescription: "Experience superior dishwashing with Deodishwash, the concentrated formula that cuts through the toughest grease and grime. Gentle on hands yet powerful on dishes, this dishwashing liquid creates rich, long-lasting suds that make cleaning effortless.",
    features: ["Grease cutting", "Concentrated", "Gentle on hands", "Long-lasting suds", "Biodegradable"],
    specifications: {
      "Volume": "500ml",
      "Concentration": "Ultra concentrated",
      "Suds": "Rich & long-lasting",
      "Hand Care": "Moisturizing agents",
      "Biodegradable": "Yes",
      "Fragrance": "Citrus fresh"
    },
    basePrice: 149,
    variants: [
      {
        color: "Citrus Orange",
        colorCode: "#F97316",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
        stock: 60,
        available: true
      },
      {
        color: "Citrus Orange",
        colorCode: "#F97316",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
        price: 149,
        stock: 52,
        available: true
      },
      {
        color: "Citrus Orange",
        colorCode: "#F97316",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
        price: 599,
        stock: 22,
        available: true
      },
      {
        color: "Apple Green",
        colorCode: "#84CC16",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
        price: 159,
        stock: 42,
        available: true
      },
      {
        color: "Apple Green",
        colorCode: "#84CC16",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
        price: 279,
        stock: 36,
        available: true
      },
      {
        color: "Apple Green",
        colorCode: "#84CC16",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
        price: 1119,
        stock: 15,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756710845/Artboard_6_a82eto.png"
    ],
    relatedProducts: ["3", "5", "8"]
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
    longDescription: "Restore and protect your surfaces with Deoshine, the premium polish that brings out natural beauty while providing lasting protection. This advanced formula creates a protective barrier against dust, fingerprints, and everyday wear while enhancing the natural shine of wood, metal, and plastic surfaces.",
    features: ["Natural shine", "Dust protection", "Premium quality", "Anti-fingerprint", "UV protection"],
    specifications: {
      "Volume": "300ml",
      "Surface Types": "Wood, metal, plastic",
      "Protection": "UV & dust resistant",
      "Application": "Spray & buff",
      "Finish": "Natural shine",
      "Duration": "Long-lasting"
    },
    basePrice: 279,
    variants: [
      {
        color: "Golden Amber",
        colorCode: "#D97706",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png",
        stock: 25,
        available: true
      },
      {
        color: "Golden Amber",
        colorCode: "#D97706",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png",
        price: 369,
        stock: 20,
        available: true
      },
      {
        color: "Golden Amber",
        colorCode: "#D97706",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png",
        price: 1479,
        stock: 8,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756713652/Artboard_3_p3dzx1.png"
    ],
    relatedProducts: ["4", "5", "9"]
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
    longDescription: "Experience the power of nature with Deoherb, our premium floor cleaner infused with natural herbal extracts. This eco-friendly formula provides superior cleaning while being gentle on all floor types. The natural ingredients ensure a safe environment for your family while delivering professional-grade results.",
    features: ["Herbal extracts", "Premium quality", "Long-lasting", "Eco-friendly", "Family safe"],
    specifications: {
      "Volume": "1L",
      "Ingredients": "Natural herbal extracts",
      "Floor Types": "All surfaces",
      "Eco-friendly": "100% natural",
      "Family Safe": "Non-toxic",
      "Fragrance": "Natural herbs"
    },
    basePrice: 349,
    variants: [
      {
        color: "Herbal Green",
        colorCode: "#16A34A",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
        stock: 20,
        available: true
      },
      {
        color: "Herbal Green",
        colorCode: "#16A34A",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
        price: 349,
        stock: 18,
        available: true
      },
      {
        color: "Herbal Green",
        colorCode: "#16A34A",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
        price: 1399,
        stock: 7,
        available: true
      },
      {
        color: "Natural Brown",
        colorCode: "#A16207",
        quantity: "500ml",
        quantityValue: 500,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
        price: 359,
        stock: 15,
        available: true
      },
      {
        color: "Natural Brown",
        colorCode: "#A16207",
        quantity: "1L",
        quantityValue: 1000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
        price: 629,
        stock: 13,
        available: true
      },
      {
        color: "Natural Brown",
        colorCode: "#A16207",
        quantity: "5L",
        quantityValue: 5000,
        image: "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
        price: 2519,
        stock: 5,
        available: true
      }
    ],
    images: [
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png",
      "https://res.cloudinary.com/dixayfqq8/image/upload/v1756714391/Artboard_3_ycbwz3.png"
    ],
    relatedProducts: ["2", "6", "8"]
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
    longDescription: "Transform your space instantly with Deofresh Air Freshener. This powerful formula neutralizes unpleasant odors while releasing delightful fragrances that create a welcoming atmosphere. Perfect for homes, offices, cars, and any space that needs a fresh boost.",
    features: ["Instant action", "Odor neutralizer", "Delightful fragrance", "Long-lasting", "Portable"],
    specifications: {
      "Volume": "300ml",
      "Action": "Instant",
      "Coverage": "Up to 150 sq ft",
      "Duration": "6-8 hours",
      "Application": "Aerosol spray",
      "Fragrance": "Multiple options"
    },
    basePrice: 189,
    variants: [
      {
        color: "Rose Pink",
        colorCode: "#EC4899",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deofresh-air-freshener.jpg",
        stock: 55,
        available: true
      },
      {
        color: "Rose Pink",
        colorCode: "#EC4899",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deofresh-air-freshener.jpg",
        price: 189,
        stock: 48,
        available: true
      },
      {
        color: "Rose Pink",
        colorCode: "#EC4899",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deofresh-air-freshener.jpg",
        price: 759,
        stock: 20,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deofresh-air-freshener.jpg",
        price: 199,
        stock: 48,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deofresh-air-freshener.jpg",
        price: 349,
        stock: 42,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deofresh-air-freshener.jpg",
        price: 1399,
        stock: 18,
        available: true
      },
      {
        color: "Vanilla Cream",
        colorCode: "#FDE68A",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deofresh-air-freshener.jpg",
        price: 209,
        stock: 32,
        available: true
      },
      {
        color: "Vanilla Cream",
        colorCode: "#FDE68A",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deofresh-air-freshener.jpg",
        price: 369,
        stock: 28,
        available: true
      },
      {
        color: "Vanilla Cream",
        colorCode: "#FDE68A",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deofresh-air-freshener.jpg",
        price: 1479,
        stock: 12,
        available: true
      }
    ],
    images: [
      "/products/deofresh-air-freshener.jpg",
      "/products/deofresh-air-freshener.jpg"
    ],
    relatedProducts: ["1", "12", "3"]
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
    longDescription: "Keep your bathroom spotless with Deoclean Bathroom Cleaner, specially formulated to tackle the toughest bathroom challenges. This powerful cleaner removes soap scum, mildew, and grime while preventing future buildup. Safe for all bathroom surfaces including tiles, fixtures, and glass.",
    features: ["Soap scum removal", "Anti-mildew", "Deep cleaning", "Multi-surface", "Fresh scent"],
    specifications: {
      "Volume": "750ml",
      "Formula": "Anti-mildew",
      "Surface Types": "All bathroom surfaces",
      "Contact Time": "3-5 minutes",
      "Disinfectant": "Yes",
      "Fragrance": "Fresh ocean"
    },
    basePrice: 219,
    variants: [
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deoclean-bathroom-cleaner.jpg",
        stock: 38,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deoclean-bathroom-cleaner.jpg",
        price: 219,
        stock: 32,
        available: true
      },
      {
        color: "Ocean Blue",
        colorCode: "#0EA5E9",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deoclean-bathroom-cleaner.jpg",
        price: 879,
        stock: 14,
        available: true
      },
      {
        color: "Fresh Mint",
        colorCode: "#10B981",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deoclean-bathroom-cleaner.jpg",
        price: 229,
        stock: 25,
        available: true
      },
      {
        color: "Fresh Mint",
        colorCode: "#10B981",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deoclean-bathroom-cleaner.jpg",
        price: 399,
        stock: 22,
        available: true
      },
      {
        color: "Fresh Mint",
        colorCode: "#10B981",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deoclean-bathroom-cleaner.jpg",
        price: 1599,
        stock: 9,
        available: true
      }
    ],
    images: [
      "/products/deoclean-bathroom-cleaner.jpg",
      "/products/deoclean-bathroom-cleaner.jpg"
    ],
    relatedProducts: ["4", "6", "5"]
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
    longDescription: "Enhance your driving experience with Deopic Car Freshener, designed specifically for automotive use. This long-lasting formula withstands temperature variations while providing consistent fragrance that makes every journey pleasant. Easy to use and perfectly sized for any vehicle.",
    features: ["Long-lasting", "Car specific", "Pleasant fragrance", "Temperature resistant", "Easy application"],
    specifications: {
      "Volume": "150ml",
      "Duration": "4-6 weeks",
      "Temperature Range": "-10°C to 60°C",
      "Application": "Hanging/clip-on",
      "Vehicle Type": "All vehicles",
      "Fragrance": "Automotive blend"
    },
    basePrice: 129,
    variants: [
      {
        color: "Cool Black",
        colorCode: "#374151",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deopic-car-freshener.jpg",
        stock: 70,
        available: true
      },
      {
        color: "Cool Black",
        colorCode: "#374151",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deopic-car-freshener.jpg",
        price: 129,
        stock: 58,
        available: true
      },
      {
        color: "Cool Black",
        colorCode: "#374151",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deopic-car-freshener.jpg",
        price: 519,
        stock: 24,
        available: true
      },
      {
        color: "Sport Red",
        colorCode: "#DC2626",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deopic-car-freshener.jpg",
        price: 139,
        stock: 45,
        available: true
      },
      {
        color: "Sport Red",
        colorCode: "#DC2626",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deopic-car-freshener.jpg",
        price: 239,
        stock: 38,
        available: true
      },
      {
        color: "Sport Red",
        colorCode: "#DC2626",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deopic-car-freshener.jpg",
        price: 959,
        stock: 16,
        available: true
      },
      {
        color: "Classic Blue",
        colorCode: "#2563EB",
        quantity: "500ml",
        quantityValue: 500,
        image: "/products/deopic-car-freshener.jpg",
        price: 149,
        stock: 38,
        available: true
      },
      {
        color: "Classic Blue",
        colorCode: "#2563EB",
        quantity: "1L",
        quantityValue: 1000,
        image: "/products/deopic-car-freshener.jpg",
        price: 259,
        stock: 32,
        available: true
      },
      {
        color: "Classic Blue",
        colorCode: "#2563EB",
        quantity: "5L",
        quantityValue: 5000,
        image: "/products/deopic-car-freshener.jpg",
        price: 1039,
        stock: 14,
        available: true
      }
    ],
    images: [
      "/products/deopic-car-freshener.jpg",
      "/products/deopic-car-freshener.jpg"
    ],
    relatedProducts: ["1", "10", "8"]
  }
];

// Convert enhanced products to basic product format for listings
export const allProducts = enhancedProducts.map(product => ({
  id: product.id,
  name: product.name,
  brand: product.brand,
  rating: product.rating,
  reviews: product.reviews,
  image: product.image,
  badge: product.badge,
  category: product.category,
  description: product.description,
  features: product.features
}));