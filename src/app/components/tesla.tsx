"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "./header"; // Assuming you have a Header component

// Define the interface for portfolio items
interface PortfolioItem {
  id: number;
  image: string;
  size: string;
  title: string;
  description: string;
}

const TeslaMasonryPortfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (item: PortfolioItem) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isModalOpen]);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      size: "large",
      title: "Model S Plaid",
      description: "The fastest production car ever made",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
      size: "medium",
      title: "Model 3",
      description: "Electric performance redefined",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      size: "tall",
      title: "Model X",
      description: "Falcon Wing doors and unmatched utility",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
      size: "small",
      title: "Model Y",
      description: "Compact SUV perfection",
    },
    {
      id: 5,
      image:
        "https://imgs.search.brave.com/ijmxs-aPb9MjFvw5N23R6J_5N-wzF_cNBRAxJ9rPC8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzY0/ZmEwMmE1NTZmNTE5/MDAxOWZkMWUxOD93/aWR0aD03MDA",
      size: "wide",
      title: "Cybertruck",
      description: "Bulletproof exoskeleton meets truck utility",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=600&fit=crop",
      size: "medium",
      title: "Roadster",
      description: "SpaceX package with cold gas thrusters",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
      size: "medium",
      title: "Semi Truck",
      description: "500-mile range, megawatt charging",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=500&fit=crop",
      size: "small",
      title: "Supercharger",
      description: "Global charging network",
    },
    {
      id: 9,
      image:
        "https://imgs.search.brave.com/ijmxs-aPb9MjFvw5N23R6J_5N-wzF_cNBRAxJ9rPC8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzY0/ZmEwMmE1NTZmNTE5/MDAxOWZkMWUxOD93/aWR0aD03MDA",
      size: "wide",
      title: "Autopilot",
      description: "Full self-driving capability",
    },
    {
      id: 10,
      image:
        "https://imgs.search.brave.com/KJfWKdX67KFg_ogSwYnu62EBlJqKyPjd9xT8oEmjYEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbHRl/cm5hdGl2ZS1zb2xh/ci1lbmVyZ3ktc29s/YXItcG93ZXItcGxh/bnQtMTUxMTA5MzQu/anBn",
      size: "small",
      title: "Solar Roof",
      description: "Beautiful solar made affordable",
    },
    {
      id: 11,
      image:
        "https://imgs.search.brave.com/KJfWKdX67KFg_ogSwYnu62EBlJqKyPjd9xT8oEmjYEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbHRl/cm5hdGl2ZS1zb2xh/ci1lbmVyZ3ktc29s/YXItcG93ZXItcGxh/bnQtMTUxMTA5MzQu/anBn",
      size: "tall",
      title: "Powerwall",
      description: "Home battery system",
    },
    {
      id: 12,
      image:
        "https://imgs.search.brave.com/KJfWKdX67KFg_ogSwYnu62EBlJqKyPjd9xT8oEmjYEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbHRl/cm5hdGl2ZS1zb2xh/ci1lbmVyZ3ktc29s/YXItcG93ZXItcGxh/bnQtMTUxMTA5MzQu/anBn",
      size: "medium",
      title: "Gigafactory",
      description: "Manufacturing at scale",
    },
    {
      id: 13,
      image:
        "https://imgs.search.brave.com/KJfWKdX67KFg_ogSwYnu62EBlJqKyPjd9xT8oEmjYEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbHRl/cm5hdGl2ZS1zb2xh/ci1lbmVyZ3ktc29s/YXItcG93ZXItcGxh/bnQtMTUxMTA5MzQu/anBn",
      size: "tall",
      title: "Powerwall",
      description: "Home battery system",
    },
    {
      id: 14,
      image:
        "https://imgs.search.brave.com/KJfWKdX67KFg_ogSwYnu62EBlJqKyPjd9xT8oEmjYEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hbHRl/cm5hdGl2ZS1zb2xh/ci1lbmVyZ3ktc29s/YXItcG93ZXItcGxh/bnQtMTUxMTA5MzQu/anBn",
      size: "medium",
      title: "Gigafactory",
      description: "Manufacturing at scale",
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-96";
      case "wide":
        return "col-span-2 row-span-1 h-48";
      case "tall":
        return "col-span-1 row-span-2 h-96";
      case "medium":
        return "col-span-1 row-span-1 h-48";
      case "small":
        return "col-span-1 row-span-1 h-32";
      default:
        return "col-span-1 row-span-1 h-48";
    }
  };

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
          {/* Header */}
          <div className="relative overflow-hidden py-20">
            <div
              className="absolute inset-0 0"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            ></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
                TESLA
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-widest">
                PORTFOLIO GALLERY
              </p>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${getSizeClasses(
                    item.size
                  )}`}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => openModal(item)}
                  style={{
                    transform:
                      hoveredCard === item.id
                        ? "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02)"
                        : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                    transformStyle: "preserve-3d",
                    transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
                    animation: `slideIn 0.8s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCard === item.id
                        ? "scale-110 brightness-110"
                        : "scale-100 brightness-75"
                    }`}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 ${
                      hoveredCard === item.id ? "opacity-80" : "opacity-60"
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3
                      className={`font-bold text-lg mb-2 transition-all duration-300 ${
                        hoveredCard === item.id
                          ? "text-red-400 transform translate-y-0"
                          : "transform translate-y-2"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm text-gray-300 transition-all duration-500 ${
                        hoveredCard === item.id
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform translate-y-4"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Effects */}
                  <div
                    className={`absolute inset-0 border-2 border-transparent transition-all duration-500 rounded-xl ${
                      hoveredCard === item.id
                        ? "border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                        : ""
                    }`}
                  ></div>

                  {/* Glowing Dot */}
                  <div
                    className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500 ${
                      hoveredCard === item.id
                        ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]"
                        : "bg-white/30"
                    }`}
                  ></div>

                  {/* Shine Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ${
                      hoveredCard === item.id ? "translate-x-full" : ""
                    }`}
                    style={{
                      transform:
                        hoveredCard === item.id
                          ? "translateX(100%) skewX(-20deg)"
                          : "translateX(-100%) skewX(-20deg)",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
              style={{
                animation: "fadeIn 0.3s ease-out",
              }}
            >
              <div
                className="relative max-w-7xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
                style={{
                  animation:
                    "modalSlideIn 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 z-10 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain max-h-[80vh]"
                    style={{
                      animation:
                        "imageZoomIn 0.5s cubic-bezier(0.23, 1, 0.320, 1) 0.1s both",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-8 text-white"
                    style={{
                      animation:
                        "slideUp 0.6s cubic-bezier(0.23, 1, 0.320, 1) 0.2s both",
                    }}
                  >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                      {selectedImage.title}
                    </h2>
                    <p className="text-xl text-gray-200 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]"></div>
                  <div className="absolute top-6 right-6 w-2 h-16 bg-gradient-to-b from-red-500 to-transparent opacity-60"></div>
                </div>

                {/* Navigation Hint */}
                <div
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center text-gray-400"
                  style={{
                    animation: "fadeIn 0.8s ease-out 0.4s both",
                  }}
                >
                  <p className="text-sm">Press ESC or click outside to close</p>
                </div>
              </div>
            </div>
          )}

          {/* Floating Elements */}
          <div className="fixed top-1/2 left-10 w-2 h-20 bg-gradient-to-b from-red-500 to-transparent opacity-30 animate-pulse"></div>
          <div
            className="fixed top-1/3 right-10 w-2 h-16 bg-gradient-to-b from-blue-500 to-transparent opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <section>
            <Footer />
          </section>
          <style jsx>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.9);
              }
              to {
                opacity: 1;
                transform: translateY(0px) scale(1);
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes modalSlideIn {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0px) scale(1);
              }
            }

            @keyframes imageZoomIn {
              from {
                transform: scale(0.9);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0px);
              }
            }

            .grid {
              grid-auto-rows: 8rem;
            }

            @media (max-width: 768px) {
              .grid {
                grid-auto-rows: 6rem;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
};

export default TeslaMasonryPortfolio;
