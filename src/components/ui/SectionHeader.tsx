import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  return (
    <div className={`max-w-3xl mx-auto ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;