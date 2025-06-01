"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const WebsiteShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      position: { x: -280, y: -120, rotation: -15 },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      position: { x: 280, y: -80, rotation: 12 },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      position: { x: -320, y: 100, rotation: -8 },
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
      position: { x: 300, y: 120, rotation: 10 },
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
      position: { x: -100, y: 180, rotation: -5 },
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="relative w-full h-screen flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Main Laptop */}
        <div
          className={`relative transition-all duration-1500 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
          style={{
            transform: isVisible
              ? "rotateX(15deg) rotateY(-10deg)"
              : "rotateX(15deg) rotateY(-10deg) translateY(-100px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Laptop Base */}
          <div className="w-96 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-2xl transform rotateX(90deg) translate-y-3"></div>

          {/* Laptop Screen */}
          <div className="w-96 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg border-4 border-gray-700 shadow-2xl relative overflow-hidden">
            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
                <p className="text-blue-200">Interactive Showcase</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>

            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform rotate-12"></div>
          </div>
        </div>

        {/* Floating Project Cards */}
        {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute w-64 h-40 rounded-xl shadow-2xl cursor-pointer transition-all duration-700 ease-out overflow-hidden ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: isVisible
                  ? `translate3d(${project.position.x}px, ${
                      project.position.y
                    }px, ${
                      hoveredCard === project.id ? "50px" : "0px"
                    }) rotateY(${project.position.rotation}deg) rotateX(${
                      hoveredCard === project.id ? "-5deg" : "5deg"
                    })${hoveredCard === project.id ? " scale(1.1)" : ""}`
                  : `translate3d(0px, -200px, 0px) rotateY(${project.position.rotation}deg) rotateX(5deg)`,
                transitionDelay: `${index * 200 + 500}ms`,
                transformStyle: "preserve-3d",
              }}
            //   onMouseEnter={() => setHoveredCard(projects.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />

              {/* Hover overlay with website preview */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                  hoveredCard === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-full p-4 flex flex-col">
                  {/* Mini website preview */}
                  <div className="bg-white rounded-lg flex-1 shadow-lg overflow-hidden transform scale-90 hover:scale-95 transition-transform">
                    <div className="bg-gray-200 h-6 flex items-center px-2 space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-white rounded-sm mx-2 h-3"></div>
                    </div>
                    <div className="bg-white p-3 h-full">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          <div className="h-8 bg-blue-100 rounded"></div>
                          <div className="h-8 bg-green-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View button */}
                  <div className="text-center mt-2">
                    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card shadow */}
              <div
                className="absolute inset-0 bg-black/50 rounded-xl -z-10 blur-xl"
                style={{
                  transform: `translateY(20px) ${
                    hoveredCard === project.id ? "scale(1.2)" : "scale(1)"
                  }`,
                }}
              ></div>
            </div>
        ))}

        {/* Ambient lighting effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Title Section */}
      <div
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          website{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Design
          </span>
        </h1>
        
      </div>
    </div>
  );
};

export default WebsiteShowcase;
