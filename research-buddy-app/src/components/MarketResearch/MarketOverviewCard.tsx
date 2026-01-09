import React from 'react';
import type { MarketOverview } from '../../types';

interface MarketOverviewCardProps {
  overview: MarketOverview;
}

export const MarketOverviewCard: React.FC<MarketOverviewCardProps> = ({ overview }) => {
  return (
    <div className="lg:col-span-2 relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-soft-lg hover:shadow-soft-2xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-100 to-transparent dark:from-primary-900/20 opacity-50 pointer-events-none"></div>
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="text-4xl drop-shadow-lg">📈</div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Market Overview</h4>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-baseline justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-300">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Market Size</span>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-50">{overview.totalMarketSize}</span>
            <span className="px-3 py-1 text-sm font-bold bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700 rounded-full">
              {overview.growth}
            </span>
          </div>
        </div>
        
        <div className="flex items-baseline justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-300">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Projected Growth (5yr CAGR)</span>
          <span className="text-3xl font-bold text-gray-900 dark:text-gray-50">{overview.projectedGrowth}</span>
        </div>
        
        <div className="flex items-baseline justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-300">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Market Maturity</span>
          <span className="text-3xl font-bold text-gray-900 dark:text-gray-50">{overview.maturity}</span>
        </div>
      </div>
      
      <p className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 border-primary-500 text-gray-600 dark:text-gray-400 leading-relaxed">
        {overview.description}
      </p>
    </div>
  );
};
