import React from 'react';
import { Crown, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VipTabProps {
  onNavigate: (tab: string) => void;
}

const VipTab: React.FC<VipTabProps> = ({ onNavigate }) => {
  const levels = [
    { level: 1, power: 10, profit: 150, price: 50, color: 'from-amber-500 to-yellow-500' },
    { level: 2, power: 25, profit: 300, price: 100, color: 'from-orange-500 to-amber-500' },
    { level: 3, power: 50, profit: 600, price: 250, color: 'from-red-500 to-orange-500' },
    { level: 4, power: 100, profit: 1200, price: 500, color: 'from-purple-500 to-red-500' },
    { level: 5, power: 200, profit: 2500, price: 1000, color: 'from-blue-500 to-purple-500' },
    { level: 6, power: 500, profit: 5000, price: 2500, color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <div className="space-y-6 animate-scale-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 gradient-gold rounded-3xl mb-4 shadow-gold animate-float">
          <Crown size={40} className="text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-black text-gradient-gold">باقات VIP للتعدين</h2>
        <p className="text-muted-foreground mt-2">اختر باقتك المدفوعة عبر فيسبوك وابدأ بجني الأرباح!</p>
      </div>

      {/* VIP Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {levels.map(({ level, power, profit, price, color }) => (
          <div 
            key={level} 
            className="glass-premium rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Top glow on hover */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`bg-gradient-to-br ${color} p-3 rounded-2xl shadow-lg`}>
                  <Crown size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <span className={`bg-gradient-to-r ${color} text-white px-4 py-1.5 rounded-full text-xs font-black`}>
                    المستوى {level}
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-black mb-1 text-foreground">VIP {level}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} className="text-primary" />
                <p className="text-muted-foreground text-sm">تعدين بقوة {power} TH/s</p>
              </div>
              
              <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">الربح اليومي</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={14} className="text-success" />
                    <span className="text-xs text-success">+10%</span>
                  </div>
                </div>
                <p className="text-2xl font-black text-success">${profit}</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-muted-foreground">سعر الباقة</p>
                  <p className="text-xl font-black text-foreground">${price}</p>
                </div>
                <Button 
                  onClick={() => onNavigate('wallet')} 
                  variant="gold"
                  className="gap-2"
                >
                  <Sparkles size={16} />
                  ترقية الآن
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VipTab;