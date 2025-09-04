"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
    products: false,
    company: false,
    support: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-primary text-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-8">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4">ZEAL MARKETING</h3>
            <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Creating unforgettable scent experiences for businesses worldwide with premium fragrance solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/80 uppercase tracking-wide mb-1 font-medium">Address</div>
                  <span className="text-white">11 Shiv Udhyog Nagar Palda Indore 452001</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/80 uppercase tracking-wide mb-1 font-medium">Phone</div>
                  <a href="tel:+919131375947" className="text-white hover:text-white/90 transition-colors font-medium">+91 9131375947</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/80 uppercase tracking-wide mb-1 font-medium">Email</div>
                  <a href="mailto:zealdeofume@gmail.com" className="text-white hover:text-white/90 transition-colors font-medium">zealdeofume@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="sm:hidden mt-6">
            <button 
              onClick={() => toggleSection('products')}
              className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20 mb-3 hover:bg-white/15 transition-all duration-200 shadow-sm"
            >
              <span className="font-medium text-white">Products</span>
              <div className="transition-transform duration-300 ease-in-out">
                {openSections.products ? (
                  <ChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSections.products ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <ul className="space-y-1 text-sm mb-4">
                <li><a href="/products/deofresh" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">DeOFRESH</a></li>
                <li><a href="/products/deofume" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">DeOFume</a></li>
                <li><a href="/products/cleanpro" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">CleanPro</a></li>
                <li><a href="/products/hygienemax" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">HygieneMax</a></li>
                <li><a href="/products/naturalcare" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">NaturalCare</a></li>
                <li><a href="/products/industrialforce" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">IndustrialForce</a></li>
              </ul>
            </div>
          </div>
          {/* Products - Desktop */}
          <div className="hidden sm:block">
            <h4 className="font-semibold mb-4 text-base">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products/deofresh" className="text-white/90 hover:text-white transition-colors">DeOFRESH</a></li>
              <li><a href="/products/deofume" className="text-white/90 hover:text-white transition-colors">DeOFume</a></li>
              <li><a href="/products/cleanpro" className="text-white/90 hover:text-white transition-colors">CleanPro</a></li>
              <li><a href="/products/hygienemax" className="text-white/90 hover:text-white transition-colors">HygieneMax</a></li>
              <li><a href="/products/naturalcare" className="text-white/90 hover:text-white transition-colors">NaturalCare</a></li>
              <li><a href="/products/industrialforce" className="text-white/90 hover:text-white transition-colors">IndustrialForce</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:hidden">
            <button 
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20 mb-3 hover:bg-white/15 transition-all duration-200 shadow-sm"
            >
              <span className="font-medium text-white">Company</span>
              <div className="transition-transform duration-300 ease-in-out">
                {openSections.company ? (
                  <ChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSections.company ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <ul className="space-y-1 text-sm mb-4">
                <li><a href="/about" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">About Us</a></li>
                <li><a href="/solutions" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Solutions</a></li>
                <li><a href="/contact" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Contact</a></li>
                <li><a href="/catalog" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Download Catalog</a></li>
              </ul>
            </div>
          </div>
          {/* Company - Desktop */}
          <div className="hidden sm:block">
            <h4 className="font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-white/90 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/solutions" className="text-white/90 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/catalog" className="text-white/90 hover:text-white transition-colors">Download Catalog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="sm:hidden">
            <button 
              onClick={() => toggleSection('support')}
              className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20 mb-3 hover:bg-white/15 transition-all duration-200 shadow-sm"
            >
              <span className="font-medium text-white">Support</span>
              <div className="transition-transform duration-300 ease-in-out">
                {openSections.support ? (
                  <ChevronUp className="w-5 h-5 text-white" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSections.support ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <ul className="space-y-1 text-sm mb-4">
                <li><a href="/help" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Help Center</a></li>
                <li><a href="/consultation" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Free Consultation</a></li>
                <li><a href="/installation" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Installation Guide</a></li>
                <li><a href="/maintenance" className="text-white/90 hover:text-white transition-colors block py-2 px-3 rounded hover:bg-white/5">Maintenance</a></li>
              </ul>
            </div>
            
            {/* Social Media - Mobile */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-sm text-white">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* Support - Desktop */}
          <div className="hidden sm:block">
            <h4 className="font-semibold mb-4 text-base">Support</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="/help" className="text-white/90 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/consultation" className="text-white/90 hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="/installation" className="text-white/90 hover:text-white transition-colors">Installation Guide</a></li>
              <li><a href="/maintenance" className="text-white/90 hover:text-white transition-colors">Maintenance</a></li>
            </ul>
            
            {/* Social Media - Desktop */}
            <div>
              <h5 className="font-medium mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-white/90 text-sm text-center sm:text-left">
            © 2024 ZEAL MARKETING. All rights reserved.
          </div>
          
          <div className="flex flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-white/90 text-center">
            <a href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
            <span className="text-white/50">•</span>
            <a href="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms of Service</a>
            <span className="text-white/50">•</span>
            <a href="/cookies" className="hover:text-white transition-colors whitespace-nowrap">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
