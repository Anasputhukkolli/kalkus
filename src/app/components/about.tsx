"use client";
import Header from "./header"; // Assuming you have a Header component
import React, { useState } from "react";
import { Instagram, Linkedin, Phone, Mail } from "lucide-react";
import Footer from "./footer"; // Assuming you have a Footer component

const AboutSection = () => {
  const [cardTransforms, setCardTransforms] = useState<{ [key: number]: string }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;

    setCardTransforms((prev) => ({
      ...prev,
      [index]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setCardTransforms((prev) => ({
      ...prev,
      [index]: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    }));
  };

  const founders = [
    {
      name: "John Anderson",
      title: "Founder & Creative Director",
      phone: "+91 9876543210",
      email: "john@kalkus.in",
      image: "./images/anas.jpg",
      skills: ["UI/UX Design", "Brand Strategy", "Creative Direction"],
    },
    {
      name: "Sarah Mitchell",
      title: "Co-Founder & Tech Lead",
      phone: "+91 9876543211",
      email: "sarah@kalkus.in",
      image: "./images/anas.jpg",
      skills: [
        "Full-Stack Development",
        "Cloud Architecture",
        "Team Leadership",
      ],
    },
    {
      name: "Michael Chen",
      title: "Co-Founder & Strategy Director",
      phone: "+91 9876543212",
      email: "michael@kalkus.in",
      image: "./images/anas.jpg",
      skills: ["Digital Marketing", "Business Strategy", "Client Relations"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <section>
          <Header/>
        </section>

        {/* About Section */}
        <div className="max-w-6xl">
          <h2 className="text-6xl font-black mb-12 tracking-tight">ABOUT:</h2>

          <div className="border border-white/20 p-12 mb-20 backdrop-blur-sm bg-white/5">
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              At KALKUS, we transform visions into digital realities through
              innovative design and cutting-edge technology. Our passion lies in
              crafting exceptional user experiences that not only captivate
              audiences but drive meaningful results for businesses.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Founded with a commitment to excellence, we specialize in web
              development, brand identity, and digital strategy. Every project
              we undertake is approached with meticulous attention to detail and
              a deep understanding of our clients' unique needs.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              We believe in the power of collaboration, innovation, and
              relentless pursuit of perfection. From concept to execution,
              KALKUS delivers solutions that stand the test of time and exceed
              expectations.
            </p>
          </div>

          {/* Founders Section */}
          <div className="mb-20">
            <h3 className="text-5xl font-black mb-12 tracking-tight">
              FOUNDERS:
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  {/* 3D Card Container */}
                  <div
                    className="aspect-square relative overflow-hidden border border-white/20 backdrop-blur-sm bg-white/5 transition-all duration-700 ease-out transform-gpu"
                    style={{
                      transformStyle: "preserve-3d",
                      transform:
                        cardTransforms[index] ||
                        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                    }}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {/* Founder Image */}
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay - slides up from bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/95 via-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex flex-col justify-end h-full p-6 pb-8">
                        {/* Content that animates in */}
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-600 delay-200">
                          <h4 className="text-xl font-bold mb-1 text-white">
                            {founder.name}
                          </h4>
                          <p className="text-sm text-gray-300 mb-4">
                            {founder.title}
                          </p>

                          <div className="space-y-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                              <Phone className="w-3 h-3" />
                              <span>{founder.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                              <Mail className="w-3 h-3" />
                              <span>{founder.email}</span>
                            </div>
                          </div>

                          <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                            <div className="flex flex-wrap gap-1">
                              {founder.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 text-xs border border-white/20 bg-white/10"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600">
                            <Instagram className="w-4 h-4 cursor-pointer hover:text-white transition-colors transform hover:scale-110" />
                            <Linkedin className="w-4 h-4 cursor-pointer hover:text-white transition-colors transform hover:scale-110" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3D Lighting Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>

                    {/* Dynamic Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform rotate-45 translate-x-full group-hover:translate-x-0"></div>
                  </div>

                  {/* Enhanced 3D Drop Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 blur-2xl transform translate-y-8 translate-x-4 opacity-0 group-hover:opacity-70 transition-all duration-700 -z-10 scale-95 group-hover:scale-110"></div>

                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 -z-20 scale-90 group-hover:scale-120"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center border border-white/20 p-6 backdrop-blur-sm bg-white/5"
              >
                <div className="text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Logo */}
        <Footer />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-2 h-20 bg-white/10 rotate-45"></div>
      <div className="absolute bottom-1/3 left-10 w-2 h-16 bg-white/10 rotate-12"></div>
    </div>
  );
};

export default AboutSection;