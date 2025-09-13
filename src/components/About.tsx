import React from 'react';
import { Scissors, Award, Clock } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Our Barbershop
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Barbershop interior" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, Everett Barbershop has been providing exceptional
              haircuts and grooming services to the Everett community. Our
              passion for the craft and dedication to customer satisfaction has
              made us a trusted name in men's grooming.
            </p>
            <p className="text-gray-700 mb-8">
              We combine traditional barbering techniques with modern styles to
              give you the perfect look. Our experienced barbers are skilled in
              classic cuts, fades, beard trims, and hot towel shaves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <Scissors size={24} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">Expert Barbers</h4>
                <p className="text-sm text-gray-600">
                  Skilled professionals with years of experience
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">Quality Service</h4>
                <p className="text-sm text-gray-600">
                  Premium products and attention to detail
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">Convenient Hours</h4>
                <p className="text-sm text-gray-600">
                  Open 7 days a week for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}