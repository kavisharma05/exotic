"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Download, 
  FileText, 
  CheckCircle, 
  Star,
  Users,
  Award,
  Eye,
  Mail,
  Phone,
  Building,
  User
} from "lucide-react";
import { useState } from "react";

export default function CatalogPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    jobTitle: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and catalog download
    console.log("Catalog request submitted:", formData);
    setIsSubmitted(true);
    
    // Simulate download
    setTimeout(() => {
      // Here you would trigger the actual download
      console.log("Downloading catalog...");
    }, 1000);
  };

  const catalogFeatures = [
    {
      icon: FileText,
      title: "Complete Product Range",
      description: "Detailed information on all our fragrance collections and cleaning solutions"
    },
    {
      icon: Award,
      title: "Technical Specifications",
      description: "Comprehensive specs, ingredients, and usage guidelines for each product"
    },
    {
      icon: Star,
      title: "Application Examples",
      description: "Real-world use cases and success stories from various industries"
    },
    {
      icon: Users,
      title: "Industry Solutions",
      description: "Tailored recommendations for different business sectors and environments"
    }
  ];

  const benefits = [
    "High-resolution product images",
    "Detailed product descriptions",
    "Technical specifications",
    "Pricing information",
    "Application guidelines",
    "Industry case studies",
    "Contact information",
    "Latest product updates"
  ];

  const industries = [
    "Hotels & Hospitality",
    "Retail & Shopping Centers",
    "Corporate Offices",
    "Automotive",
    "Airlines & Travel",
    "Events & Venues",
    "Healthcare",
    "Professional Services",
    "Education",
    "Real Estate",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/15 rounded-full blur-xl"></div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 py-24 sm:py-28">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20 shadow-lg">
              <FileText className="w-4 h-4" />
              Product Catalog 2024
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Download Our Complete
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Product Catalog
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get instant access to our comprehensive product catalog featuring our complete range 
              of premium fragrances, detailed specifications, and industry applications.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-600 font-medium">50+ Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-600 font-medium">12+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-600 font-medium">8+ Industries</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Download Form and Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Download Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Download Catalog
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to receive instant access to our complete product catalog.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Download className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Catalog Downloaded!</h3>
                    <p className="text-gray-600 mb-6">Thank you! Your catalog download should start automatically.</p>
                    <a
                      href="/catalog/zeal-marketing-catalog-2024.pdf"
                      download
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      Download Again
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Industry and Job Title */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Your job title"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Download Catalog Now
                      <Download className="w-5 h-5" />
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center">
                      By downloading, you agree to receive occasional updates about our products. 
                      We respect your privacy and won&apos;t spam you.
                    </p>
                  </form>
                )}
              </div>

              {/* Catalog Preview */}
              <div className="space-y-8">
                
                {/* Preview Image */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center relative overflow-hidden mb-6">
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/15 rounded-full blur-lg"></div>
                    
                    {/* Catalog preview */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-40 mx-auto mb-4 bg-white rounded-lg shadow-lg border-2 border-primary/10 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-xs font-bold text-gray-900">ZEAL</div>
                          <div className="text-xs text-gray-600">CATALOG</div>
                          <div className="text-xs text-primary">2024</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Catalog 2024</h3>
                      <p className="text-sm text-gray-600">50+ pages of premium products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>PDF Format</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>15.2 MB</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What&apos;s Inside</h3>
                  <div className="space-y-4">
                    {catalogFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('/floral.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Know
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive catalog provides detailed information to help you make 
                informed decisions about your fragrance needs.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6">
                Our experts are ready to help you find the perfect fragrance solution for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Contact Our Experts
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
