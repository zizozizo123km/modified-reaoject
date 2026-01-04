import React from 'react';
import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, trend }) => {
  return (
    // Conversion to a simple, clean card structure typical of Facebook UI components (white background, shadow)
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all duration-150">
      
      <div className="flex flex-col items-center text-center">
        {/* Icon container - simplified and often rounded fully in FB-style components */}
        <div className="mb-3 p-2 bg-gray-100 rounded-full">
          {icon}
        </div>
        
        {/* Label - smaller and muted gray */}
        <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-1">{label}</span>
        
        {/* Value - bold, primary text color */}
        <span className="text-2xl font-extrabold text-gray-800">{value}</span>
        
        {/* Trend Indicator */}
        {trend && (
          <div className="flex items-center gap-1 mt-2 text-green-600 text-xs font-semibold">
            <TrendingUp size={12} />
            <span>{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;