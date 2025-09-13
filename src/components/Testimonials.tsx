import React from 'react';
import { Star } from 'lucide-react';
interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
  image: string;
}
function TestimonialCard({
  name,
  rating,
  text,
  image
}: TestimonialProps) {
  return <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} />)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </div>;
}
export function Testimonials() {
  const testimonials = [{
    name: 'John D.',
    rating: 5,
    text: 'Best barbershop in Everett! James always gives me the perfect cut and the atmosphere is great. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    name: 'Robert M.',
    rating: 5,
    text: "I've been coming here for years and have never been disappointed. The hot towel shave is a must-try experience.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    name: 'Mike T.',
    rating: 4,
    text: "Great service and friendly staff. Michael does an amazing job with fades. The only reason for 4 stars is sometimes there's a wait.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  return <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </div>
    </section>;
}