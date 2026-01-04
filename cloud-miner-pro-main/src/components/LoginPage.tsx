import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginPageProps {
  onLogin: () => void;
}

const REQUIRED_USER = "zinozino";
const REQUIRED_PASS = "zizozizo";

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === REQUIRED_USER && password === REQUIRED_PASS) {
      onLogin();
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحين.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4" dir="rtl">
      
      <div className="w-full max-w-md relative z-10 p-4">
        
        {/* Top Facebook Logo/Header Area */}
        <div className="flex flex-col items-center mb-10">
          {/* Facebook Logo Text */}
          <h1 className="text-6xl font-extrabold text-[#1877f2] leading-tight">facebook</h1>
          <p className="text-xl text-center mt-3 text-gray-700">تواصل مع الأصدقاء والعالم من حولك على فيسبوك.</p>
        </div>

        {/* Card - Facebook style: white background, light shadow */}
        <div className="bg-white rounded-lg shadow-xl p-6 relative animate-fade-in">
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Input 
                type="text" 
                placeholder="البريد الإلكتروني أو رقم الهاتف" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-right h-12 text-base border border-gray-300 focus:border-[#1877f2]"
              />
            </div>
            <div className="space-y-1">
              <Input 
                type="password" 
                placeholder="كلمة السر" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-right h-12 text-base border border-gray-300 focus:border-[#1877f2]"
              />
            </div>
            
            {error && (
              <p className="text-red-600 text-sm text-center animate-fade-in bg-red-100 p-2 rounded">
                {error}
              </p>
            )}
            
            {/* Primary Login Button - Facebook Blue (#1877f2) */}
            <Button 
              type="submit" 
              style={{ backgroundColor: '#1877f2' }} 
              className="w-full h-12 text-lg text-white hover:bg-[#166fe5] transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جاري تسجيل الدخول...
                </span>
              ) : (
                'تسجيل الدخول'
              )}
            </Button>
          </form>

          {/* Forgotten Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-[#1877f2] text-sm hover:underline">
              هل نسيت كلمة السر؟
            </a>
          </div>

          {/* Separator */}
          <div className="flex items-center my-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">أو</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Create New Account Button - Facebook Green (#42b72a) */}
          <div className="text-center">
            <Button
              variant="default" 
              style={{ backgroundColor: '#42b72a' }} 
              className="h-12 px-6 text-base text-white hover:bg-[#36a420] transition-colors rounded-lg"
              onClick={() => alert("Redirecting to signup...")}
            >
              إنشاء حساب جديد
            </Button>
          </div>
        </div>
        
        {/* Footer Link Area */}
        <p className="text-center text-xs text-gray-500 mt-6">
          <span className="font-semibold text-sm text-gray-700">إنشاء صفحة</span> لشخصية مشهورة أو علامة تجارية أو نشاط تجاري.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;