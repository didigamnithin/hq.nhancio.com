import React, { useState, useEffect } from 'react';
import { Brain, Code, Zap, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrolled]);

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 shadow-2xl backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group">
              <Brain className="h-8 w-8 text-cyan-400 group-hover:animate-pulse transition-all duration-300" />
              <span className="text-white font-bold text-2xl group-hover:text-cyan-400 transition-colors duration-300">Nhancio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#why-hackathons" className="text-white hover:text-cyan-400 transition-all duration-300 relative group">
                Why Hackathons?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#why-nhancio" className="text-white hover:text-cyan-400 transition-all duration-300 relative group">
                Why Nhancio?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#benefits" className="text-white hover:text-cyan-400 transition-all duration-300 relative group">
                Benefits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div>
              <Button href="#register" className="hidden sm:inline-flex hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0 opacity-30">
          <EnhancedParticleBackground />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-20 animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center min-h-screen py-32">
          <div className="flex items-center space-x-6 mb-12 animate-fade-in">
            <Brain className="h-16 w-16 sm:h-20 sm:w-20 text-cyan-400 animate-pulse" />
            <Code className="h-14 w-14 sm:h-18 sm:w-18 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <Zap className="h-12 w-12 sm:h-16 sm:w-16 text-blue-400 animate-ping" style={{ animationDelay: '1s' }} />
            <Sparkles className="h-10 w-10 sm:h-14 sm:w-14 text-pink-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight max-w-5xl">
            <span className="block mb-4 animate-fade-in">AI-Based</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
              Vibe Coding Hackathon
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Join the most innovative AI coding challenge and transform your ideas into reality with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button href="#register" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              Register Now
              <span className="ml-3 text-sm px-3 py-1 bg-white/20 rounded-full animate-pulse">Limited Spots</span>
            </Button>
            <Button href="#why-nhancio" variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-cyan-400 hover:bg-cyan-400/10">
              Learn More
            </Button>
          </div>
          
          <div className="px-8 py-6 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20 hover:border-cyan-400/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <p className="text-lg">
              <span className="font-semibold text-cyan-400">Event Date:</span> November 15-17, 2025 | 
              <span className="font-semibold ml-3 text-purple-400">Location:</span> Virtual & San Francisco
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

// Enhanced Particle Background with more dynamic effects
const EnhancedParticleBackground = () => {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 80 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            background: `linear-gradient(45deg, ${
              ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)]
            }, ${
              ['#3b82f6', '#6366f1', '#f97316', '#ef4444', '#84cc16'][Math.floor(Math.random() * 5)]
            })`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `float ${Math.random() * 15 + 10}s linear infinite, pulse ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(90deg);
          }
          50% {
            transform: translateY(-60px) translateX(0) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) translateX(-15px) rotate(270deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;