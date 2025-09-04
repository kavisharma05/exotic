"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  // Body scroll lock and accessibility (ESC to close)
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent both vertical and horizontal scrolling
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;
      
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
      document.body.classList.add("menu-open-blur");
      
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener("keydown", onKeyDown);

      const raf = requestAnimationFrame(() => setAnimateDrawer(true));
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
        document.documentElement.style.overflow = "";
        document.body.classList.remove("menu-open-blur");
        document.removeEventListener("keydown", onKeyDown);
        cancelAnimationFrame(raf);
        setAnimateDrawer(false);
      };
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      document.body.classList.remove("menu-open-blur");
      setAnimateDrawer(false);
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 gpu-accelerated">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-lg sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors touch-manipulation"
            >
              ZEAL MARKETING
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 px-4 py-3 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/catalog"
              className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Download Catalog
            </Link>
            <Link
              href="/contact"
              className="border border-primary text-primary px-8 py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-drawer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuOpen(prev => !prev);
              }}
              className="relative z-50 text-gray-700 p-3 hover:text-primary transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

          {/* Mobile Navigation (overlay + slide-in drawer via portal) */}
          {isMenuOpen && typeof document !== 'undefined' && createPortal(
            <div className="md:hidden fixed inset-0 z-[60]" data-portal="mobile-menu">
              {/* Backdrop with blur */}
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                aria-hidden="true"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
              />

              {/* Drawer */}
              <div
                id="mobile-menu-drawer"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                className={`fixed right-0 top-0 h-full w-[88%] max-w-sm bg-white border-l border-gray-200 shadow-2xl gpu-accelerated transform transition-transform duration-300 ease-out overflow-hidden ${animateDrawer ? "translate-x-0" : "translate-x-full"}`}
                style={{ maxWidth: "min(22rem, 88vw)" }}
              >
                {/* Drawer header */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-gray-200">
                  <Link 
                    href="/" 
                    id="mobile-menu-title" 
                    className="text-base font-semibold tracking-tight text-primary hover:text-primary/80 transition-colors touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ZEAL MARKETING
                  </Link>
                  <button
                    aria-label="Close menu"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-50 touch-manipulation"
                  >
                    <X className="h-5 w-5 text-gray-700" />
                  </button>
                </div>

                {/* Drawer content */}
                <div className="h-full flex flex-col overscroll-contain">
                  <nav className="flex-1 overflow-y-auto scroll-container scrollbar-hide px-1">
                    <ul className="py-2">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="mx-3 my-1 block rounded-xl px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors touch-manipulation"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* CTA buttons pinned at bottom */}
                  <div className="border-t border-gray-200 p-4 space-y-3 bg-white">
                    <Link
                      href="/catalog"
                      className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Download Catalog
                    </Link>
                    <Link
                      href="/contact"
                      className="block w-full text-center border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
    </nav>
  );
}
