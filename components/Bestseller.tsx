import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCard {
  id: number;
  name: string;
  category: string;
  image: string;
}

const bestSellers: ProductCard[] = [
  {
    id: 1,
    name: "916 Tequila",
    category: "Premium Tequila",
    image: "/916-tequila.webp",
  },
  {
    id: 2,
    name: "Papacito",
    category: "Premium Tequila",
    image: "/papacito-tequila.png",
  },
  {
    id: 3,
    name: "Xochimilco",
    category: "Premium Tequila",
    image: "/xochimilco.png",
  }
];

const ProductCard: React.FC<ProductCard> = ({ name, category, image }) => {
  return (
    <div className="group relative">
      <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900/20 to-neutral-900/40">
        {/* Image container with hover effect */}
        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
          <Image
            src={image}
            alt={name}
            fill
            className="object-fill"
            quality={100}
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Product info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-gray-700 text-sm tracking-wider mb-1">{category}</p>
          <h3 className="text-black mb-2 text-lg font-semibold">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Bestseller = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
              Best Sellers
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>
          
          <Link 
            href="/spirits"
            className="group flex items-center space-x-2 text-amber-800 hover:text-amber-600 transition-colors duration-300"
          >
            <span className="text-sm sm:text-base">All Spirits</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestseller;