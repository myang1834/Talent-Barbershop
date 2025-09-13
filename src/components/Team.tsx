import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
interface BarberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}
function BarberCard({
  name,
  role,
  bio,
  image,
  socials
}: BarberProps) {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-500 mb-4">{role}</p>
        <p className="text-gray-600 mb-6">{bio}</p>
        <div className="flex space-x-4">
          {socials.instagram && <a href={socials.instagram} className="text-gray-600 hover:text-black transition-colors duration-300">
              <Instagram size={20} />
            </a>}
          {socials.facebook && <a href={socials.facebook} className="text-gray-600 hover:text-black transition-colors duration-300">
              <Facebook size={20} />
            </a>}
          {socials.twitter && <a href={socials.twitter} className="text-gray-600 hover:text-black transition-colors duration-300">
              <Twitter size={20} />
            </a>}
        </div>
      </div>
    </div>;
}
export function Team() {
  const barbers = [{
    name: 'James Wilson',
    role: 'Master Barber & Owner',
    bio: 'With over 15 years of experience, James specializes in classic cuts and hot towel shaves.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    socials: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  }, {
    name: 'Michael Rodriguez',
    role: 'Senior Barber',
    bio: "Michael is known for his precision fades and creative designs. He's been with us for 5 years.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    socials: {
      instagram: '#',
      facebook: '#'
    }
  }, {
    name: 'David Thompson',
    role: 'Barber',
    bio: 'David specializes in modern styles and beard grooming. His attention to detail is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    socials: {
      instagram: '#',
      twitter: '#'
    }
  }];
  return <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our skilled barbers are dedicated to giving you the perfect cut and
            an exceptional experience.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, index) => <BarberCard key={index} {...barber} />)}
        </div>
      </div>
    </section>;
}