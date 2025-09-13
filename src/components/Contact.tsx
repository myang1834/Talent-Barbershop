import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our shop or get in touch to book your appointment.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-600">
                      123 Main Street, Everett, WA 98201
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-black rounded-full p-3 mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">(425) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-black rounded-full p-3 mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">info@everettbarbershop.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-black rounded-full p-3 mr-4">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9am - 7pm</p>
                    <p className="text-gray-600">Saturday: 9am - 5pm</p>
                    <p className="text-gray-600">Sunday: 10am - 4pm</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Book an Appointment</h4>
                <a href="tel:4255551234" className="bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-full font-semibold inline-block transition-colors duration-300">
                  Call Now
                </a>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            {/* This would typically be a Google Map, but for now we'll use a placeholder */}
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Everett,WA&zoom=14&size=600x400&markers=color:red%7CLabel:B%7CEverett,WA&key=YOUR_API_KEY" alt="Map location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
}