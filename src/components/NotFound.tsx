import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Scissors, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function NotFound() {

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Talent Barbershop</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Talent Barbershop for professional haircuts and grooming services in Everett, MA." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo and 404 */}
          <div className="mb-8">
            <img src="/0_0.png" alt="Talent Barbershop Logo" className="h-20 mb-6 mx-auto" />
            <div className="flex items-center justify-center mb-4">
              <Scissors className="text-[#C0111F] mr-3" size={32} />
              <h1 className="text-6xl font-bold text-[#003278]">404</h1>
              <Scissors className="text-[#C0111F] ml-3" size={32} />
            </div>
          </div>

          {/* Main message */}
          <h2 className="text-3xl font-bold text-[#003278] mb-4">
            Oops! This Page Got a Bad Haircut
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            The page you're looking for seems to have disappeared like a fade that went too short. 
            Don't worry - we'll get you back to looking sharp in no time!
          </p>

          {/* Navigation message */}
          <div className="mb-8 p-6 bg-white rounded-xl border-2 border-gray-100 shadow-sm">
            <p className="text-gray-600 text-lg">
              Use the buttons below to navigate back to our website
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/" 
              className="bg-[#C0111F] text-white hover:bg-[#9a0e19] py-4 px-8 rounded-full font-semibold flex items-center justify-center transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Home size={20} className="mr-2" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="bg-[#003278] text-white hover:bg-[#002255] py-4 px-8 rounded-full font-semibold flex items-center justify-center transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </button>
          </div>

          {/* Contact info */}
          <div className="bg-[#003278] text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Need Help? We're Here!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:8572372107" 
                className="flex items-center text-white hover:text-[#C0111F] transition-colors duration-300"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-semibold">(857) 237-2107</span>
              </a>
              <div className="hidden sm:block text-gray-300">|</div>
              <div className="flex items-center text-white">
                <MapPin size={18} className="mr-2" />
                <span>6 Chelsea St, Everett, MA</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-200">
              Open Mon-Thu 9AM-8PM, Fri-Sat 8AM-8PM, Sun 9AM-3PM
            </p>
          </div>

          {/* Quick links */}
          <div className="mt-8">
            <p className="text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/#services" className="text-[#003278] hover:text-[#C0111F] transition-colors duration-300">
                Services
              </Link>
              <Link to="/#gallery" className="text-[#003278] hover:text-[#C0111F] transition-colors duration-300">
                Gallery
              </Link>
              <Link to="/#team" className="text-[#003278] hover:text-[#C0111F] transition-colors duration-300">
                Team
              </Link>
              <Link to="/#contact" className="text-[#003278] hover:text-[#C0111F] transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}