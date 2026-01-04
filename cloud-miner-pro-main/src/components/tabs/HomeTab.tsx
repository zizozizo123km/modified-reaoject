import React from 'react';
import { Zap, Users, ArrowRightLeft, TrendingUp, Star, Sparkles, Shield, Clock, Share2, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/StatCard';
import ReviewCard from '@/components/ReviewCard';

interface HomeTabProps {
  onNavigate: (tab: string) => void;
}

const HomeTab: React.FC<HomeTabProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Promo Card - Facebook Viral Campaign Style */}
      <div className="relative group">
        {/* Changed styling context to Facebook Blue/Promotion */}
        <div className="absolute inset-0 bg-blue-800 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="relative bg-blue-600 p-8 md:p-10 rounded-[2.5rem] shadow-xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-white/50">
            <Share2 size={32} />
          </div>
          <div className="absolute bottom-4 right-4 text-white/10">
            <Users size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Clock size={14} className="text-white" />
              <span className="text-white text-sm font-bold">فرصة كبرى - متاحة الآن!</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-3 text-primary-foreground leading-tight">
              مكافأة فيسبوك
              <br />
              <span className="text-white/90">للمشاركين!</span>
            </h2>
            <p className="text-primary-foreground/90 font-bold mb-6 text-lg">
              ادعُ <span className="text-white text-2xl">5 أصدقاء</span> واحصل على <span className="text-white text-2xl">$500</span> رصيد مكافآت فوري!
            </p>
            
            <Button 
              onClick={() => onNavigate('share')} // Changed navigation target context
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 shadow-xl h-14 px-8 text-lg font-bold"
            >
              شارك واربح الآن <Share2 size={20} className="ml-2 fill-current" />
            </Button>
          </div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer pointer-events-none" />
        </div>
      </div>

      {/* Live Stats - Social Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          label="إجمالي المشاركات" 
          value="+150,4k" 
          icon={<Share2 className="text-blue-500" size={28} />}
          trend="+15%"
        />
        <StatCard 
          label="إجمالي المكافآت الموزعة" 
          value="$5.1M" 
          icon={<DollarSign className="text-green-500" size={28} />}
          trend="+10%"
        />
      </div>

      {/* Features - Focusing on Trust and Virality */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass rounded-2xl p-4 text-center">
          <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Shield size={24} className="text-blue-500" />
          </div>
          <p className="text-xs font-bold text-muted-foreground">موثوق من فيسبوك</p>
        </div>
        <div className="glass rounded-2xl p-4 text-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Zap size={24} className="text-green-500" />
          </div>
          <p className="text-xs font-bold text-muted-foreground">صرف فوري</p>
        </div>
        <div className="glass rounded-2xl p-4 text-center">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Users size={24} className="text-purple-500" />
          </div>
          <p className="text-xs font-bold text-muted-foreground">مجتمع نشط</p>
        </div>
      </div>

      {/* Reviews Section - Facebook Testimonials */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black flex items-center gap-2">
            <Star className="text-blue-500 fill-blue-500" size={24} /> 
            آراء المستفيدين على فيسبوك
          </h3>
          <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">+4,800 تقييم 5 نجوم</span>
        </div>
        <div className="space-y-4">
          <ReviewCard 
            name="محمد العتيبي" 
            text="شاركت الرابط مع عائلتي وخلال ساعة حصلت على 500$! تطبيق حقيقي وفعال. شكراً Meta Rewards!" 
            stars={5} 
            img="https://i.pravatar.cc/150?u=a1"
            date="منذ 2 ساعة"
            verified
          />
          <ReviewCard 
            name="سارة الهاشم" 
            text="حصلت على مكافأة بقيمة 100$ بمجرد تسجيل 3 أصدقاء. أسرع طريقة للربح شفتها على الفيسبوك." 
            stars={5} 
            img="https://i.pravatar.cc/150?u=a2"
            date="منذ 5 ساعات"
            verified
          />
          <ReviewCard 
            name="ياسين من المغرب" 
            text="خدمة الدعم ممتازة وتم تحويل المكافأة إلى PayPal مباشرة. أنصح الكل يجرب المشاركة." 
            stars={4} 
            img="https://i.pravatar.cc/150?u=a3"
            date="منذ يوم"
            verified
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTab;