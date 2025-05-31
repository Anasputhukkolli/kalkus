"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import Splash from "./splashscreen";
import ServicesSection from "./card";
import Brand from "./brand";
import Footer from "./footer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "services", "brand", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "/about", id: "about" },
    { name: "Portfolio", href: "/potfolio", id: "portfolio" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  const scrollToHash = async (href: string, id: string) => {
    setIsNavigating(true);
    setActiveSection(id);
    
    // Add a slight delay for the animation effect
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    
    // Close menu with animation
    setTimeout(() => {
      setIsOpen(false);
      setIsNavigating(false);
    }, 100);
  };

  const handleExternalNavigation = async (href: string) => {
    setIsNavigating(true);
    
    // Add slide-out animation before navigation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setIsOpen(false);
    setIsNavigating(false);
    
    // Navigate after animation
    window.location.href = href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl shadow-xl py-6"
          : "bg-gradient-to-r from-black/10 via-transparent to-black/10 py-8 sm:py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Brand Logo/Button */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-extrabold tracking-wide text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all duration-300 transform ${
              isOpen ? 'rotate-3 scale-95' : 'hover:scale-105'
            }`}
          >
            KALKUS
          </button>
        </div>

        {/* Navigation Indicator */}
        {isScrolled && (
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
            <div className="flex space-x-2">
              {navItems.filter(item => item.href.startsWith('#')).map((item) => (
                <div
                  key={item.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Overlay Nav */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div className="flex justify-end min-h-screen">
            <div
              className={`relative bg-black/90 backdrop-blur-3xl w-[50vw] sm:w-[70vw] md:w-[28rem] min-h-screen border-l border-white/20 shadow-2xl p-6 sm:p-8 md:p-12 transition-all duration-700 ease-out flex items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              } ${isNavigating ? 'animate-pulse' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Background Gradients */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl animate-pulse" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </div>

              {/* Navigation Header */}
              <div className="absolute top-8 left-8 right-8">
                <h2 className="text-2xl font-bold text-white/80 mb-2">Navigation</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </div>

              {/* Nav Items */}
              <div className="relative z-10 w-full space-y-3 sm:space-y-4 md:space-y-5 mt-16">
                {navItems.map((item, index) => {
                  const isInternalLink = item.href.startsWith("#");
                  const isActive = activeSection === item.id;

                  return (
                    <div
                      key={index}
                      className={`transform transition-all duration-700 ease-out ${
                        isOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-12 opacity-0"
                      } ${isNavigating ? 'scale-95 opacity-70' : ''}`}
                      style={{
                        transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                      }}
                    >
                      {isInternalLink ? (
                        <button
                          onClick={() => scrollToHash(item.href, item.id)}
                          disabled={isNavigating}
                          className={`group flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                            isActive
                              ? 'text-black bg-white/90 shadow-lg scale-105'
                              : 'text-white hover:text-black hover:bg-white/90'
                          } ${isNavigating ? 'pointer-events-none' : 'hover:translate-x-2'}`}
                        >
                          {/* Sliding Background */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-transform duration-500 rounded-xl sm:rounded-2xl ${
                            isActive 
                              ? 'translate-x-0' 
                              : 'translate-x-[-100%] group-hover:translate-x-0'
                          }`} />
                          
                          {/* Content */}
                          <span className="relative font-light tracking-wider flex-1 text-left">
                            {item.name}
                          </span>
                          
                          {/* Icons */}
                          <div className="relative flex items-center space-x-2">
                            {isActive && (
                              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                            )}
                            <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 ${
                              isActive || 'group-hover:translate-x-1 group-hover:text-yellow-300'
                            }`} />
                          </div>
                          
                          {/* Sparkle Effect */}
                          <div className={`absolute top-2 sm:top-3 right-4 sm:right-6 transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}>
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 animate-spin" />
                          </div>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleExternalNavigation(item.href)}
                          disabled={isNavigating}
                          className={`group flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-black hover:bg-white/90 transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                            isNavigating ? 'pointer-events-none' : 'hover:translate-x-2'
                          }`}
                        >
                          {/* Sliding Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-xl sm:rounded-2xl" />
                          
                          {/* Content */}
                          <span className="relative font-light tracking-wider flex-1 text-left">
                            {item.name}
                          </span>
                          
                          {/* External Link Icon */}
                          <div className="relative">
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-300 rotate-[-45deg]" />
                          </div>
                          
                          {/* Sparkle Effect */}
                          <div className="absolute top-2 sm:top-3 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 animate-spin" />
                          </div>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Loading State */}
              {isNavigating && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <p className="text-white/80 text-sm">Navigating...</p>
                  </div>
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section id="home">
        <Splash />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="brand">
        <Brand />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}