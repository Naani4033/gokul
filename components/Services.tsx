import React, { useState } from 'react';
import { Camera, Edit3, Palette, Sparkles, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Camera,
      title: "Real Estate Photography",
      description: "Transform property images with HDR enhancement, sky replacement, and virtual staging",
      features: ["HDR Processing", "Sky Replacement", "Virtual Staging", "Perspective Correction"],
      price: "Starting at $15/image",
      turnaround: "12 hours"
    },
    {
      icon: Edit3,
      title: "E-commerce Product Editing",
      description: "Professional product images with background removal and color correction",
      features: ["Background Removal", "Color Correction", "Shadow Creation", "Bulk Processing"],
      price: "Starting at $5/image",
      turnaround: "12 hours"
    },
    {
      icon: Palette,
      title: "Portrait Retouching",
      description: "Natural-looking portrait enhancements and beauty retouching",
      features: ["Skin Retouching", "Teeth Whitening", "Eye Enhancement", "Hair Styling"],
      price: "Starting at $10/image",
      turnaround: "12 hours"
    },
    {
      icon: Sparkles,
      title: "Creative Manipulation",
      description: "Artistic photo manipulations and composite creations",
      features: ["Photo Compositing", "Fantasy Effects", "Artistic Filters", "Digital Art"],
      price: "Starting at $25/image",
      turnaround: "24 hours"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive photo editing solutions tailored to your specific needs with industry-leading quality and speed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Price:</span>
                  <span className="text-purple-400 font-semibold">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Turnaround:</span>
                  <span className="text-green-400 font-semibold">{service.turnaround}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white py-3 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Featured Service Details */}
        <div className="mt-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Featured: {services[activeService].title}
              </h3>
              <p className="text-white/80 text-lg mb-6">
                {services[activeService].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-white/70 text-sm">Quality</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                {React.createElement(services[activeService].icon, { className: "w-20 h-20 text-purple-400" })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;