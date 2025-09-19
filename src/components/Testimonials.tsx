import React from 'react';
import { Star } from 'lucide-react';
interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
  image?: string;
  initial?: string;
  initialBgColor?: string;
  date: string;
}
function AvatarInitial({
  initial,
  bgColor = '#003278'
}: {
  initial: string;
  bgColor?: string;
}) {
  return <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg" style={{
    backgroundColor: bgColor
  }}>
      {initial}
    </div>;
}
function TestimonialCard({
  name,
  rating,
  text,
  image,
  initial,
  initialBgColor,
  date
}: TestimonialProps) {
  return <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        {image ? <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" /> : initial ? <AvatarInitial initial={initial} bgColor={initialBgColor} /> : null}
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-300'} />)}
            </div>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-3">{text}</p>
      <div className="flex items-center">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 mr-2" />
        <span className="text-xs text-gray-500">Posted on Google</span>
      </div>
    </div>;
}
export function Testimonials() {
  const testimonials = [{
    name: 'Jess Jollymore',
    rating: 5,
    text: 'All the staff were extremely friendly and made my son feel super comfortable as soon as we walked in! They have a little toy section which I thought was so awesome. Ben cut my sons hair and he was beyond patient with him and made sure to keep him engaged and distracted throughout the whole haircut. Will definitely be recommending them to anyone looking for a barber!',
    image: "/pasted-image.png",
    date: '4 months ago'
  }, {
    name: 'Mouhamad Alnajjar',
    rating: 5,
    text: 'Came to give me son his first haircut and the service was phenomenal! They were very patient and kind with the whole process. Was having a tough time trying to find a place for my son and thank god I stumbled upon here. I will definitely continue to come again for all his cuts. Owner is great as well, all around very professional and friendly environment!',
    initial: 'M',
    initialBgColor: '#C0111F',
    date: '6 days ago'
  }, {
    name: 'Kelly Atkins',
    rating: 5,
    text: "I couldn't have been happier not just with my two boys (4 and ) haircuts but the whole experience. We felt truly welcomed here and each barber really cared! They went above and beyond to make sure the haircuts were successful. When you have a son with disabilities it's hard to find a place like this! So happy we did!",
    initial: 'K',
    initialBgColor: '#003278',
    date: 'a month ago'
  }];
  return <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003278]">
            See what our customers are saying
          </h2>
          <div className="w-24 h-1 bg-[#C0111F] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied clients who trust us with their style
            and confidence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-[#FBBC05] fill-[#FBBC05]" />)}
              </div>
            </div>
            <p className="text-gray-700 mt-2 mb-6">
              Enjoyed your experience? We'd love to hear about it!
            </p>
          </div>
          <a href="https://g.page/r/CcHxBUJbRZALEBM/review" target="_blank" rel="noopener noreferrer" className="bg-[#4285F4] text-white hover:bg-[#3367D6] py-3 px-8 rounded-full font-semibold inline-flex items-center justify-center transition-colors duration-300 text-lg mb-4">
            Review us on Google
          </a>
          <div className="mt-4 flex justify-center">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
          </div>
        </div>
      </div>
    </section>;
}