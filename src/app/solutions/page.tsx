import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Hotel, 
  ShoppingBag, 
  Car, 
  Plane, 
  Users, 
  Briefcase, 
  Hospital,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Shield,
  Globe,
  Calendar,
  Award
} from "lucide-react";

const solutions = [
  {
    id: 1,
    name: "Hotels & Hospitality",
    description: "Create memorable guest experiences with signature scent branding that enhances ambiance and reinforces your hotel's identity.",
    icon: Hotel,
    features: [
      "Lobby & common area scenting",
      "Room fragrance systems", 
      "Spa & wellness scents",
      "Custom signature scents"
    ],
    benefits: [
      "Enhanced guest satisfaction",
      "Stronger brand recognition",
      "Increased repeat bookings",
      "Premium experience positioning"
    ],
    image: "/solutions/hospitality.jpg",
    testimonial: {
      text: "Our signature scent has become part of our brand identity. Guests often mention the wonderful fragrance when they return.",
      author: "Hotel Manager, 5-Star Resort"
    }
  },
  {
    id: 2,
    name: "Retail Stores",
    description: "Boost sales and customer dwell time with strategic scent marketing that creates emotional connections with your brand.",
    icon: ShoppingBag,
    features: [
      "Store atmosphere enhancement",
      "Product-specific scenting",
      "Seasonal fragrance programs",
      "Multi-location consistency"
    ],
    benefits: [
      "Increased sales conversion",
      "Longer customer visits",
      "Enhanced brand perception",
      "Improved customer loyalty"
    ],
    image: "/solutions/retail.jpg",
    testimonial: {
      text: "Since implementing scent marketing, we've seen a 15% increase in time spent in store and improved customer feedback.",
      author: "Retail Chain Director"
    }
  },
  {
    id: 3,
    name: "Corporate Offices",
    description: "Improve workplace wellness and productivity with carefully curated fragrances that promote focus and well-being.",
    icon: Building2,
    features: [
      "Reception area welcoming scents",
      "Meeting room freshening",
      "Workspace productivity scents",
      "Wellness-focused fragrances"
    ],
    benefits: [
      "Enhanced employee wellness",
      "Improved visitor impression",
      "Increased productivity",
      "Better air quality perception"
    ],
    image: "/solutions/corporate.jpg",
    testimonial: {
      text: "Our employees have noticed the difference. The workplace feels more welcoming and professional.",
      author: "Corporate Facilities Manager"
    }
  },
  {
    id: 4,
    name: "Automotive",
    description: "Enhance the car buying experience with premium fragrances that complement your vehicles and showroom environment.",
    icon: Car,
    features: [
      "Showroom ambient scenting",
      "Vehicle interior freshening",
      "Service area odor control",
      "Brand-specific fragrances"
    ],
    benefits: [
      "Premium brand positioning",
      "Enhanced customer experience",
      "Increased sales potential",
      "Professional atmosphere"
    ],
    image: "/solutions/automotive.jpg",
    testimonial: {
      text: "The premium fragrance in our showroom perfectly complements our luxury vehicle lineup.",
      author: "Automotive Dealer Principal"
    }
  },
  {
    id: 5,
    name: "Airlines & Travel",
    description: "Create consistent brand experiences across all touchpoints with travel-friendly fragrances and cabin scenting solutions.",
    icon: Plane,
    features: [
      "Airport lounge scenting",
      "Cabin air freshening",
      "Ground facility fragrances",
      "Travel retail scenting"
    ],
    benefits: [
      "Consistent brand experience",
      "Passenger comfort enhancement",
      "Premium service perception",
      "Stress reduction benefits"
    ],
    image: "/solutions/airlines.jpg",
    testimonial: {
      text: "Our passengers appreciate the calming fragrance that helps them relax during their journey.",
      author: "Airline Customer Experience Manager"
    }
  },
  {
    id: 6,
    name: "Events & Venues",
    description: "Make special occasions unforgettable with custom scenting solutions that enhance the atmosphere of any event.",
    icon: Users,
    features: [
      "Wedding venue scenting",
      "Corporate event fragrances",
      "Conference center solutions",
      "Banquet hall enhancement"
    ],
    benefits: [
      "Memorable experiences",
      "Enhanced ambiance",
      "Positive emotional impact",
      "Venue differentiation"
    ],
    image: "/solutions/events.jpg",
    testimonial: {
      text: "The custom fragrance made our wedding venue feel magical. Our clients always comment on it.",
      author: "Event Venue Owner"
    }
  },
  {
    id: 7,
    name: "Healthcare",
    description: "Improve patient comfort and staff well-being with gentle, therapeutic fragrances designed for medical environments.",
    icon: Hospital,
    features: [
      "Patient waiting area comfort",
      "Odor neutralization",
      "Therapeutic aromatherapy",
      "Medical-grade safety"
    ],
    benefits: [
      "Reduced patient anxiety",
      "Improved healing environment",
      "Enhanced staff comfort",
      "Professional atmosphere"
    ],
    image: "/solutions/healthcare.jpg",
    testimonial: {
      text: "The gentle fragrances help create a more calming environment for our patients and staff.",
      author: "Healthcare Facility Administrator"
    }
  },
  {
    id: 8,
    name: "Professional Services",
    description: "Create signature brand experiences for salons, spas, and professional services with luxury fragrance solutions.",
    icon: Briefcase,
    features: [
      "Salon & spa ambiance",
      "Client treatment areas",
      "Reception area welcoming",
      "Brand signature scents"
    ],
    benefits: [
      "Luxury service positioning",
      "Enhanced relaxation",
      "Brand differentiation",
      "Client retention improvement"
    ],
    image: "/solutions/professional.jpg",
    testimonial: {
      text: "Our signature scent has become synonymous with relaxation and luxury for our spa clients.",
      author: "Spa Owner"
    }
  }
];

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We analyze your space, brand, and objectives to understand your unique scenting needs.",
    icon: Lightbulb
  },
  {
    step: 2,
    title: "Custom Design",
    description: "Our experts create a tailored fragrance solution that aligns with your brand identity.",
    icon: Star
  },
  {
    step: 3,
    title: "Implementation",
    description: "Professional installation and setup ensuring optimal fragrance distribution.",
    icon: CheckCircle
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "Continuous monitoring, maintenance, and seasonal adjustments for consistent results.",
    icon: Shield
  }
];

