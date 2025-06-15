import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Card {
  id: number;
  image: string;
  link: string;
}

const CardSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [currentX, setCurrentX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  const cards: Card[] = [
    {
      id: 1,
      image: "./images/img1.png",
      link: "/production",
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

  // Get responsive slides per view - 2 cards on mobile, 4 on desktop
  const getSlidesPerView = useCallback((): number => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) return 4; // Show all cards on desktop
      return 2; // Show 2 cards on mobile
    }
    return 2;
  }, []);

  const maxSlide = Math.max(0, cards.length - slidesPerView);

  // Touch/Drag handlers
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) return; // Only on mobile
    
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  }, []);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || (typeof window !== "undefined" && window.innerWidth >= 768)) return;
    
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX);
    const offset = clientX - startX;
    setDragOffset(offset);
  }, [isDragging, startX]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging || (typeof window !== "undefined" && window.innerWidth >= 768)) return;
    
    setIsDragging(false);
    const threshold = 50; // Minimum drag distance to trigger slide
    const offset = currentX - startX;
    
    if (Math.abs(offset) > threshold) {
      if (offset > 0 && currentSlide > 0) {
        // Drag right - go to previous slide
        setCurrentSlide(currentSlide - 1);
      } else if (offset < 0 && currentSlide < maxSlide) {
        // Drag left - go to next slide
        setCurrentSlide(currentSlide + 1);
      }
    }
    
    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  }, [isDragging, currentX, startX, currentSlide, maxSlide]);

  useEffect(() => {
    setIsVisible(true);

    // Auto-carousel interval - only for mobile
    let carouselInterval: NodeJS.Timeout | null = null;
    
    const setupCarousel = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        carouselInterval = setInterval(() => {
          if (!isDragging) {
            setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
          }
        }, 4000);
      }
    };

    // Resize handler
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      setSlidesPerView(newSlidesPerView);
      
      // Clear existing interval
      if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
      }
      
      // Reset slide position and start new interval if mobile
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        const newMaxSlide = Math.max(0, cards.length - newSlidesPerView);
        if (currentSlide > newMaxSlide) {
          setCurrentSlide(0);
        }
        setupCarousel();
      } else {
        setCurrentSlide(0); // Reset to show all cards on desktop
      }
    };

    // Set initial slides per view
    handleResize();
    setupCarousel();

    // Add mouse/touch event listeners for drag
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    window.addEventListener("resize", handleResize);

    return () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('touchend', handleDragEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDragging, currentSlide, maxSlide, getSlidesPerView, handleDragMove, handleDragEnd]);

  const goToSlide = (index: number): void => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const clampedIndex = Math.max(0, Math.min(index, maxSlide));
      setCurrentSlide(clampedIndex);
    }
  };

  // Calculate transform with drag offset
  const getTransform = (): string => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) return 'translateX(0%)';
    
    const baseTransform = -currentSlide * (100 / slidesPerView);
    const dragTransform = isDragging && typeof window !== "undefined" ? (dragOffset / window.innerWidth) * 100 : 0;
    return `translateX(${baseTransform + dragTransform}%)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth > 768 && !isDragging) {
      const target = e.currentTarget as HTMLDivElement;
      target.style.transform = `
        perspective(1000px) 
        rotateX(-10deg) 
        rotateY(5deg) 
        translateZ(50px) 
        scale3d(1.05, 1.05, 1.05)
        translateY(-10px)
      `;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth > 768 && !isDragging) {
      const target = e.currentTarget as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const rotateX = (mouseY / rect.height) * -20;
      const rotateY = (mouseX / rect.width) * 20;

      target.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(50px) 
        scale3d(1.05, 1.05, 1.05)
        translateY(-10px)
      `;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth > 768 && !isDragging) {
      const target = e.currentTarget as HTMLDivElement;
      target.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(0px) 
        scale3d(1, 1, 1)
        translateY(0px)
      `;
    }
  };

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Card Grid/Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out touch-pan-x select-none"
              style={{
                transform: getTransform(),
                transitionDuration: isDragging ? '0ms' : '700ms',
              }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{
                    width: `${100 / slidesPerView}%`,
                  }}
                >
                  <Link href={card.link} className="block">
                    <div
                      className="group relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-700 cursor-pointer transform-gpu"
                      style={{
                        aspectRatio: '9/16', // Mobile aspect ratio
                        transformStyle: "preserve-3d",
                        transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        perspective: "1000px",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Card Image */}
                      <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <img
                          src={card.image}
                          alt={`Card ${card.id}`}
                          className="w-full h-full object-cover pointer-events-none"
                          style={{
                            filter: "brightness(0.8) contrast(1.1)",
                          }}
                          draggable={false}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                        {/* Animated Glow Border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-cyan-500/30 transition-all duration-700 blur-sm"></div>
                      </div>

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

          {/* Dot Indicators - Only show on mobile */}
          {typeof window !== 'undefined' && window.innerWidth < 768 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes letterBounce {
          0%, 100% {
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