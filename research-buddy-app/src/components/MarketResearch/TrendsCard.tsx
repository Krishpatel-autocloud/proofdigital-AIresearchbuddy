import React from 'react';
import type { Trend } from '../../types';

interface TrendsCardProps {
  trends: Trend[];
}

const badgeStyles = {
  hot: 'bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-700',
  growing: 'bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700',
  emerging: 'bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-400 border-primary-300 dark:border-primary-700',
  opportunity: 'bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700',
};

export const TrendsCard: React.FC<TrendsCardProps> = ({ trends }) => {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-soft-lg hover:shadow-soft-2xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl drop-shadow-lg">💡</div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Trends & Opportunities</h4>
      </div>
      
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            <span className={`px-3 py-1 h-fit text-xs font-bold uppercase tracking-wider border rounded-full whitespace-nowrap ${badgeStyles[trend.type]}`}>
              {trend.type}
            </span>
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-gray-900 dark:text-gray-50 mb-1">{trend.name}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{trend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
