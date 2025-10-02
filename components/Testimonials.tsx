import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Agent",
      company: "Premier Properties",
      text: "PixelCraft transformed our property listings completely. The virtual staging is incredibly realistic and has increased our conversion rates by 60%. Their attention to detail is unmatched!",
      rating: 5,
      avatar: "SJ",
      results: "60% increase in conversions"
    },
    {
      name: "Michael Chen",
      role: "E-commerce Owner",
      company: "Fashion Forward",
      text: "Their product editing service increased our conversion rates by 40%. The background removal is flawless, and the turnaround time is incredible. Absolutely phenomenal work!",
      rating: 5,
      avatar: "MC",
      results: "40% increase in sales"
    },
    {
      name: "Emma Rodriguez",
      role: "Wedding Photographer",
      company: "Eternal Moments",
      text: "The portrait retouching is natural and beautiful. My clients are always amazed by the results. PixelCraft has become an essential part of my workflow.",
      rating: 5,
      avatar: "ER",
      results: "100% client satisfaction"
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      company: "TechStart Inc.",
      text: "Professional headshots for our entire team were delivered in 24 hours. The quality exceeded our expectations, and the process was seamless from start to finish.",
      rating: 5,
      avatar: "DK",
      results: "24hr delivery time"
    },
    {
      name: "Lisa Thompson",
      role: "Interior Designer",
      company: "Design Studios",
      text: "The architectural photography enhancement brought our projects to life. The lighting corrections and perspective adjustments were exactly what we needed.",
      rating: 5,
      avatar: "LT",
      results: "50% more inquiries"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-white/70">What our clients say about our work</p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-purple-400/20" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
              <div className="lg:col-span-2">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-2xl text-white/90 italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30 inline-block">
                  <div className="text-green-400 font-semibold text-lg">
                    Result: {testimonials[currentTestimonial].results}
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto lg:mx-0 lg:ml-auto mb-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{testimonials[currentTestimonial].name}</h4>
                <p className="text-purple-300 font-semibold mb-1">{testimonials[currentTestimonial].role}</p>
                <p className="text-white/60">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-purple-500/50' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-white/80 text-sm italic mb-4">"{testimonial.text.slice(0, 100)}..."</p>
              
              <div className="text-green-400 text-xs font-semibold">
                {testimonial.results}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;