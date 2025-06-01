"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Twitter, Instagram, Github, ChevronDown } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoonPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Countdown timer - set to 30 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  interface FloatingElementProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }

  const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`animate-pulse ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full opacity-60">
          <div></div>
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-40">
          <div></div>
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full opacity-50">
          <div></div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="absolute top-60 left-1/3 w-5 h-5 bg-blue-400 rounded-full opacity-30">
          <div></div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="absolute bottom-20 right-1/3 w-4 h-4 bg-red-400 rounded-full opacity-40">
          <div></div>
        </FloatingElement>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Logo/Brand */}
        {/* <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
            KALKUS
          </div>
        </div> */}

        {/* Main heading with animation */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Coming
          </span>
          <br />
          <span className="text-white">Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Something amazing is brewing. We're putting the finishing touches on our new experience.
        </p>

        {/* Countdown timer */}
        
        {/* Email subscription */}
        <div className="w-full max-w-md mb-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          {isSubscribed ? (
            <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-lg p-4 text-green-300">
              ✓ Thanks for subscribing! We'll notify you when we launch.
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3  bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-opacity-20 transition-all duration-300"
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSubscribe(e)}
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Notify Me
              </button>
            </div>
          )}
        </div>

        {/* Social links */}
        <div className="flex space-x-6 mb-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {[
            { Icon: Twitter, href: '#', label: 'Twitter' },
            { Icon: Instagram, href: '#', label: 'Instagram' },
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Mail, href: '#', label: 'Email' }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12  bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transform hover:scale-110 transition-all duration-300 border border-white border-opacity-20"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Development Progress</span>
            <span>85%</span>
          </div>
          <div className="w-full  bg-opacity-10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '85%' }}
            ></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-white opacity-60" size={24} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;