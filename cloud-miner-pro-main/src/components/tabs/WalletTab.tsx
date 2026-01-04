import React, { useState } from 'react';
import { CheckCircle2, Wallet2, ChevronLeft, Shield, Lock, Facebook, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

type PaymentMethod = 'facebook_pay';

const WalletTab: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [amount, setAmount] = useState('50');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال مبلغ صحيح.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    // Simulate Facebook Pay API call success delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    toast({
      title: "تمت المعاملة بنجاح!",
      description: `تم إيداع $${amount} عبر Facebook Pay.`,
    });
    setSelectedMethod(null);
  };


  if (!selectedMethod) {
    return (
      <div className="space-y-6 animate-scale-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1877F2] rounded-3xl mb-4 shadow-lg animate-float">
            <Facebook size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-black text-foreground">شراء طاقة التعدين</h2>
          <p className="text-muted-foreground mt-2">اختر المبلغ وادفع باستخدام حسابك على فيسبوك</p>
        </div>

        {/* Amount Selection */}
        <div className="glass-premium rounded-3xl p-6">
          <label className="block text-sm font-bold text-muted-foreground mb-3">المبلغ المراد إيداعه (USD)</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {['50', '100', '500', '1000'].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-3 rounded-xl font-bold transition-all ${
                  amount === val 
                    ? 'bg-[#1877F2] text-primary-foreground shadow-lg' 
                    : 'bg-secondary hover:bg-secondary/80 text-foreground'
                }`}
              >
                ${val}
              </button>
            ))}
          </div>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="أو أدخل مبلغ مخصص"
            className="text-center text-xl font-bold"
          />
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <button
            onClick={() => setSelectedMethod('facebook_pay')}
            className="w-full glass-premium rounded-3xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all group"
          >
            <div className="w-16 h-16 bg-[#1877F2] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Facebook className="text-white" size={30} />
            </div>
            <div className="flex-1 text-right">
              <h3 className="text-xl font-black text-foreground">Facebook Pay</h3>
              <p className="text-sm text-muted-foreground">استخدم وسائل الدفع المحفوظة لدى Meta</p>
            </div>
            <ChevronLeft className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield size={16} className="text-success" />
            <span>مدعوم من Meta</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock size={16} className="text-primary" />
            <span>بياناتك محمية</span>
          </div>
        </div>
      </div>
    );
  }

  // Facebook Pay Confirmation Screen
  if (selectedMethod === 'facebook_pay') {
    return (
      <div className="space-y-6 animate-scale-in">
        <button 
          onClick={() => setSelectedMethod(null)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={20} />
          <span>العودة</span>
        </button>

        <div className="glass-premium rounded-[2.5rem] p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#1877F2] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Facebook className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-black text-foreground">تأكيد شراء (In-App)</h2>
            <p className="text-muted-foreground text-md mt-2">سيتم خصم المبلغ التالي باستخدام طريقة الدفع المحفوظة لديك:</p>
            <p className="text-primary text-4xl font-black mt-4">${amount}</p>
          </div>

          <div className="space-y-4">
            {/* Summary/Instructions */}
            <div className="bg-primary/5 p-5 rounded-2xl border border-primary/20 space-y-3 text-right">
              <p className="flex items-center justify-end gap-2 font-bold text-foreground">
                <CheckCircle2 className="text-primary shrink-0" size={18} /> 
                المبلغ الإجمالي: ${parseFloat(amount).toFixed(2)}
              </p>
              <p className="flex items-center justify-end gap-2 text-muted-foreground">
                <DollarSign className="text-muted-foreground shrink-0" size={18} /> 
                لا توجد رسوم إضافية على عملية الشراء
              </p>
            </div>

            {/* Terms and Conditions Note */}
            <p className="text-center text-xs text-muted-foreground pt-4">
              الضغط على الزر أدناه يرسل طلب الشراء عبر واجهة Facebook Pay.
            </p>
          </div>
        </div>

        <Button 
          variant="default"
          size="lg" 
          className="w-full h-16 text-lg bg-[#1877F2] hover:bg-[#1569d6] text-white shimmer" 
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              جاري معالجة الدفع...
            </span>
          ) : (
            `تأكيد الدفع $${amount}`
          )}
        </Button>
      </div>
    );
  }

  return null;
};

export default WalletTab;