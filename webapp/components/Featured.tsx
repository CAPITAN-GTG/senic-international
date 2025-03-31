import React from 'react';
import Image from 'next/image';

const logos = [
  {
    src: '/senic.png',
    alt: 'Senic International',
    width: 180,
    height: 60
  },
  {
    src: '/916.svg',
    alt: '916 Tequila',
    width: 140,
    height: 60
  },
  {
    src: '/papacito.svg',
    alt: 'Papacito',
    width: 140,
    height: 60
  },
  {
    src: '/infernus.svg',
    alt: 'Infernus',
    width: 140,
    height: 60
  }
];

const Featured = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-medium text-gray-600 tracking-wider uppercase">
            Featured Brands
          </h2>
          <div className="mt-2 mx-auto w-16 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={logo.alt}
              className="w-full flex justify-center group"
            >
              <div className="relative w-full max-w-[140px] h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="hidden md:block">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Featured; 