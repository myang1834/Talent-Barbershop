import React from 'react';
import { BookNow } from './BookNow';
export function Hero() {
  return <section id="home" className="relative h-screen w-full bg-[#000000]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{
      backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/9nnvmokENQkUy8KgjSMoK8/IMG_6024.jpg')"
    }} aria-hidden="true"></div>
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
          Talent Barbershop | Professional Haircuts in Everett, MA
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl text-shadow-md">
          Classic cuts and modern styles by skilled barbers. Family-friendly
          barbershop serving Everett, Massachusetts since 2019.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <BookNow className="bg-[#C0111F] text-white hover:bg-[#9a0e19] py-3 px-8 rounded-full font-semibold flex items-center justify-center transition-colors duration-300 text-lg" />
        </div>
      </div>
    </section>;
}