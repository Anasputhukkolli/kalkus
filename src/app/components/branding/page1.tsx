"use client";
import React, { useState, useEffect } from "react";

const BrandingShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [centerDisplay, setCenterDisplay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Auto-rotate center display
    const rotateTimer = setInterval(() => {
      setCenterDisplay(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(rotateTimer);
    };
  }, []);

  const brandingProjects = [
    {
      id: 1,
      title: "TechFlow",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
      position: { x: -350, y: -150, rotation: -12 },
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "GreenLeaf",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      position: { x: 350, y: -100, rotation: 15 },
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 3,
      title: "Artisan Co.",
      category: "Packaging",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
      position: { x: -380, y: 130, rotation: -8 },
      color: "from-orange-500 to-yellow-400"
    },
    {
      id: 4,
      title: "FitnessPro",
      category: "Brand Guide",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      position: { x: 320, y: 150, rotation: 18 },
      color: "from-red-500 to-pink-400"
    },
    {
      id: 5,
      title: "CloudSync",
      category: "Visual Identity",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      position: { x: -50, y: 220, rotation: -5 },
      color: "from-purple-500 to-indigo-400"
    },
    {
      id: 6,
      title: "FoodieHub",
      category: "Logo & Menu",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      position: { x: 50, y: -200, rotation: 8 },
      color: "from-amber-500 to-orange-400"
    }
  ];

  const centerDisplays = [
    {
      title: "Brand Strategy",
      subtitle: "Complete Identity Solutions",
      icon: "🎯",
      description: "Logo • Colors • Typography • Guidelines"
    },
    {
      title: "Visual Identity",
      subtitle: "Memorable Brand Experiences",
      icon: "✨",
      description: "Design • Packaging • Marketing • Digital"
    },
    {
      title: "Brand Evolution",
      subtitle: "Growth-Focused Design",
      icon: "🚀",
      description: "Rebranding • Expansion • Innovation • Impact"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full h-screen flex items-center justify-center" style={{ perspective: "1200px" }}>
        
        {/* Central Brand Display */}
        <div
          className={`relative transition-all duration-1500 ease-out ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-20 opacity-0 scale-95"
          }`}
          style={{
            transform: isVisible ? "rotateX(10deg) rotateY(-5deg)" : "rotateX(10deg) rotateY(-5deg) translateY(-50px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Main display screen */}
          <div className="w-[500px] h-[320px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-4 border-gray-600 shadow-2xl relative overflow-hidden">
            
            {/* Screen glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"></div>
            
            {/* Content area */}
            <div className="relative w-full h-full p-8 flex flex-col justify-center items-center text-white">
              <div className="text-center transition-all duration-700 ease-in-out">
                <div className="text-6xl mb-4 animate-bounce">
                  {centerDisplays[centerDisplay].icon}
                </div>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {centerDisplays[centerDisplay].title}
                </h2>
                <p className="text-lg text-blue-300 mb-4">
                  {centerDisplays[centerDisplay].subtitle}
                </p>
                <div className="text-sm text-gray-400 tracking-wider">
                  {centerDisplays[centerDisplay].description}
                </div>
              </div>
              
              {/* Progress dots */}
              <div className="absolute bottom-6 flex space-x-2">
                {centerDisplays.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === centerDisplay ? "bg-blue-400 w-6" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-5 transform rotate-12"></div>
          </div>

          {/* Base shadow */}
          <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/30 rounded-full blur-xl"></div>
        </div>

        {/* Floating Brand Cards */}
        {brandingProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-72 h-48 rounded-2xl shadow-2xl cursor-pointer transition-all duration-700 ease-out overflow-hidden ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: isVisible
                ? `translate3d(${project.position.x}px, ${project.position.y}px, ${
                    hoveredCard === project.id ? "80px" : "0px"
                  }) rotateY(${project.position.rotation}deg) rotateX(${
                    hoveredCard === project.id ? "-10deg" : "8deg"
                  })${hoveredCard === project.id ? " scale(1.15)" : ""}`
                : `translate3d(0px, -300px, 0px) rotateY(${project.position.rotation}deg) rotateX(8deg)`,
              transitionDelay: `${index * 150 + 600}ms`,
              transformStyle: "preserve-3d",
            }}
            // onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card background with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
            
            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Hover overlay with brand preview */}
            <div
              className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${
                hoveredCard === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center text-white p-6">
                {/* Brand mockup */}
                <div className="mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/20 rounded w-24 mx-auto"></div>
                    <div className="h-1 bg-white/10 rounded w-16 mx-auto"></div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.category}</p>
                
                {/* View button */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                  <span className="text-sm">View Project</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* Card glow shadow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl -z-10 blur-xl transition-all duration-500`}
              style={{
                transform: `translateY(30px) ${
                  hoveredCard === project.id ? "scale(1.3)" : "scale(0.8)"
                }`,
                opacity: hoveredCard === project.id ? 0.6 : 0.2,
              }}
            ></div>
          </div>
        ))}

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Title Section */}
      <div
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-6xl uppercase font-bold text-white mb-4">
          branding{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            showcase
          </span>
        </h1>
        
      </div>

      {/* Bottom CTA */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
          Explore All Projects
        </button>
      </div>
    </div>
  );
};

export default BrandingShowcase;