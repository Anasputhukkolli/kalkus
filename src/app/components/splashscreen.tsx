// SplashScreen.tsx
"use client";
import { useState, useEffect } from "react";
import Spotlight from "./landing";

export default function SplashScreen() {
  const [zoomOut, setZoomOut] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setZoomOut(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      const pageHeight = window.innerHeight;
      const newPage = Math.floor(window.scrollY / (pageHeight * 0.8));
      setCurrentPage(newPage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const scrollProgress = scrollY / pageHeight;
  const initialRotation = Math.min(scrollY * 0.5, 360);
  const shouldRotate = scrollY < pageHeight * 0.5;
  const pageTransition = Math.max(
    0,
    Math.min(1, (scrollY - pageHeight * 0.3) / (pageHeight * 0.4))
  );
  const logoScale =
    scrollY < pageHeight * 0.5
      ? Math.max(0.8, 1 - scrollY * 0.0005)
      : Math.max(0.1, 1 - pageTransition * 0.9);
  const pageSlideY = pageTransition * -100;
  const splashOpacity = Math.max(0, 1 - pageTransition * 2);

  return (
    <>
      {/* Splash Screen Overlay */}
      <div
        className="fixed inset-0 z-50 overflow-hidden"
        style={{
          background: "#000000",
          opacity: splashOpacity,
          pointerEvents: splashOpacity > 0.1 ? "all" : "none",
        }}
      >
        {/* Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Main Logo with Zoom-Out Animation */}
        <div
          className="logo-zoom-out absolute inset-0 flex items-center justify-center transition-all duration-200"
          style={{
            transform: `translateY(${pageSlideY}vh) scale(${logoScale})`,
            opacity: Math.max(0, 1 - pageTransition * 1.5),
          }}
        >
          <div className="relative w-80 h-80 mx-auto">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-72 h-72 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl border border-white/10 animate-spin-continuous"
                style={{
                  boxShadow:
                    "0 0 60px rgba(0, 0, 0, 0.1), inset 0 0 30px rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  src="/images/kalkus.png"
                  alt="Background"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.parentElement)
                      target.parentElement.style.background =
                        "radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(255,255,255,0.02) 100%)";
                    target.style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Logo with Zoom-Out Animation */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src="/images/logo.png"
                alt="Brand Logo"
                className={`w-72 h-72 object-contain ${zoomOut ? "logo-zoom-out" : ""}`}
                style={{
                  filter: "drop-shadow(0 0 30px rgba(0, 0, 0, 0.3))",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const sibling = target.nextSibling as HTMLElement;
                  if (sibling) sibling.style.display = "block";
                }}
              />
              <div className="text-white text-5xl font-bold tracking-wider hidden drop-shadow-lg">
                LOGO
              </div>
            </div>
          </div>
          {/* Brand Text */}
          <div
            className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white text-center"
            style={{
              opacity: Math.max(0, 1 - pageTransition * 2),
            }}
          >
            <h1
              className="head text-6xl font-black tracking-wide"
              style={{
                color: "#ffffff",
                textShadow: "0 0 30px rgba(255,255,255,0.5)",
              }}
            >
              KALKUS
            </h1>
          </div>
        </div>

        {/* Page Transition Indicator */}
        {pageTransition > 0 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {[0, 1, 2].map((page) => (
                <div
                  key={page}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === page ? "bg-white w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative ">
        <div className="h-screen"></div>
        <div
          className="min-h-screen "
          style={{
            transform: `translateY(${Math.max(0, (1 - pageTransition) * 50)}px)`,
            opacity: Math.max(0.3, pageTransition),
          }}
        >
          <div className="">
            <Spotlight />
          </div>
        </div>
      </div>

      {/* Enhanced Styles */}
      <style jsx>{`
        .head {
          font-size: 68px;
          font-weight: 900;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-continuous {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.5;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .logo-zoom-out {
          animation: logoZoomOut 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes logoZoomOut {
          0% {
            transform: scale(2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #000000;
        }
        body::-webkit-scrollbar {
          width: 8px;
        }
        body::-webkit-scrollbar-track {
          background: #111;
        }
        body::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #333 0%, #666 100%);
          border-radius: 4px;
        }
        body::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #444 0%, #777 100%);
        }
      `}</style>
    </>
  );
}
