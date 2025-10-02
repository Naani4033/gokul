import React, { useState } from 'react';
import { Play, Upload, CheckCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const benefits = [
    "Free 3 image trial",
    "24/7 customer support",
    "No Money-back guarantee",
    "No subscription required"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Images?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients and experience the difference professional photo editing can make. 
            Start your free trial today!
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-white text-purple-600 px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center justify-center">
              <Upload className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <Play className="w-6 h-6 mr-3" />
              Contact Demo
            </button>
          </div>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Get Updates & Tips</h3>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-200 mt-3 text-sm">Successfully subscribed! Check your email for tips.</p>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">5K+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">12hrs</div>
                <div className="text-white/80 text-sm">Average Turnaround</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">95.8%</div>
                <div className="text-white/80 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;