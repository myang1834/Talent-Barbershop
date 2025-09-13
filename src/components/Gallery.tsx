import React, { useState } from 'react';
import { X } from 'lucide-react';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = ['https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1519345274080-c89e7a8e8b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'];
  return <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent haircuts and styles.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:transform hover:scale-105" onClick={() => setSelectedImage(image)}>
              <img src={image} alt={`Haircut example ${index + 1}`} className="w-full h-full object-cover" />
            </div>)}
        </div>
        {/* Lightbox */}
        {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Enlarged haircut" className="max-w-full max-h-[90vh] object-contain" />
          </div>}
      </div>
    </section>;
}