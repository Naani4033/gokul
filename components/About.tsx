import React from 'react';
import { Shield, Users, Award, Globe, Clock, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality. Every image undergoes rigorous quality checks before delivery.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Fast turnaround times without sacrificing quality. Most projects completed within 24 hours.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your success is our success. We go above and beyond to exceed your expectations.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { number: '4+', label: 'Years Experience' },
    { number: '5+', label: 'Countries Served' },
    { number: '3+', label: 'Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black/40 to-purple-900/20 relative">
      <div className="container mx-auto px-6">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Propic Studio
            </h2>
            <div className="space-y-6 text-white/80 text-lg ">
  <p>
    Established in 2025, <strong>Propic Studio</strong> has rapidly become a global leader in professional photo editing—enhancing over 50,000 images for clients across more than 45 countries. What began with a simple mission has grown into a world-class creative force: to make high-end photo editing accessible to everyone.
  </p>
  <p>
    From a small group of passionate editors, we’ve evolved into a full-scale digital studio—fusing advanced AI technologies with skilled craftsmanship to deliver stunning results that consistently surpass expectations.
  </p>
  <p>
    Today, Propic Studio proudly partners with Fortune 500 companies, real estate firms, e-commerce giants, and independent photographers alike—upholding our unwavering promise of quality, speed, and customer satisfaction.
  </p>
</div>

            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-purple-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/80 mb-8">
                To democratize professional photo editing by combining advanced technology with human creativity, 
                making high-quality visual content accessible to businesses and individuals worldwide.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-white/80 mb-8">
                To become the world's most trusted creative partner, empowering brands and individuals to tell 
                their visual stories with unprecedented quality and efficiency.
              </p>
              
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold">ISO 9001:2015 Certified</div>
                  <div className="text-white/60 text-sm">Quality Management System</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide everything we do at Propic Studio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;