export default function SolutionsPage() {
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
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Industry-Specific Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Tailored Fragrance Solutions
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                For Every Industry
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              From hospitality to healthcare, we create custom scent experiences that enhance your 
              brand identity, improve customer satisfaction, and drive business results across diverse industries.
            </p>

            {/* Hero Stats - Mobile optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">8+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Industries</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Clients</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Custom</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Solutions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                Discover how our custom fragrance solutions can transform your business 
                and create memorable experiences for your customers.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="space-y-12 sm:space-y-16">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={solution.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 lg:gap-16 items-center`}>
                    
                    {/* Solution Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                          {solution.name}
                        </h3>
                      </div>
                      
                      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-600">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-600">
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
                        <p className="text-sm sm:text-base text-gray-600 italic mb-3">&ldquo;{solution.testimonial.text}&rdquo;</p>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">— {solution.testimonial.author}</p>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-primary/90 transition-colors touch-manipulation text-sm sm:text-base"
                      >
                        Get Custom Solution
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>

                    {/* Solution Visual */}
                    <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full blur-xl decorative-blur-light"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/15 rounded-full blur-lg decorative-blur-light"></div>
                        
                        {/* Icon representation */}
                        <div className="relative z-10 text-center px-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                          </div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{solution.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 max-w-48 mx-auto">
                            Custom fragrance solutions tailored for your industry
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative scroll-container">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                From initial consultation to ongoing support, we ensure your fragrance solution 
                delivers consistent, exceptional results.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="text-center relative">
                    {/* Connection Line (hidden on mobile and tablet) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4 -translate-y-0.5"></div>
                    )}
                    
                    {/* Step Number */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg relative z-10">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl decorative-blur-light"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/15 rounded-full blur-xl decorative-blur-light"></div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform 
              <span className="block">Your Business?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Let our experts create a custom fragrance solution that enhances your brand, 
              improves customer experience, and drives business results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation w-full sm:w-auto optimized-button-primary"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a
                href="/catalog"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 touch-manipulation w-full sm:w-auto optimized-button-secondary"
              >
                Download Catalog
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
