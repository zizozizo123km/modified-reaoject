import React, { useState, useEffect } from 'react';
import { Home, Users, Menu, LogOut, Bell, CheckCircle } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import HomeTab from '@/components/tabs/HomeTab';
import VipTab from '@/components/tabs/VipTab';
import WalletTab from '@/components/tabs/WalletTab';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotification, setShowNotification] = useState(false);
  const [notifText, setNotifText] = useState('');

  // Simulated withdrawal notifications
  useEffect(() => {
    const names = ["Ahmed", "Sara", "Khalid", "Fatima", "محمد", "علي", "نورة", "User_99", "CryptoKing"];
    const amounts = [500, 1200, 3000, 150, 5000, 750, 2200];
    
    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const amount = amounts[Math.floor(Math.random() * amounts.length)];
      setNotifText(`قام ${name} بسحب مبلغ $${amount} بنجاح!`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 3000);
    
    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const amount = amounts[Math.floor(Math.random() * amounts.length)];
      setNotifText(`قام ${name} بسحب مبلغ $${amount} بنجاح!`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Navigation items updated for a Facebook style look
  const navItems = [
    { id: 'home', icon: Home, label: 'الرئيسية' },
    { id: 'vip', icon: Users, label: 'المجموعات' },
    { id: 'wallet', icon: Menu, label: 'القائمة' },
  ];

  return (
    // Changed to light theme and standard text color
    <div className="min-h-screen bg-gray-50 text-gray-900" dir="rtl">
      
      {/* Facebook Style Fixed Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between h-14 px-4 max-w-4xl mx-auto">
              {/* Facebook Blue Logo */}
              <h1 className="text-2xl font-bold text-[#1877f2] font-sans">
                  facebook
              </h1>
              <div className="flex gap-3">
                  {/* Notifications button */}
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
                      <Bell size={20} className="text-gray-800" />
                  </button>
                  {/* Logout button (placed here for quick access/settings proxy) */}
                  <button onClick={onLogout} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
                      <LogOut size={20} className="text-gray-800" />
                  </button>
              </div>
          </div>
      </header>

      {/* Notification Toast - Updated style for light theme and position (top-16 to clear header) */}
      <div 
        className={`fixed top-16 left-5 right-5 md:left-5 md:right-auto md:max-w-sm z-[100] bg-white rounded-lg p-3 shadow-xl border-r-4 border-success flex items-center gap-3 transition-all duration-500 ${
          showNotification ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'
        }`}
      >
        <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center shrink-0">
          <CheckCircle className="text-success" size={18} />
        </div>
        <span className="font-medium text-sm text-gray-800">{notifText}</span>
      </div>

      {/* Content - Adjusted padding (pt-16) to clear fixed header */}
      <main className="pb-32 pt-16 px-4 max-w-4xl mx-auto relative">
        {activeTab === 'home' && <HomeTab onNavigate={setActiveTab} />}
        {activeTab === 'vip' && <VipTab onNavigate={setActiveTab} />}
        {activeTab === 'wallet' && <WalletTab />}
      </main>

      {/* Bottom Navigation */}
      <BottomNav 
        items={navItems} 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onLogout={onLogout}
      />
    </div>
  );
};

export default Dashboard;