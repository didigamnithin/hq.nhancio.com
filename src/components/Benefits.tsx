import React from 'react';
import { Users, Award, BookOpen, Briefcase, Gift, BarChart3, Trophy, GraduationCap } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import BenefitCard from './ui/BenefitCard';

const Benefits = () => {
  const benefits = [
    {
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
      title: "₹1 Lakh Prize Pool",
      description: "Compete for exciting cash prizes distributed among winning teams. Show your skills and get rewarded for your innovation and hard work."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      title: "IIT-Based Startup Certificate",
      description: "Receive an official certificate from Nhancio, an IIT-based startup, recognizing your participation and achievements in the hackathon."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      title: "Internship & Job Opportunities",
      description: "Get direct access to internship and full-time job opportunities with Nhancio and our partner companies. Showcase your talent to potential employers."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Industry Mentor Guidance",
      description: "Get personalized feedback and advice from industry veterans and AI experts. Build connections that last beyond the hackathon."
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-500" />,
      title: "Networking Opportunities",
      description: "Connect with like-minded innovators, potential co-founders, and representatives from leading tech companies."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-red-500" />,
      title: "Hands-on AI Experience",
      description: "Gain practical experience with cutting-edge AI frameworks. Turn theoretical knowledge into working prototypes."
    }
  ];

  const quotes = [
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "The future belongs to those who learn more skills and combine them in creative ways.",
      author: "Robert Greene"
    },
    {
      text: "Artificial intelligence is the new electricity.",
      author: "Andrew Ng"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Participant Benefits"
          subtitle="What you'll gain from joining Nhancio's AI Hackathon 1.0"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Inspirational Quotes Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Words of Inspiration</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease forwards',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="text-4xl text-blue-200 mb-4">"</div>
                <p className="text-lg italic mb-4 leading-relaxed">{quote.text}</p>
                <p className="text-blue-200 font-semibold">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300 shadow-xl">
            <p className="font-medium text-lg leading-relaxed">
              Join a community of innovators and take your AI skills to the next level. Our participants have gone on to build successful startups, secure roles at top tech companies, and make significant contributions to the AI field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;