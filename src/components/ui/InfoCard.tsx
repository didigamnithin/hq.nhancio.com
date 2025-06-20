import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease forwards',
        animationDelay: `${delay}s`
      }}
    >
      <div className="rounded-full bg-gray-50 p-3 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default InfoCard;