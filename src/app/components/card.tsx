import React, { useState, useEffect } from "react";

const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const animatedTexts = [
    "What We Do",
    "Our Expertise",
    "What We Create",
    "What We Build",
  ];

  const cards = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build modern, responsive websites with cutting-edge technologies that drive results",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
      category: "Development",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Create beautiful and intuitive user experiences that delight and engage users",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format",
      category: "Design",
    },
    {
      id: 3,
      title: "Mobile Apps",
      description:
        "Develop cross-platform mobile applications for iOS and Android platforms",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      category: "Mobile",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Boost your online presence with strategic marketing campaigns that convert",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      category: "Marketing",
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern businesses",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format",
      category: "Cloud",
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&auto=format",
      category: "AI/ML",
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

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const maxSlide = Math.max(0, cards.length - slidesPerView);

  useEffect(() => {
    setIsVisible(true);

    // Text rotation interval
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

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
      clearInterval(textInterval);
      clearInterval(carouselInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [maxSlide, currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Ultra Animated Section Header */}
        <div className="text-center mb-20 relative">
          {/* Mega Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full blur-3xl animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-2xl animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "6s" }}
            ></div>
          </div>

          {/* Main Mega Heading */}
          <div className="relative mb-8">
            <div className="relative">
              <h1
                className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 transform transition-all duration-1500 ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-20 opacity-0 scale-90"
                } relative z-10`}
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.05em",
                  lineHeight: "0.9",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                <div className="relative inline-block">
                  {animatedTexts.map((text, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 transform ${
                        index === textIndex
                          ? "translate-y-0 opacity-100 scale-100 rotate-0"
                          : index < textIndex
                          ? "-translate-y-full opacity-0 scale-95 -rotate-12"
                          : "translate-y-full opacity-0 scale-95 rotate-12"
                      }`}
                      style={{
                        transformOrigin: "center center",
                        filter:
                          index === textIndex
                            ? "drop-shadow(0 10px 20px rgba(168, 85, 247, 0.5))"
                            : "none",
                      }}
                    >
                      {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block mr-2 sm:mr-4">
                          {word.split("").map((char, charIndex) => (
                            <span
                              key={charIndex}
                              className="inline-block transform transition-all duration-700"
                              style={{
                                animationDelay: `${
                                  (wordIndex * 3 + charIndex) * 0.1
                                }s`,
                                animation:
                                  index === textIndex
                                    ? "letterBounce 3s ease-in-out infinite"
                                    : "none",
                              }}
                            >
                              {char}
                            </span>
                          ))}
                        </span>
                      ))}
                    </div>
                  ))}
                  <div className="opacity-0 pointer-events-none">
                    {animatedTexts[0]}
                  </div>
                </div>
              </h1>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          

          {/* Mega Floating Elements */}
          <div
            className="absolute -top-20 left-10 w-6 h-6 bg-purple-500 rounded-full opacity-70 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute -top-10 right-20 w-4 h-4 bg-pink-500 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-10 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-80 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute -top-15 right-1/3 w-5 h-5 bg-blue-400 rounded-full opacity-50 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          ></div>
        </div>

        {/* Fixed Ultra Smooth Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative rounded-3xl ">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ 
                    width: `${100 / slidesPerView}%`
                  }}
                >
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
                        alt={card.title}
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
                    <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-end">
                      {/* Category Badge */}
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transform transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                        {card.category}
                      </div>

                      <div className="space-y-2 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white transform transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                          {card.title}
                        </h3>

                        <p className="text-gray-200 text-sm sm:text-base leading-relaxed transform transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 delay-100">
                          {card.description}
                        </p>

                        {/* Enhanced CTA */}
                        <div className="flex items-center text-purple-300 font-bold text-sm sm:text-base cursor-pointer hover:text-white transform transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 delay-200">
                          <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                            Explore More
                          </span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-3 group-hover:scale-125 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl -z-10 blur-xl transform translate-z-[-20px]" />

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-20 blur-sm transform translate-z-[-25px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <button className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden group text-base sm:text-lg">
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </button>
        </div>
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