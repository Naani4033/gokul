// import React from 'react';
// import { Upload, Edit3, Eye, Download, Clock, CheckCircle } from 'lucide-react';

// const Process = () => {
//   const steps = [
//     { 
//       icon: Upload, 
//       title: "Upload", 
//       description: "Upload your images securely through our platform with drag & drop functionality",
//       details: ["Secure SSL encryption", "Supports all major formats", "Bulk upload available"]
//     },
//     { 
//       icon: Edit3, 
//       title: "Edit", 
//       description: "Our expert team enhances your images with precision and creativity",
//       details: ["AI-assisted editing", "Human quality control", "Custom specifications"]
//     },
//     { 
//       icon: Eye, 
//       title: "Review", 
//       description: "Quality assurance team ensures perfection before delivery",
//       details: ["Multi-stage review", "Client feedback integration", "Revision included"]
//     },
//     { 
//       icon: Download, 
//       title: "Download", 
//       description: "Receive your professionally edited images in your preferred format",
//       details: ["Multiple format options", "High-resolution delivery", "Cloud storage backup"]
//     }
//   ];

//   const stats = [
//     { icon: Clock, number: "24hrs", label: "Average Turnaround" },
//     { icon: CheckCircle, number: "99.8%", label: "Client Satisfaction" },
//     { icon: Upload, number: "50K+", label: "Projects Completed" },
//     { icon: Eye, number: "2K+", label: "Happy Clients" }
//   ];

//   return (
//     <section id="process" className="py-20 bg-black/20 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             How We Work
//           </h2>
//           <p className="text-xl text-white/70 max-w-3xl mx-auto">
//             Our streamlined process ensures professional results with maximum efficiency and transparency
//           </p>
//         </div>
        
//         {/* Process Steps */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {steps.map((step, index) => (
//             <div key={index} className="group text-center relative">
//               {/* Connection line */}
//               {index < steps.length - 1 && (
//                 <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
//               )}
              
//               <div className="relative mb-6">
//                 <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
//                   <step.icon className="w-10 h-10 text-white" />
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
//                   {index + 1}
//                 </div>
//               </div>
              
//               <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
//               <p className="text-white/70 mb-6">{step.description}</p>
              
//               <ul className="space-y-2">
//                 {step.details.map((detail, idx) => (
//                   <li key={idx} className="text-white/60 text-sm flex items-center justify-center">
//                     <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
//                     {detail}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
//           <h3 className="text-3xl font-bold text-white text-center mb-8">Our Track Record</h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
//                   <stat.icon className="w-12 h-12" />
//                 </div>
//                 <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/70">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Process Guarantee */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30 max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-white mb-4">Our Process Guarantee</h3>
//             <p className="text-white/80 mb-6">
//               We're so confident in our process that we offer unlimited revisions until you're 100% satisfied. 
//               Your success is our priority, and we'll work tirelessly to exceed your expectations.
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="flex items-center justify-center space-x-2">
//                 <CheckCircle className="w-6 h-6 text-green-400" />
//                 <span className="text-white font-semibold">Unlimited Revisions</span>
//               </div>
//               <div className="flex items-center justify-center space-x-2">
//                 <CheckCircle className="w-6 h-6 text-green-400" />
//                 <span className="text-white font-semibold">Money-Back Guarantee</span>
//               </div>
//               <div className="flex items-center justify-center space-x-2">
//                 <CheckCircle className="w-6 h-6 text-green-400" />
//                 <span className="text-white font-semibold">24/7 Support</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;

import React from 'react';
import { Mail, Edit3, Eye, Send, Clock, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Mail, // Changed icon to Mail for email focus
      title: "Send Your Images", // Renamed title for clarity
      description: "Simply email us your images. Our system securely receives your request.", // Updated description
      details: ["Secure email processing", "Supports all major formats", "Clear instructions provided"] // Updated details
    },
    {
      icon: Edit3,
      title: "Expert Editing",
      description: "Our skilled team enhances your images with precision, creativity, and attention to detail.",
      details: ["AI-assisted editing", "Human quality control", "Custom specifications applied"] // Slightly rephrased details
    },
    {
      icon: Eye,
      title: "Quality Review",
      description: "Our quality assurance team meticulously reviews each image to ensure perfection.",
      details: ["Multi-stage review", "Client feedback integration", "Unlimited revisions included"] // Rephrased for better flow
    },
    {
      icon: Send, // Changed icon to Send for email return focus
      title: "Receive by Email", // Renamed title for clarity
      description: "We'll send your professionally edited images directly to your inbox.", // Updated description
      details: ["Multiple format options", "High-resolution delivery", "Quick email delivery"] // Updated details
    }
  ];

  const stats = [
    { icon: Clock, number: "12hrs", label: "Average Turnaround" },
    { icon: CheckCircle, number: "99.8%", label: "Client Satisfaction" },
    { icon: Mail, number: "5K+", label: "Emails Processed" }, // Changed icon and label for email relevance
    { icon: Eye, number: "50+", label: "Happy Clients" }
  ];

  return (
    <section id="process" className="py-20 bg-black/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Email-Powered Workflow
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience seamless image editing from your inbox to ours, ensuring professional results with maximum efficiency and transparency.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="group text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
              )}

              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/70 mb-6">{step.description}</p>

              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="text-white/60 text-sm flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Our Track Record</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-12 h-12" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Your Satisfaction, Guaranteed</h3>
            <p className="text-white/80 mb-6">
              We're so confident in our email-based process that we offer unlimited revisions until you're 100% satisfied.
              Your success is our priority, and we'll work tirelessly to exceed your expectations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Unlimited Revisions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">24/7 Email Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;