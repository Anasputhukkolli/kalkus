"use client";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./footer";

const ContactSection = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-600/10 rounded-full blur-lg animate-pulse"></div>
      </div>

      {/* Top Brand */}
      <div className="text-right pt-8 pr-8 relative z-10">
        <Link
          href="/"
          className="hover:opacity-80 transition-all duration-500 block group"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-extrabold tracking-wide text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-all duration-500 transform hover:scale-105 hover:rotate-1 drop-shadow-2xl">
            KALKUS
          </h1>
        </Link>
      </div>

      {/* Main Contact Section */}
      <div className="relative z-10">
        <div className="border-2 border-gray-600 p-16 max-w-6xl mx-auto px-8 py-12 mb-16 mt-16 relative group hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h2 className="text-6xl font-black mb-8 leading-tight transform hover:translate-x-4 transition-transform duration-300">
                  <span className="inline-block hover:text-purple-400 transition-colors duration-300">
                    CONTACT
                  </span>
                  <br />
                  <span className="inline-block hover:text-blue-400 transition-colors duration-300 delay-100">
                    US :
                  </span>
                </h2>
              </div>

              <div className="text-gray-400 text-lg space-y-2">
                <p className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                  got an idea ?
                </p>
                <p className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform delay-100">
                  we here to help you man - let&apos;s talk
                </p>
              </div>

              {/* Decorative elements */}
              <div className="flex space-x-4 mt-8">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="space-y-8">
              {/* Name Field */}
              <div className="relative group">
                <label className="block text-gray-300 text-lg mb-2 transition-colors duration-300 group-hover:text-white">
                  Your Name :
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white focus:outline-none focus:border-purple-400 transition-all duration-300 hover:border-gray-400 transform hover:translate-y-[-2px]"
                />
                <div
                  className={
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 " +
                    (focusedField === "name" || formData.name ? "w-full" : "w-0")
                  }
                ></div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className="block text-gray-300 text-lg mb-2 transition-colors duration-300 group-hover:text-white">
                  Your Email :
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white focus:outline-none focus:border-purple-400 transition-all duration-300 hover:border-gray-400 transform hover:translate-y-[-2px]"
                />
                <div
                  className={
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 transition-all duration-300 " +
                    (focusedField === "email" || formData.email ? "w-full" : "w-0")
                  }
                ></div>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <label className="block text-gray-300 text-lg mb-2 transition-colors duration-300 group-hover:text-white">
                  let&apos;s talk :
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onBlur={() => setFocusedField(null)}
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-2 text-white focus:outline-none focus:border-purple-400 transition-all duration-300 hover:border-gray-400 transform hover:translate-y-[-2px] resize-none"
                />
                <div
                  className={
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 " +
                    (focusedField === "message" || formData.message ? "w-full" : "w-0")
                  }
                ></div>
              </div>

              {/* Enhanced Button */}
              <button className="relative bg-white text-black px-8 py-3 text-lg font-bold mt-8 transition-all duration-300 hover:bg-gray-900 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group overflow-hidden">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <section className="relative z-10">
          <Footer />
        </section>
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animationDuration: 2 + Math.random() * 2 + "s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;