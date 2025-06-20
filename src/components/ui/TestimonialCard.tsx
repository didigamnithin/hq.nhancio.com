import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  quote,
  delay = 0
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
      style={{ 
        opacity: 0,
        animation: 'fadeIn 0.6s ease forwards',
        animationDelay: `${delay}s`
      }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <p className="text-gray-700 italic">"{quote}"</p>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default TestimonialCard;