import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import TestimonialCard from './ui/TestimonialCard';

const WhyNhancio = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "AI Engineer, TechCorp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Nhancio's hackathon was exceptionally well-organized. The mentors were top-notch and the problem statements were challenging yet realistic. I walked away with new skills and valuable connections."
    },
    {
      name: "David Chen",
      role: "Machine Learning Researcher",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "The technical expertise of Nhancio's team was evident throughout the event. Their AI frameworks and support allowed our team to focus on innovation rather than boilerplate code. Would definitely participate again!"
    },
    {
      name: "Maya Patel",
      role: "Founder, AI Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "What stands out about Nhancio's hackathon is the quality of networking opportunities. I met my co-founder here, and we've since raised seed funding. The connections made are genuinely valuable."
    }
  ];
  
  return (
    <section id="why-nhancio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Nhancio?"
          subtitle="Backed by industry experts with a proven track record of excellence"
        />
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Award className="h-10 w-10 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">IIT Pedigree</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Founded by IIT alumni with decades of combined experience in AI research and industry applications.
            </p>
            <div className="flex space-x-3">
              <img 
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="IIT Badge" 
                className="h-10 w-10 object-contain"
              />
              <img 
                src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Tech Excellence Badge" 
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold">Proven Track Record</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Successfully organized 15+ hackathons with over 5,000 participants from 30+ countries.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                12 startup ventures launched
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                $3M+ in venture funding raised
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                40+ patents filed from projects
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Star className="h-10 w-10 text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold">AI/ML Expertise</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Specialized in cutting-edge AI technologies with mentors from leading tech companies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium">Natural Language Processing</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium">Computer Vision</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium">Generative AI</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium">Reinforcement Learning</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">What Participants Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                quote={testimonial.quote}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white overflow-hidden shadow-xl">
          <div className="p-8 sm:p-10 md:p-12">
            <div className="grid md:grid-cols-4 gap-y-8 gap-x-12 text-center">
              <div>
                <p className="text-4xl font-bold">15+</p>
                <p className="mt-2 text-purple-100">Hackathons Organized</p>
              </div>
              <div>
                <p className="text-4xl font-bold">5,000+</p>
                <p className="mt-2 text-purple-100">Total Participants</p>
              </div>
              <div>
                <p className="text-4xl font-bold">250+</p>
                <p className="mt-2 text-purple-100">Industry Mentors</p>
              </div>
              <div>
                <p className="text-4xl font-bold">98%</p>
                <p className="mt-2 text-purple-100">Participant Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNhancio;