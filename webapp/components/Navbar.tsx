"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

interface NavItemProps {
  title: string;
  items?: { name: string; href: string }[];
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, items, href }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items) {
    return (
      <div className="relative group">
        <button
          className="flex items-center px-3 py-2 text-white hover:text-yellow-500"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {title}
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-md shadow-lg py-2 z-50"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link href={href || '#'} className="px-3 py-2 text-white hover:text-yellow-500">
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Wines',
      items: [
        { name: 'Red Wines', href: '/wines/red' },
        { name: 'White Wines', href: '/wines/white' },
        { name: 'Sparkling Wines', href: '/wines/sparkling' },
        { name: 'Sweet Wines', href: '/wines/sweet' },
      ]
    },
    {
      title: 'Spirits',
      items: [
        { name: 'Tequilas', href: '/spirits/tequilas' },
        { name: 'Vodka', href: '/spirits/vodka' },
        { name: 'Mezcal', href: '/spirits/mezcal' },
        { name: 'Agave Distillate', href: '/spirits/agave-distillate' },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About us', href: '/company/about' },
        { name: 'Sales Tools', href: '/company/sales-tools' },
        { name: 'New Customer', href: '/company/new-customer' },
        { name: 'Contact', href: '/company/contact' },
      ]
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed w-full z-50 bg-transparent hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left side - Navigation */}
            <div className="flex items-center space-x-4 ">
              {navItems.map((item) => (
                <NavItem key={item.title} {...item} />
              ))}
            </div>

            {/* Center - Brand */}
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold text-white">Senic International</h1>
              <p className="text-sm text-gray-200">Spirit Distributor</p>
            </div>

            {/* Right side - Search and Icons */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full text-black bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="text-gray-200 hover:text-yellow-500">
                <User className="h-6 w-6" />
              </button>
              <button className="text-gray-200 hover:text-yellow-500">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        {/* Top Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="flex justify-between items-center px-4 h-16">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-bold text-gray-900">Senic International</h1>
              <p className="text-xs text-gray-600">Spirit Distributor</p>
            </div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 text-black rounded-full bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Mobile Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
          <div className="flex justify-around items-center h-16 px-4">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides from top */}
        {isMobileMenuOpen && (
          <div className="fixed top-16 left-0 right-0 bottom-16 z-40 bg-white/95 backdrop-blur-sm overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="px-3 py-2">
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className="block text-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <div className="font-medium text-gray-900 mb-2">{item.title}</div>
                      <div className="pl-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;