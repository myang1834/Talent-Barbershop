import React from 'react';
import { Star, Shield, Award } from 'lucide-react';

interface ProductProps {
  name: string;
  description: string;
  image: string;
  features: string[];
  volume: string;
}

function ProductCard({
  name,
  description,
  image,
  features,
  volume
}: ProductProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-80 object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#003278]">{name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Shield className="text-[#003278] mr-2" size={16} />
            <span className="text-sm font-medium text-gray-700">Volume: {volume}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#003278] mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <Star className="text-[#C0111F] mr-2" size={12} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export function Products() {
  const products = [
    {
      name: 'Talent Beard Oil',
      description: 'Premium beard oil crafted with natural ingredients to nourish, condition, and style your beard. Our signature blend keeps your facial hair soft, manageable, and looking its best.',
      image: '/IMG_6144.JPG', // Using one of your existing images as placeholder
      features: [
        'Natural ingredients from Brazil',
        '30ML / 1.01 FLOZ',
        'Nourishes and conditions',
        'Reduces itchiness and irritation',
        'Lightweight, non-greasy formula'
      ],
      volume: '30ML / 1.01 FLOZ'
    },
    {
      name: 'Talent Shine Pomade Extreme',
      description: 'Professional-grade pomade for the perfect hold and shine. Our extreme formula provides maximum control while maintaining a natural, healthy look for your hair.',
      image: '/IMG_6142.JPG', // Using one of your existing images as placeholder
      features: [
        'Extreme hold and shine',
        '100g / 3.52oz',
        'Natural ingredients',
        'Easy to wash out',
        'Professional barber quality'
      ],
      volume: '100g / 3.52oz'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003278]">
            Professional Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the Talent Barbershop experience home with our premium grooming products, 
            crafted with the same quality and care we bring to every cut.
          </p>
          <div className="w-24 h-1 bg-[#C0111F] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-[#003278] text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Why Choose Talent Products?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#C0111F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Professional Quality</h4>
                <p className="text-sm text-gray-200">Same products used by our master barbers</p>
              </div>
              <div className="text-center">
                <div className="bg-[#C0111F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Natural Ingredients</h4>
                <p className="text-sm text-gray-200">Premium, natural ingredients for healthy hair</p>
              </div>
              <div className="text-center">
                <div className="bg-[#C0111F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Made in USA</h4>
                <p className="text-sm text-gray-200">Proudly manufactured in the United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
