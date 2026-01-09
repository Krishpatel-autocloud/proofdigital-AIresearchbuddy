import React from 'react';
import type { OnlineCompetitor } from '../../types';

interface OnlineCompetitorRowProps {
  competitor: OnlineCompetitor;
}

export const OnlineCompetitorRow: React.FC<OnlineCompetitorRowProps> = ({ competitor }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-soft-xl hover:translate-x-1 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden">
      {/* Left accent line */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex gap-4 flex-1">
          <div className="text-4xl flex-shrink-0 drop-shadow-lg">{competitor.icon}</div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
              {competitor.domain}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {competitor.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-800 lg:pl-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
              Domain Authority
            </div>
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {competitor.domainAuthority}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
              Monthly Traffic
            </div>
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {competitor.monthlyTraffic}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
              Backlinks
            </div>
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {competitor.backlinks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
