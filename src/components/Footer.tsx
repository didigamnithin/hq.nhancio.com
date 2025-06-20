import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5 group">
              <Brain className="h-8 w-8 text-cyan-400 mr-2 group-hover:animate-pulse" />
              <span className="text-white font-bold text-xl">Nhancio</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering innovators to build the future with AI. Join our community of tech enthusiasts and industry professionals in this exciting hackathon journey.
            </p>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/20">
              <p className="text-sm text-blue-200 italic">
                "The best way to predict the future is to invent it." - Alan Kay
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#why-hackathons" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">About Hackathons</a>
              </li>
              <li>
                <a href="#why-nhancio" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Why Nhancio</a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Benefits</a>
              </li>
              <li>
                <a href="#register" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Register</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Return Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Nhancio Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-xs text-slate-500">
                Made with ❤️ in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;