"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const VideoShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  interface ShowcaseItem {
    id: number;
    title: string;
    category: string;
    image: string;
    video: string;
    description: string;
    link: string;
    isExternal: boolean;
  }

  // Sample showcase items with proper links
  const showcaseItems = [
    {
      id: 1,
      title: "Creative Design Studio",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      description: "Modern web design solutions with cutting-edge aesthetics",
      link: "https://www.google.com",
      isExternal: true,
    },
    {
      id: 2,
      title: "Mobile App Development",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      description: "Cross-platform mobile solutions for iOS and Android",
      link: "https://github.com",
      isExternal: true,
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      description: "Complete brand transformation and visual identity design",
      link: "https://www.behance.net",
      isExternal: true,
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      description: "Full-stack e-commerce solutions with payment integration",
      link: "https://www.shopify.com",
      isExternal: true,
    },
    {
      id: 5,
      title: "UI/UX Design",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      description: "User-centered design approach with modern interfaces",
      link: "https://www.figma.com",
      isExternal: true,
    },
    {
      id: 6,
      title: "Digital Marketing",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      description: "Data-driven marketing strategies and campaign optimization",
      link: "https://analytics.google.com",
      isExternal: true,
    },
  ];

  const handleMouseEnter = (id: number) => {
    if (window.innerWidth >= 768) {
      // Only on desktop
      setHoveredItem(id);
      if (videoRefs.current[id]) {
        videoRefs.current[id]
          .play()
          .catch((e) => console.log("Video play failed:", e));
      }
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredItem(null);
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      videoRefs.current[id].currentTime = 0;
    }
  };

  // Component to render the card content
  const CardContent = ({ item }: { item: ShowcaseItem }) => (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => handleMouseEnter(item.id)}
      onMouseLeave={() => handleMouseLeave(item.id)}
    >
      {/* Image/Video Container */}
      <div className="relative aspect-video overflow-hidden">
        {/* Default Image */}
        <img
          src={item.image}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hoveredItem === item.id ? "opacity-0 md:opacity-0" : "opacity-100"
          }`}
        />

        {/* Video (Hidden on Mobile) */}
        <video
          ref={(el) => {
            videoRefs.current[item.id] = el;
          }}
          className={`absolute inset-0 w-full h-ful object-cover transition-opacity duration-500 ${
            hoveredItem === item.id ? "opacity-100" : "opacity-0"
          } hidden md:block`}
          muted
          loop
          playsInline
        >
          <source src={item.video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-purple-500/80 rounded-full text-xs font-medium mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {item.description}
          </p>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 transition-colors duration-300" />

      {/* External Link Indicator */}
      {item.isExternal && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-5 h-5 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <div className="">
      {/* Showcase Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item) => (
              <div key={item.id}>
                {item.isExternal ? (
                  // External link - opens in new tab
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <CardContent item={item} />
                  </a>
                ) : (
                  // Internal link - uses Next.js Link
                  <Link href={item.link} className="block">
                    <CardContent item={item} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;
