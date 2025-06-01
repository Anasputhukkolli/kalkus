import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Globe,
  Share2,
  Video,
  Code,
  Camera,
  Megaphone,
  Zap,
} from "lucide-react";

export default function ResponsiveCreativeStudio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      id: "branding",
      icon: <Palette size={32} />,
      title: "BRANDING",
      color: "from-pink-500 to-rose-500",
      link: "/branding",

    },
    {
      id: "website",
      icon: <Globe size={32} />,
      title: "WEBSITE",
      color: "from-blue-500 to-cyan-500",
      link: "/website",
    },
    {
      id: "social",
      icon: <Share2 size={32} />,
      title: "SOCIAL",
      color: "from-purple-500 to-violet-500",
      link: "/socials",
    },
    {
      id: "production",
      icon: <Video size={32} />,
      title: "PRODUCTION",
      color: "from-green-500 to-emerald-500",
      link: "/production",
    },
  ];

  const desktopServices = [
    {
      id: "branding",
      icon: <Palette size={32} />,
      title: "Branding",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "website",
      icon: <Globe size={32} />,
      title: "Website",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "social",
      icon: <Share2 size={32} />,
      title: "Social Media",
      color: "from-purple-500 to-violet-500",
    },
    {
      id: "production",
      icon: <Video size={32} />,
      title: "Production",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "development",
      icon: <Code size={32} />,
      title: "Development",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "photography",
      icon: <Camera size={32} />,
      title: "Photography",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: "marketing",
      icon: <Megaphone size={32} />,
      title: "Marketing",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "consulting",
      icon: <Zap size={32} />,
      title: "Consulting",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Desktop Spotlight Effect */}

      {/* Desktop Animated Grid Background */}
      <div className="hidden md:block absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            animation: "grid-move 25s linear infinite",
          }}
        />
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden relative z-10 min-h-screen flex flex-col px-4 py-8">
        {/* Mobile Header */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center">
            <h1 className="text-lg font-light leading-relaxed mb-6">
              WE ARE A{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                CREATIVE STUDIO
              </span>{" "}
              BASED ON Kerala
              <br />
              SPECIALIZING IN{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                DESIGN
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                MOTION
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                WEB
              </span>{" "}
              AND{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                SOCIAL
              </span>
            </h1>

            <Link href="/about">
              <button className="group w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 flex items-center justify-between">
                <span>ABOUT US</span>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Services */}
        <div className="flex-1 flex flex-col justify-center">
          <div
            className={`mb-8 transform transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">
              WHAT ARE YOU
              <br />
              <span className="text-white">LOOKING FOR?</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mb-8"></div>
          </div>

          <div
            className={`space-y-4 transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {services.map((service, index) => (
              <Link href={`${service.link}`}>
                <div
                  key={service.id}
                  className={`group border-b border-blue-500/30 pb-4 cursor-pointer transform transition-all duration-300 hover:translate-x-2 ${
                    index === services.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex relative z-10 min-h-screen flex-col items-center justify-center px-6 py-12">
        {/* Desktop Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              What are you
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-4">
              looking for?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose your path and let us bring your vision to life with our
            expert services.
          </p>
        </div>

        {/* Desktop Services Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {desktopServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              // onMouseEnter={() => setHoveredItem(service.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`
                relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 
                hover:border-white/30 transition-all duration-300 cursor-pointer
                transform hover:-translate-y-3 hover:scale-105
                ${hoveredItem === service.id ? "shadow-2xl" : ""}
              `}
              >
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                  group-hover:opacity-20 transition-all duration-300
                `}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4
                    bg-gradient-to-br ${service.color} text-white
                    transform group-hover:scale-110 transition-transform duration-300
                  `}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Bottom CTA */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-500 mb-6">
            Not sure what you need? Let's discuss your project.
          </p>
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Elements */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
