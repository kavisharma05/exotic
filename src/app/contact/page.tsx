"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  Star,
  Users,
  Award
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        subject: "",
        message: "",
        projectType: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9131375947",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "zealdeofume@gmail.com",
      description: "Send us your requirements"
    },
    {
      icon: MapPin,
      title: "Address", 
      value: "11 Shiv Udhyog Nagar Palda Indore 452001",
      description: "Visit our office for consultation"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      description: "Sunday: Closed"
    }
  ];

  const industries = [
    "Hotels & Hospitality",
    "Retail Stores", 
    "Corporate Offices",
    "Automotive",
    "Airlines & Travel",
    "Events & Venues",
    "Healthcare",
    "Professional Services",
    "Other"
  ];

  const projectTypes = [
    "New Installation",
    "Existing System Upgrade",
    "Consultation Only",
    "Custom Fragrance Development",
    "Maintenance Service",
    "Bulk Product Order"
  ];

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
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Get In Touch</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Let&apos;s Create Something
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Ready to transform your space with premium fragrances? Get in touch with our experts 
              for a free consultation and discover how we can elevate your brand experience.
            </p>

            {/* Hero Stats - Mobile optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">4.8+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Rating</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">Free</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Consultation</div>
              </div>
              <div className="text-center bg-white/50 rounded-xl px-3 py-4 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">24h</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Response</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Send us a Message
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for your inquiry. We&apos;ll be in touch soon.</p>
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
                            placeholder="+91 9131375947"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Industry and Project Type */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
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
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Tell us about your project requirements, space details, and any specific needs..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 touch-manipulation"
                    >
                      Send Message
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h3>
                            <p className="text-primary font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                            <p className="text-gray-600 text-xs sm:text-sm">{info.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Location</h3>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full blur-lg decorative-blur-light"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary/15 rounded-full blur-md decorative-blur-light"></div>
                    
                    {/* Map placeholder */}
                    <div className="text-center">
                      <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-2" />
                      <p className="text-gray-600 font-medium text-sm sm:text-base">Interactive Map</p>
                      <p className="text-gray-500 text-xs sm:text-sm">Indore, India</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Free consultation and site analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Custom fragrance development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Professional installation & support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">ISO certified quality standards</span>
                    </div>
                  </div>
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
