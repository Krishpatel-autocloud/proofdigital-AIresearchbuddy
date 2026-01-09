import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverClass = hover ? 'hover:-translate-y-2 hover:shadow-soft-xl hover:border-primary-400 dark:hover:border-primary-500' : '';
  const classes = [
    'bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft transition-all duration-300',
    hoverClass,
    className
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
};

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-soft-lg border border-gray-200 dark:border-gray-800 mb-12 transition-all duration-300 hover:shadow-soft-xl hover:border-gray-300 dark:hover:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};
