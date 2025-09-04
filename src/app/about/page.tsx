import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Shield, 
  Lightbulb, 
  Globe, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Calendar,
  Building,
  Leaf,
  Star
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every fragrance is crafted with meticulous attention to detail and genuine passion for creating memorable experiences."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensure every product meets the highest international standards for safety and quality."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously developing new formulations and eco-friendly solutions that lead the industry forward."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with culturally-aware fragrance solutions that resonate across different markets."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Calendar },
    { number: "1000+", label: "Products Delivered", icon: TrendingUp },
    { number: "50+", label: "Industries Served", icon: Building }
  ];



  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System", icon: Award },
    { name: "Eco-Friendly", description: "Water-based formulations", icon: Leaf },
    { name: "Quality Tested", description: "Rigorous testing protocols", icon: CheckCircle },
    { name: "Customer Rated", description: "4.8+ average rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white gpu-accelerated">
      <Navigation />
      
      {/* Unique Hero Section - Story-focused */}
      <section className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden flex items-center">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl decorative-blur-light"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/15 rounded-full blur-xl decorative-blur-light"></div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-primary/20 shadow-lg badge-bg">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Our Story Since 2009</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Crafting Extraordinary
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Fragrance Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              For over 15 years, we&apos;ve been passionate about creating premium fragrances that transform 
              spaces and elevate experiences. From humble beginnings to serving 500+ clients worldwide, 
              our journey is one of dedication, innovation, and unwavering commitment to excellence.
            </p>

            {/* Hero Stats - Mobile optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              
              {/* Content */}
              <div className="lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    <strong className="text-gray-900">Our Mission:</strong> To create exceptional fragrance 
                    solutions that enhance environments, elevate brand experiences, and bring joy to everyday moments 
                    through the power of scent.
                  </p>
                  <p className="text-base sm:text-lg">
                    <strong className="text-gray-900">Our Vision:</strong> To become the world&apos;s most trusted 
                    fragrance partner, known for innovation, sustainability, and transformative scent experiences 
                    that connect people with their spaces.
                  </p>
                  <p className="text-sm sm:text-base">
                    Founded in 2009 with a simple belief that fragrance has the power to transform any space, 
                    Zeal Marketing has grown from a passionate startup into a leading fragrance manufacturer. 
                    We specialize in creating custom scent solutions for diverse industries, from luxury hotels 
                    and retail spaces to corporate environments and healthcare facilities.
                  </p>
                  <p className="text-sm sm:text-base">
                    Our journey began with a commitment to quality, innovation, and customer satisfaction. 
                    Today, we continue to push boundaries in fragrance development while maintaining our 
                    core values of excellence, integrity, and environmental responsibility.
                  </p>
                </div>
              </div>

              {/* Visual Element */}
              <div className="lg:order-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-primary/20 rounded-2xl">
                      <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      &ldquo;Quality is not an act, it is a habit&rdquo;
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      This philosophy guides everything we do, from sourcing the finest ingredients 
                      to delivering exceptional customer service.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative scroll-container">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                These principles guide our decisions, shape our culture, and drive our commitment 
                to excellence in everything we do.
              </p>
            </div>

            {/* Mobile: Modern 2x2 Grid, Tablet & Desktop: Original layout */}
            {/* Mobile Modern 2x2 Grid Layout */}
            <div className="sm:hidden">
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                          <IconComponent className="w-6 h-6 text-primary transition-colors duration-300" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed font-medium">
                          {value.description.split(' ').slice(0, 4).join(' ')}...
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tablet & Desktop Grid Layout */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-12 md:h-12 mx-auto mb-6 sm:mb-5 md:mb-6 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                        <IconComponent className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                      <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>



      {/* Certifications Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary/5 relative">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quality & Standards
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                Our commitment to excellence is validated through rigorous certifications 
                and continuous quality improvement processes.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-primary/10 rounded-xl">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {cert.description}
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
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl decorative-blur-light"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/15 rounded-full blur-xl decorative-blur-light"></div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Experience the 
              <span className="block">Zeal Difference?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Join hundreds of satisfied clients who trust us to create exceptional fragrance experiences. 
              Let&apos;s discuss how we can transform your space with our premium solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation w-full sm:w-auto optimized-button-primary"
              >
                Start Your Project
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a
                href="/products"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 touch-manipulation w-full sm:w-auto optimized-button-secondary"
              >
                View Our Products
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
