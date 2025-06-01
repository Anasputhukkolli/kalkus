"use client";
import React, { useState, useEffect } from "react";
import { Play, ExternalLink, Eye, X } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  type: "logo" | "poster" | "video";
  size: "large" | "wide" | "tall" | "small";
  thumbnail: string;
  description: string;
  videoUrl?: string;
}

const BrandingPortfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  // Portfolio items with different sizes for masonry effect
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Tech Startup Identity",
      type: "logo",
      size: "large",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
      description: "Complete brand identity system",
    },
    {
      id: 2,
      title: "Minimalist Poster",
      type: "poster",
      size: "tall",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=600&fit=crop",
      description: "Clean typography design",
    },
    {
      id: 3,
      title: "Brand Film",
      type: "video",
      size: "wide",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=300&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      description: "Cinematic brand storytelling",
    },
    {
      id: 4,
      title: "Luxury Logo",
      type: "logo",
      size: "small",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop",
      description: "Elegant restaurant branding",
    },
    {
      id: 5,
      title: "Editorial Design",
      type: "poster",
      size: "small",
      thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=300&fit=crop",
      description: "Magazine layout concept",
    },
    {
      id: 6,
      title: "Motion Graphics",
      type: "video",
      size: "tall",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=600&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      description: "Animated logo sequence",
    },
    {
      id: 7,
      title: "Fashion Campaign",
      type: "poster",
      size: "wide",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop",
      description: "High-end fashion visuals",
    },
    {
      id: 8,
      title: "Startup Branding",
      type: "logo",
      size: "small",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop",
      description: "Modern tech identity",
    },
    {
      id: 9,
      title: "Documentary Series",
      type: "video",
      size: "large",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      description: "Brand story documentation",
    },
    {
      id: 10,
      title: "Event Branding",
      type: "poster",
      size: "small",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop",
      description: "Conference visual identity",
    },
    {
      id: 11,
      title: "Product Launch",
      type: "video",
      size: "wide",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
      description: "Commercial video production",
    },
    {
      id: 12,
      title: "Artisan Brand",
      type: "logo",
      size: "tall",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=600&fit=crop",
      description: "Handcrafted aesthetic",
    },
  ];

  const getSizeClasses = (size: "large" | "wide" | "tall" | "small") => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-96";
      case "wide":
        return "col-span-2 row-span-1 h-48";
      case "tall":
        return "col-span-1 row-span-2 h-96";
      default:
        return "col-span-1 row-span-1 h-48";
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-fr">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-black/20 backdrop-blur-xl border border-white/5 hover:border-purple-500/50 transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer ${getSizeClasses(item.size)}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => openModal(item)}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: mounted ? 1 : 0,
                transform: mounted
                  ? "translateY(0) rotate(0deg)"
                  : "translateY(50px) rotate(-5deg)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Animated Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 transition-all duration-500 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Floating Action Buttons */}
                  <div
                    className="absolute top-4 right-4 flex flex-col gap-2 transform transition-all duration-500"
                    style={{
                      transform:
                        hoveredItem === item.id
                          ? "translateX(0)"
                          : "translateX(100px)",
                      opacity: hoveredItem === item.id ? 1 : 0,
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <Eye size={18} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <ExternalLink size={18} />
                    </button>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item);
                        }}
                        className={`p-6 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-500 transform ${
                          hoveredItem === item.id
                            ? "scale-100 rotate-0"
                            : "scale-0 rotate-180"
                        }`}
                      >
                        <Play size={32} fill="currentColor" />
                      </button>
                    </div>
                  )}

                  {/* View Icon for Images */}
                  {(item.type === "logo" || item.type === "poster") && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item);
                        }}
                        className={`p-6 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-500 transform ${
                          hoveredItem === item.id
                            ? "scale-100 rotate-0"
                            : "scale-0 rotate-180"
                        }`}
                      >
                        <Eye size={32} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Type Badge */}
                <div
                  className="absolute top-4 left-4 transform transition-all duration-500"
                  style={{
                    transform:
                      hoveredItem === item.id
                        ? "translateY(0)"
                        : "translateY(-100px)",
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                >
                  <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest border border-white/20">
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500"
                  style={{
                    transform:
                      hoveredItem === item.id
                        ? "translateY(0)"
                        : "translateY(20px)",
                  }}
                >
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Glowing Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${
                    hoveredItem === item.id
                      ? "shadow-[0_0_50px_rgba(147,51,234,0.5)]"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Bottom Element */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300">
              More Creative Works Coming Soon
            </span>
          </div>
        </div>

        {/* Universal Modal Popup */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 p-3 text-white hover:text-purple-400 transition-colors duration-300 z-20"
              >
                <X size={32} />
              </button>

              {/* Content Container */}
              <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/25">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                      {selectedItem.type}
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedItem.title}
                    </h2>
                  </div>
                  <p className="text-gray-300">{selectedItem.description}</p>
                </div>

                {/* Content Area */}
                <div className="relative">
                  {/* Video Content */}
                  {selectedItem.type === "video" && (
                    <div className="relative aspect-video bg-black">
                      <video
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                        poster={selectedItem.thumbnail}
                      >
                        <source src={selectedItem.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* Image Content (Logo/Poster) */}
                  {(selectedItem.type === "logo" ||
                    selectedItem.type === "poster") && (
                    <div className="relative bg-black/20 flex items-center justify-center min-h-[60vh]">
                      <img
                        src={selectedItem.thumbnail}
                        alt={selectedItem.title}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                  )}
                </div>

                {/* Action Footer */}
                <div className="p-6 border-t border-white/10 flex justify-between items-center">
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                      Download
                    </button>
                    <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                      Share
                    </button>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Click outside or press ESC to close
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandingPortfolio;