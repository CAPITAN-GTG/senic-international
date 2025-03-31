import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  const workingHours = [
    { day: 'Monday', hours: '8:30 AM – 5:30 PM', isOpen: true },
    { day: 'Tuesday', hours: '8:30 AM – 5:30 PM', isOpen: true },
    { day: 'Wednesday', hours: '8:30 AM – 5:30 PM', isOpen: true },
    { day: 'Thursday', hours: '8:30 AM – 5:30 PM', isOpen: true },
    { day: 'Friday', hours: '8:30 AM – 5:30 PM', isOpen: true },
    { day: 'Saturday', hours: 'Closed', isOpen: false },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-32 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 font-playfair">
              Senic International
            </h2>
            <div className="space-y-4">
              <a 
                href="tel:+19093215600" 
                className="flex items-center space-x-3 text-amber-600 hover:text-amber-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+1 909-321-5600</span>
              </a>
              <a 
                href="https://maps.google.com/?q=1670+Hamner+Ave,+Norco,+California,+92860"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-gray-900 transition-colors group"
              >
                <MapPin className="h-5 w-5 text-amber-600 group-hover:text-amber-700" />
                <span className="leading-tight">
                  1670 Hamner Ave, Norco,<br />
                  California, 92860, EE. UU.
                </span>
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Menu</h3>
            <nav className="space-y-4">
              <Link href="/" className="block hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/wines" className="block hover:text-gray-900 transition-colors">Wines</Link>
              <Link href="/spirits" className="block hover:text-gray-900 transition-colors">Spirits</Link>
              <Link href="/company" className="block hover:text-gray-900 transition-colors">Company</Link>
              <Link href="/contact" className="block hover:text-gray-900 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
              </div>
              
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div 
                    key={schedule.day}
                    className={`flex items-center justify-between p-2 rounded-lg transition-colors
                      ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      ${schedule.isOpen ? 'border-l-4 border-amber-500' : 'border-l-4 border-gray-200'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900 w-24">{schedule.day}</span>
                      <span className={`${schedule.isOpen ? 'text-gray-700' : 'text-gray-400'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                    {schedule.isOpen && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                        Open
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  * Hours may vary during holidays
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Senic International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 