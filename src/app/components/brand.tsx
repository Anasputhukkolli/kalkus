import React from 'react';
import { Award } from 'lucide-react';

export default function AutoSlidingLogos() {
  // Company logos - replace these URLs with your actual logo images
  const companies = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/512px-Spotify_logo_without_text.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.svg/512px-Adobe_Corporate_Logo.svg.png" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/512px-Uber_logo_2018.png" },
    { name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback if image fails to load
    const target = e.target as HTMLImageElement;
    const nextSibling = target.nextSibling as HTMLElement;
    target.style.display = 'none';
    nextSibling.style.display = 'flex';
  };

  return (
    <section className=" bg-gradient-to-br  overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">Trusted Partners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-4">
            Brands We've
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Worked With</span>
          </h2>
          
          <p className="text-xl text-white-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional branding solutions
          </p>
        </div>

        {/* Auto-Sliding Logos */}
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg py-12">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Sliding Container */}
          <div className="flex animate-slide gap-16">
            {/* First Set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={handleImageError}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-gray-500 font-semibold text-sm">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Second Set (for seamless loop) */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={handleImageError}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-gray-500 font-semibold text-sm">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Third Set (for extra smoothness) */}
            {companies.map((company, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={handleImageError}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-gray-500 font-semibold text-sm">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-slide {
          animation: slide 40s linear infinite;
          width: max-content;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}