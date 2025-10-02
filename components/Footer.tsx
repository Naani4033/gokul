import React from 'react';
import { Camera, Mail, Phone, MapPin, Globe, Star } from 'lucide-react';

const Footer = () => {
  const services = [
    'Real Estate Photography',
    'Portrait Retouching',
    'Creative Manipulation',
    'Background Removal',
    'Color Correction'
  ];

  const company = [
    'About Us',
    'Our Team', 
    'Careers',
    'Awards',
    'Press',
    'Partners'
  ];

  const support = [
    'Help Center',
    'Contact Support',
    'Status Page'
  ];

  const quickStats = [
    { icon: Star, value: '4.0/5', label: 'Customer Rating' },
    { icon: Globe, value: '5+', label: 'Countries Served' },
    { icon: Camera, value: '5K+', label: 'Images Edited' }
  ];

  return (
    <footer className="bg-black/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PROPIC
                </span>
              </div>
              
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Professional photo editing services with cutting-edge technology and expert craftsmanship. 
                Transforming ordinary images into extraordinary masterpieces since 2025.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                    <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>gokuljabde17@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+91 6383836187</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Global Service • 24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Live Support Indicator */}
              <div className="mt-6 bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold text-sm">Live Support Online</span>
                </div>
                <p className="text-white/60 text-xs mt-1">Average response time: 10 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white/60">
              <p className="mb-2">&copy; 2025 PROPIC Studio. All rights reserved.</p>
              <p className="text-sm">
                Founded in 2025 | ISO 9001:2015 Certified | Serving 5+ Countries | 5K+ Projects Completed
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-end space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center space-x-2 bg-white/5 rounded-lg px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white/80 text-sm font-semibold">4.9/5 on Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;