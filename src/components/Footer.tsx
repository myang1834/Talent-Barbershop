import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Everett Barbershop</h3>
            <p className="text-gray-400 mb-4">
              Providing quality haircuts and grooming services since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Team', 'Contact'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Everett Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}