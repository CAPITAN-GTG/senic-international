import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Winespectator = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/wine-spectator-bg.jpg"
          alt="Wine Spectator Background"
          fill
          className="object-cover object-center transform scale-110"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col justify-center h-full max-w-xl">
          {/* Animated Line */}
          <div className="w-20 h-0.5 bg-amber-400 mb-8 opacity-0 animate-fade-in-slide" />

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 opacity-0 animate-fade-in-slide-delayed">
            Wine Spectator
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 opacity-0 animate-fade-in-slide-more-delayed">
            A wine with a deep purplish color and highly intense aromas of black fruit, morello cherries and raspberries
            complemented by vanilla notes from oak aging. Long, smooth and persistent in the mouth.
          </p>

          {/* Button */}
          <div className="opacity-0 animate-fade-in-slide-most-delayed">
            <Link 
              href="/wines"
              className="group inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors duration-300"
            >
              <span className="relative text-lg">
                Read More
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add these animations to your globals.css
const styles = `
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-slide {
  animation: fadeInSlide 0.8s ease-out forwards;
}

.animate-fade-in-slide-delayed {
  animation: fadeInSlide 0.8s ease-out 0.2s forwards;
}

.animate-fade-in-slide-more-delayed {
  animation: fadeInSlide 0.8s ease-out 0.4s forwards;
}

.animate-fade-in-slide-most-delayed {
  animation: fadeInSlide 0.8s ease-out 0.6s forwards;
}
`;

export default Winespectator;