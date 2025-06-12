"use client";
import { useState, useEffect } from "react";
import Spotlight from "../components/landing";

export default function SplashScreen() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
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
  const pageTransition = Math.max(
    0,
    Math.min(1, (scrollY - pageHeight * 0.3) / (pageHeight * 0.4))
  );
  const pageSlideY = pageTransition * -100;
  const splashOpacity = Math.max(0, 1 - pageTransition * 2);
  
  // Video parallax calculations
  const videoScale = Math.max(0.5, 1 - scrollY * 0.0008);
  const videoTranslateY = scrollY * 0.5;
  const videoOpacity = Math.max(0, 1 - pageTransition * 1.5);

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
        {/* Background Video */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            transform: `translateY(${videoTranslateY}px) scale(${videoScale})`,
            opacity: videoOpacity,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            onError={(e) => {
              console.log("Video failed to load");
              const target = e.target as HTMLVideoElement;
              target.style.display = "none";
            }}
          >
            <source src="/video/last.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>



        {/* Page Transition Indicator */}
        {pageTransition > 0 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
      <div className="relative">
        <div className="h-screen"></div>
        <div
          className="min-h-screen"
          style={{
            transform: `translateY(${Math.max(
              0,
              (1 - pageTransition) * 50
            )}px)`,
            opacity: Math.max(0.3, pageTransition),
          }}
        >
          <Spotlight />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
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