import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['all', 'real-estate', 'e-commerce', 'portraits', 'fashion'];
  
  const portfolioItems = [
    {
      id: 1,
      category: 'real-estate',
      title: 'Luxury Villa Enhancement',
      before: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'HDR processing and sky replacement for stunning property showcase'
    },
    {
      id: 2,
      category: 'e-commerce',
      title: 'Product Background Removal',
      before: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean background removal for professional e-commerce listings'
    },
    {
      id: 3,
      category: 'portraits',
      title: 'Professional Headshot Retouching',
      before: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Natural skin retouching and professional enhancement'
    },
    {
      id: 4,
      category: 'fashion',
      title: 'High Fashion Color Grading',
      before: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Editorial color grading and artistic enhancement'
    },
    {
      id: 5,
      category: 'real-estate',
      title: 'Interior Space Enhancement',
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Lighting correction and space optimization'
    },
    {
      id: 6,
      category: 'portraits',
      title: 'Wedding Portrait Enhancement',
      before: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Romantic color grading and skin retouching'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const BeforeAfterSlider = ({ item }: { item: typeof portfolioItems[0] }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
      <div className="relative overflow-hidden rounded-xl h-64 group cursor-pointer">
        <div className="relative w-full h-full">
          <img 
            src={item.before} 
            alt={`${item.title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={item.after} 
              alt={`${item.title} - After`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={(e) => {
              const rect = e.currentTarget.parentElement?.getBoundingClientRect();
              if (!rect) return;
              
              const handleMouseMove = (e: MouseEvent) => {
                const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.max(0, Math.min(100, newPosition)));
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-1 h-4 bg-gray-400"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
          AFTER
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-black/50 to-purple-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See the transformative power of our professional photo editing services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <BeforeAfterSlider item={item} />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                    {item.category.replace('-', ' ')}
                  </span>
                  <Eye className="w-5 h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform shadow-2xl">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;