import React from 'react';
import { PhoneIcon, CalendarIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }}></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Everett Barbershop
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Classic cuts and modern styles by skilled barbers in a traditional
          atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-white text-black hover:bg-gray-200 py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300">
            <PhoneIcon size={20} className="mr-2" />
            Call Now
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300">
            <CalendarIcon size={20} className="mr-2" />
            Book Appointment
          </a>
        </div>
      </div>
    </section>;
}