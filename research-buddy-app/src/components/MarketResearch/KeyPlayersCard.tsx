import React from 'react';
import type { KeyPlayer } from '../../types';

interface KeyPlayersCardProps {
  players: KeyPlayer[];
}

export const KeyPlayersCard: React.FC<KeyPlayersCardProps> = ({ players }) => {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-soft-lg hover:shadow-soft-2xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl drop-shadow-lg">👥</div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Key Market Players</h4>
      </div>
      
      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player.rank}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-1 transition-all duration-300 border border-transparent hover:border-primary-200 dark:hover:border-primary-800"
          >
            <span className="flex items-center justify-center w-12 h-12 flex-shrink-0 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              #{player.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 dark:text-gray-50 mb-1">{player.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{player.marketShare}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
