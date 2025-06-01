import React, { useState, useEffect } from "react";
import Link from "next/link"; // at the top
const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // const animatedTexts = [
  //   "What We Do",
  //   "Our Expertise",
  //   "What We Create",
  //   "What We Build",
  // ];

  const cards = [
    // {
    //   id: 1,
    //   title: "Web Development",
    //   description:
    //     "Build modern, responsive websites with cutting-edge technologies that drive results",
    //   image:
    //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
    //   category: "Development",
    // },
    {
      id: 1,
      image: "./images/img1.png",
      link: "/production", // Add link to the first card
    },
    {
      id: 2,
      image: "./images/img2.png",
      link: "/socials",
    },
    {
      id: 3,
      image: "./images/img3.png",
      link: "/website",
    },
    {
      id: 4,
      image: "./images/img4.png",
      link: "/branding",
    },
  ];

  // Get responsive slides per view
  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(3); // <- safe default for server
  const maxSlide = Math.max(0, cards.length - slidesPerView);

  useEffect(() => {
    setIsVisible(true);

    // Text rotation interval
    // const textInterval = setInterval(() => {
    //   setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    // }, 3000);

    // Auto-carousel interval
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
    }, 5000);

    // Resize handler
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      setSlidesPerView(newSlidesPerView);
      // Reset to valid slide when screen size changes
      const newMaxSlide = Math.max(0, cards.length - newSlidesPerView);
      if (currentSlide > newMaxSlide) {
        setCurrentSlide(newMaxSlide);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // clearInterval(textInterval);
      clearInterval(carouselInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [maxSlide, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  return (
    <section className="py-16  px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Ultra Animated Section Header */}
        <div className="text-center mb-20 relative">
          {/* Mega Background Effects */}

          {/* Enhanced Subtitle */}

          {/* Mega Floating Elements */}
        </div>

        {/* Fixed Ultra Smooth Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative rounded-3xl ">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesPerView)
                }%)`,
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{
                    width: `${100 / slidesPerView}%`,
                  }}
                >
                  <Link href={`${card.link}`} className="block">
                    <div
                      className="group relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-700 cursor-pointer transform-gpu h-80 sm:h-96"
                      style={{
                        transformStyle: "preserve-3d",
                        transition:
                          "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        perspective: "1000px",
                      }}
                      onMouseEnter={(e) => {
                        if (window.innerWidth > 768) {
                          e.currentTarget.style.transform = `
                          perspective(1000px) 
                          rotateX(-10deg) 
                          rotateY(5deg) 
                          translateZ(50px) 
                          scale3d(1.05, 1.05, 1.05)
                          translateY(-10px)
                        `;
                        }
                      }}
                      onMouseMove={(e) => {
                        if (window.innerWidth > 768) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const centerX = rect.left + rect.width / 2;
                          const centerY = rect.top + rect.height / 2;
                          const mouseX = e.clientX - centerX;
                          const mouseY = e.clientY - centerY;
                          const rotateX = (mouseY / rect.height) * -20;
                          const rotateY = (mouseX / rect.width) * 20;

                          e.currentTarget.style.transform = `
                          perspective(1000px) 
                          rotateX(${rotateX}deg) 
                          rotateY(${rotateY}deg) 
                          translateZ(50px) 
                          scale3d(1.05, 1.05, 1.05)
                          translateY(-10px)
                        `;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (window.innerWidth > 768) {
                          e.currentTarget.style.transform = `
                          perspective(1000px) 
                          rotateX(0deg) 
                          rotateY(0deg) 
                          translateZ(0px) 
                          scale3d(1, 1, 1)
                          translateY(0px)
                        `;
                        }
                      }}
                    >
                      {/* Static Card Image */}
                      <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <img
                          src={card.image}
                          className="w-full h-full object-cover"
                          style={{
                            filter: "brightness(0.8) contrast(1.1)",
                          }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                        {/* Animated Glow Border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-cyan-500/30 transition-all duration-700 blur-sm"></div>
                      </div>

                      {/* Enhanced Content */}

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl -z-10 blur-xl transform translate-z-[-20px]" />

                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-20 blur-sm transform translate-z-[-25px]" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
        </div>

        {/* Enhanced Bottom CTA */}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes letterBounce {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-8px) scale(1.05);
          }
          50% {
            transform: translateY(-4px) scale(1.02);
          }
          75% {
            transform: translateY(-6px) scale(1.03);
          }
        }

        @keyframes expandLineUltra {
          0% {
            transform: scaleX(0.2) rotateZ(0deg);
          }
          50% {
            transform: scaleX(1) rotateZ(180deg);
          }
          100% {
            transform: scaleX(0.2) rotateZ(360deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default CardSection;
