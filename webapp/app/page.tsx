"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Bestseller from '@/components/Bestseller';
import Winespectator from '@/components/Winespectator';
import Featured from '@/components/Featured';

const FrontPage = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.1)_1px,transparent_1px)] bg-[length:24px_24px] rotate-45 pointer-events-none" />
        </div>

        <div className="relative h-screen">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 h-full items-center">
              {/* Left Content */}
              <div className="relative z-10 lg:col-span-6 lg:col-start-2 space-y-8 text-center lg:text-left pt-20 lg:pt-0">
                <div className="space-y-6">
                  {/* Small Title */}
                  <h2 className="text-xl sm:text-2xl font-light tracking-[0.2em] text-amber-300 uppercase">
                    The Best
                  </h2>
                  
                  {/* Main Title */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-playfair text-white">
                    Liquors
                    <span className="block text-amber-400">Brands</span>
                  </h1>
                  
                  {/* Body Text */}
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-xl mx-auto lg:mx-0">
                    Under the leadership of our dynamic team,
                    our corporation continues a tradition of bringing premiums wines and spirits to California and the whole USA supported by an unsurpassed team of dedicated professionals.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="pt-8">
                    <Link 
                      href="/about"
                      className="inline-block px-12 py-4 text-base sm:text-lg border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 tracking-wider uppercase relative overflow-hidden group"
                    >
                      <span className="relative z-10">View More</span>
                      <div className="absolute inset-0 bg-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </Link>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-amber-400 to-transparent" />
              </div>

              {/* Right Content - Bottles Image */}
              <div className="relative hidden lg:block lg:col-span-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%]">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 blur-3xl bg-amber-400/20 rounded-full" />
                    
                    {/* Image */}
                    <Image
                      src="/hero-image.png"
                      alt="Premium Liquor Collection"
                      width={800}
                      height={1000}
                      className="relative z-10 object-contain w-full h-full"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Bottles Image */}
              <div className="relative lg:hidden -mt-12">
                <Image
                  src="/hero-image.png"
                  alt="Premium Liquor Collection"
                  width={400}
                  height={500}
                  className="object-contain w-full h-full"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>
      <Bestseller />
      <Winespectator />
      <Featured />
    </main>
  );
};

export default FrontPage;