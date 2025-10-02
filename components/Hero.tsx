import React, { useState, useEffect } from 'react';
import {
  Play, Sparkles, Zap, Camera, Phone, MessageCircle, Instagram, Linkedin,
  Upload, Eye, Users, Clock, Star, Edit3, Palette, Layers, Wand2, Image,
  MousePointer, RotateCcw, Crop, Filter
} from 'lucide-react';

// import backgroundLogo from '../assets/Propic.png'; // ✅ Make sure this path is correct

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentAction, setCurrentAction] = useState(0);

  const words = ['Transform', 'Enhance', 'Perfect', 'Elevate'];
  const editingActions = [
    { icon: Edit3, text: 'Retouching...', color: 'text-blue-400' },
    { icon: Palette, text: 'Color Grading...', color: 'text-green-400' },
    { icon: Crop, text: 'Cropping...', color: 'text-yellow-400' },
    { icon: Filter, text: 'Filtering...', color: 'text-purple-400' },
    { icon: Layers, text: 'Compositing...', color: 'text-pink-400' },
    { icon: Wand2, text: 'Magic Touch...', color: 'text-cyan-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prev) => (prev + 1) % editingActions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+916383836187',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us',
      href: 'https://wa.me/15551234567',
      color: 'from-green-400 to-green-600',
      hoverColor: 'hover:from-green-500 hover:to-green-700'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@pixelcraft',
      href: 'https://instagram.com/pixelcraft',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: 'https://linkedin.com/company/pixelcraft',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black text-white">
      
      {/* ✅ Background Image */}
     {/* <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10 z-0"
        style={{ backgroundImage: `url(${backgroundLogo})` }}
      />*/}

      {/* ✅ Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {[...Array(15)].map((_, i) => {
          const icons = [Camera, Edit3, Palette, Layers, Wand2, Image, Crop, Filter];
          const IconComponent = icons[i % icons.length];
          return (
            <IconComponent
              key={i}
              className="absolute w-6 h-6 text-purple-400/20 animate-bounce opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
              {words[currentWord]}
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Visual Story
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional photo editing services that bring your images to life with cutting-edge AI technology and expert human touch. 
            <span className="text-purple-300 font-semibold animate-pulse"> Transform ordinary photos into extraordinary masterpieces.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 animate-pulse">
              <span className="flex items-center justify-center gap-3">
                <Upload className="w-6 h-6 group-hover:animate-bounce" />
                Start Free Trial
                <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-white/30 px-10 py-5 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-purple-400 group">
              <span className="flex items-center justify-center gap-3">
                <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                View Portfolio
              </span>
            </button>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white/80 mb-6 animate-fade-in-up">Get in Touch Instantly</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {contactOptions.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-gradient-to-r ${contact.color} ${contact.hoverColor} p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <contact.icon className="w-6 h-6 text-white group-hover:animate-bounce" />
                    <div className="text-white font-semibold text-sm">{contact.label}</div>
                    <div className="text-white/80 text-xs">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
          <MousePointer className="absolute -right-8 top-2 w-4 h-4 text-white/40 animate-pulse" />
        </div>
        <div className="text-white/60 text-xs mt-2 text-center">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;
