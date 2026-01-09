import React from 'react';
import type { LocalCompetitor } from '../../types';

interface LocalCompetitorCardProps {
  competitor: LocalCompetitor;
}

export const LocalCompetitorCard: React.FC<LocalCompetitorCardProps> = ({ competitor }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-soft-2xl hover:-translate-y-2 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex gap-4 mb-4">
        <div className="text-5xl flex-shrink-0 drop-shadow-lg">{competitor.icon}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {competitor.name}
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
              📍 {competitor.location}
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 rounded-full">
              {competitor.industry}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {competitor.description}
      </p>
      
      <div className="flex gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex-1">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
            Market Share
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            {competitor.marketShare}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
            Est. Customers
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            {competitor.customers}
          </div>
        </div>
      </div>
    </div>
  );
};
