import React from 'react';
import { Lightbulb, Users, Brain, Rocket } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import InfoCard from './ui/InfoCard';

const WhyHackathons = () => {
  return (
    <section id="why-hackathons" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Hackathons?"
          subtitle="Unlock innovation, collaboration, and growth through intense coding challenges"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard 
            icon={<Lightbulb className="h-10 w-10 text-amber-500" />}
            title="Innovation & Rapid Prototyping"
            description="Transform ideas into working prototypes in just 48 hours. Accelerate your development cycle and test concepts quickly."
          />
          
          <InfoCard 
            icon={<Users className="h-10 w-10 text-blue-500" />}
            title="Team Collaboration"
            description="Build connections with like-minded innovators. Collaborate with designers, developers, and domain experts."
            delay={0.1}
          />
          
          <InfoCard 
            icon={<Brain className="h-10 w-10 text-purple-500" />}
            title="Real-World Problem Solving"
            description="Tackle authentic challenges with AI technologies. Develop solutions that address genuine market needs."
            delay={0.2}
          />
          
          <InfoCard 
            icon={<Rocket className="h-10 w-10 text-cyan-500" />}
            title="Career Growth Opportunities"
            description="Showcase your skills to industry leaders. Create portfolio pieces and connect with potential employers."
            delay={0.3}
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-xl">
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Success by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">93%</p>
                <p className="text-sm mt-2">Participants Report Skill Growth</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">76%</p>
                <p className="text-sm mt-2">Teams Continue Project Development</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">42%</p>
                <p className="text-sm mt-2">Have Led To Job Opportunities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">15+</p>
                <p className="text-sm mt-2">Startups Founded from Previous Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHackathons;