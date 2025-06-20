import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-400/30 group transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
      style={{ 
        opacity: 0,
        animation: 'fadeInUp 0.6s ease forwards',
        animationDelay: `${delay}s`
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="flex items-start relative z-10">
        <div className="flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
          <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-cyan-50 group-hover:to-blue-50 transition-all duration-300">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="shimmer absolute inset-0"></div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BenefitCard;