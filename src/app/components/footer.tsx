import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const footerElement = document.getElementById('footer-section');
    if (footerElement) {
      observer.observe(footerElement);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setLetterIndex(prev => {
          if (prev < 6) return prev + 1;
          clearInterval(timer);
          return prev;
        });
      }, 150);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);
  
  const brandLetters = "KALKUS".split("");
  return (
    <footer id="footer-section" className="bg-black text-white py-16 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          {/* Left side - Animated Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight flex">
              {brandLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-700 ease-out ${
                    index <= letterIndex && isVisible
                      ? 'transform translate-y-0 opacity-100 text-white'
                      : 'transform translate-y-12 opacity-0 text-transparent'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    textShadow: index <= letterIndex && isVisible ? '0 0 20px rgba(147, 51, 234, 0.5)' : 'none'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          
          {/* Right side - Animated Navigation */}
          <div className={`flex flex-col sm:flex-row gap-8 sm:gap-16 transition-all duration-1000 ease-out ${
            isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-16 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            {/* Services Column */}
            <div className="space-y-4 group">
              <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase tracking-wide relative">
                Services
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-500 group-hover:w-full"></div>
              </h3>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'].map((service, index) => (
                  <li key={service} className={`transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: `${1000 + index * 100}ms` }}>
                    <a href="#" className="text-white hover:text-purple-400 transition-all duration-300 text-lg font-medium relative group/link">
                      <span className="relative z-10">{service}</span>
                      <div className="absolute inset-0 bg-purple-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100 opacity-10 rounded"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Column */}
            <div className="space-y-4 relative group">
              {/* Animated Purple accent line */}
              <div className={`absolute left-0 top-0 w-1 bg-gradient-to-b from-purple-600 to-purple-400 hidden sm:block transition-all duration-1000 ${
                isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`} style={{ transitionDelay: '1200ms' }}></div>
              <div className="sm:pl-8">
                <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase tracking-wide relative">
                  Contact
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-500 group-hover:w-full"></div>
                </h3>
                <ul className="space-y-3">
                  {[
                    { text: 'hello@kalkus.com', href: 'mailto:hello@kalkus.com' },
                    { text: '+1 (234) 567-890', href: 'tel:+1234567890' },
                    { text: 'New York, NY', href: '#' }
                  ].map((contact, index) => (
                    <li key={contact.text} className={`transform transition-all duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`} style={{ transitionDelay: `${1400 + index * 100}ms` }}>
                      <a href={contact.href} className="text-white hover:text-purple-400 transition-all duration-300 text-lg font-medium relative group/link">
                        <span className="relative z-10">{contact.text}</span>
                        <div className="absolute inset-0 bg-purple-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100 opacity-10 rounded"></div>
                      </a>
                    </li>
                  ))}
                  
                  {/* Social Media Icons */}
                  <li className={`pt-4 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '1700ms' }}>
                    <div className="flex gap-4">
                      <a href="#" className="group/social p-2 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:bg-purple-600 hover:bg-opacity-20">
                        <Instagram className="w-5 h-5 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                      <a href="#" className="group/social p-2 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:bg-purple-600 hover:bg-opacity-20">
                        <Linkedin className="w-5 h-5 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                      <a href="#" className="group/social p-2 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:bg-purple-600 hover:bg-opacity-20">
                        <Twitter className="w-5 h-5 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Bottom section */}
        <div className={`border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-1000 ease-out ${
          isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '2000ms' }}>
          <p className="text-gray-400 text-sm relative">
            © 2025 KALKUS. All rights reserved.
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-purple-600 transition-all duration-1000" style={{ 
              width: isVisible ? '100%' : '0%',
              transitionDelay: '2200ms'
            }}></div>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group/footer-link">
              Privacy Policy
              <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-600 transition-all duration-300 group-hover/footer-link:w-full"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group/footer-link">
              Terms of Service
              <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-600 transition-all duration-300 group-hover/footer-link:w-full"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;