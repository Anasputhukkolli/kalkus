"use client";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./footer";

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      company: "TESLA",
      slug: "tesla",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "AUTOMOTIVE",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      company: "APPLE",
      slug: "apple",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
      category: "TECHNOLOGY",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      company: "NETFLIX",
      slug: "netflix",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
      category: "STREAMING",
      gradient: "from-red-600 to-pink-500"
    },
    {
      id: 4,
      company: "SPOTIFY",
      slug: "spotify",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      category: "MUSIC",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      company: "NIKE",
      slug: "nike",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
      category: "SPORTS",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      company: "AMAZON",
      slug: "amazon",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
      category: "E-COMMERCE",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-600/10 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute top-32 right-20 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
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

      {/* Main Portfolio Section */}
      <div className="relative z-10 px-8 py-12">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="overflow-hidden">
            <h2 className="text-6xl font-black mb-8 leading-tight transform hover:translate-x-4 transition-transform duration-300">
              <span className="inline-block hover:text-purple-400 transition-colors duration-300">OUR</span>
              <br />
              <span className="inline-block hover:text-blue-400 transition-colors duration-300 delay-100">PORTFOLIO :</span>
            </h2>
          </div>
          
          <div className="text-gray-400 text-lg space-y-2 mb-8">
            <p className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
              brands we've empowered with digital excellence
            </p>
            <p className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform delay-100">
              click to explore each project in detail
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex space-x-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Portfolio Grid - 3D Image Gallery */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <Link 
                key={project.id}
                href={`/potfolio/${project.slug}`}
                className="block"
              >
                <div
                  className="relative group cursor-pointer perspective-1000 transform transition-all duration-300 hover:scale-[1.02]"
                  // onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    perspective: '1000px'
                  }}
                >
                  {/* 3D Container */}
                  <div className="relative w-full h-80 transform-gpu transition-all duration-700 preserve-3d group-hover:rotateY-12 group-hover:rotateX-5 group-hover:scale-105">
                    
                    {/* Main Image */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg shadow-2xl transform-gpu transition-all duration-700 group-hover:shadow-purple-500/30">
                      <img
                        src={project.image}
                        alt={project.company}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                      />
                      
                      {/* 3D Depth Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 transition-opacity duration-700 group-hover:opacity-70"></div>
                      
                      {/* Animated Border */}
                      <div className={`absolute inset-0 border-4 border-transparent group-hover:border-gradient-to-r group-hover:${project.gradient} rounded-lg transition-all duration-700`}></div>
                      
                      {/* Glowing Edge Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-lg rounded-lg transition-all duration-700`}></div>
                    </div>

                    {/* Company Name Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-z-20">
                      <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                        <h3 className={`text-4xl font-black text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text drop-shadow-2xl mb-2`}>
                          {project.company}
                        </h3>
                        <p className="text-white/90 text-sm font-semibold tracking-widest mb-3">
                          {project.category}
                        </p>
                        
                        {/* Click indicator */}
                        <div className="inline-flex items-center space-x-2 text-white/80 text-xs font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                          <span>EXPLORE PROJECT</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {/* Animated Underline */}
                        <div className={`w-0 h-1 bg-gradient-to-r ${project.gradient} mx-auto mt-2 group-hover:w-20 transition-all duration-700 delay-200`}></div>
                      </div>
                    </div>

                    {/* 3D Side Panels for Depth */}
                    <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-black/50 to-transparent transform-gpu rotateY-90 origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-black/50 to-transparent transform-gpu rotateX-90 origin-top opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Floating Accent Dots */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse blur-sm`}></div>
                  <div className={`absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-200`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="border-2 border-gray-600 p-12 relative group hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                READY TO JOIN THESE BRANDS?
              </h3>
              <p className="text-gray-400 text-lg mb-8 group-hover:text-gray-200 transition-colors duration-300">
                let's create your next digital masterpiece
              </p>
              
              <Link href="/contact">
                <button className="relative bg-white text-black px-8 py-3 text-lg font-bold transition-all duration-300 hover:bg-gray-900 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group/btn overflow-hidden">
                  <span className="relative z-10">START YOUR PROJECT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        <section>
            <Footer/>
        </section>
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom 3D Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-10vh) translateX(${Math.random() * 100 - 50}px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotateY-12 {
          transform: rotateY(12deg) rotateX(5deg) scale(1.05);
        }
        .translate-z-20 {
          transform: translateZ(20px);
        }
        .rotateY-90 {
          transform: rotateY(90deg);
        }
        .rotateX-90 {
          transform: rotateX(90deg);
        }
      `}</style>
    </div>
  );
};

export default PortfolioSection;