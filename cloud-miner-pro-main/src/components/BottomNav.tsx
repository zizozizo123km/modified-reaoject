import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  icon: LucideIcon;
  label: string; 
}

interface BottomNavProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void; // Prop kept for interface compatibility but not rendered in this UI pattern
}

const BottomNav: React.FC<BottomNavProps> = ({ items, activeTab, onTabChange }) => {
  // Using standard blue for active state, mimicking Facebook's branding
  const FB_ACTIVE_COLOR = 'text-blue-600';
  const FB_INACTIVE_COLOR = 'text-gray-500';

  return (
    // Fixed bottom bar, white background, subtle top border, standard height
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-14 flex justify-around items-center z-50">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            // Ensure even spacing and full height utilization
            className="flex flex-1 justify-center items-center h-full focus:outline-none"
          >
            {/* Container for the icon. Transition colors smoothly. */}
            <div 
              className={`transition-colors duration-200 ${
                isActive 
                  ? FB_ACTIVE_COLOR
                  : FB_INACTIVE_COLOR
              }`}
            >
              {/* Increased stroke width for active icons for emphasis */}
              <Icon size={24} strokeWidth={isActive ? 3 : 2} /> 
            </div>
          </button>
        );
      })}
      
      {/* Explicit Logout button and item labels are removed to adhere to typical Facebook mobile bottom navigation design */}
    </nav>
  );
};

export default BottomNav;