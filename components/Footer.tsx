import React from 'react';
import { MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

// Custom TikTok Icon since Lucide might not have it or updated version issues
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1a1033] text-white pt-24 pb-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-orange/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-brand-orange to-red-500 rounded-3xl p-10 md:p-16 text-center transform -translate-y-40 shadow-2xl relative overflow-hidden border-4 border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 text-white">جاهز تبدأ مستقبلك؟</h2>
          <p className="text-lg md:text-xl mb-8 opacity-95 relative z-10 text-white font-medium">
            فريقنا جاهز لاستقبال ملفك والإجابة على كل استفساراتك عبر واتساب.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a 
              href="https://wa.me/201559666485" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white text-green-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition w-full sm:w-auto shadow-lg"
            >
              <MessageCircle className="ml-2 w-6 h-6" />
              تواصل واتساب
            </a>
            <a 
              href="tel:+201559666485" 
              className="flex items-center justify-center bg-[#2e1065] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-purple-900 transition w-full sm:w-auto shadow-lg ring-1 ring-white/20"
            >
              <Phone className="ml-2 w-6 h-6" />
              +20 155 966 6485
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="-mt-20 grid md:grid-cols-4 gap-12 text-center md:text-right">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center justify-center md:justify-start mb-6 gap-3">
               <Logo className="h-12 w-auto" mode="dark" />
               <span className="text-3xl font-black text-white tracking-tighter">IRIS</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
              آيريس للخدمات التعليمية. رفيقك الأول للدراسة في مصر. بنسهل عليك الصعب، وبنضمن ليك مقعدك في الجامعة بأسرع وقت وأقل تكلفة.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-orange">روابط سريعة</h4>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => window.open('https://drive.google.com/drive/folders/1v8xQDwvKtuCdE8xgnM_fzdD6gWzcn50X?usp=sharing', '_blank')} className="hover:text-white transition hover:translate-x-1 inline-block">دليل الجامعات</button></li>
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView()} className="hover:text-white transition hover:translate-x-1 inline-block">خطوات التقديم</button></li>
              <li><button onClick={() => document.getElementById('documents')?.scrollIntoView()} className="hover:text-white transition hover:translate-x-1 inline-block">المستندات المطلوبة</button></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6 text-brand-orange">تابعنا</h4>
             <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
                <a href="https://www.facebook.com/share/17U1wXeaYP/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition duration-300">
                   <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/iris_edu_" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#E1306C] hover:text-white transition duration-300">
                   <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@iris_educatin" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-black hover:text-white transition duration-300">
                   <TikTokIcon className="w-6 h-6" />
                </a>
             </div>
             <div className="mt-6">
                <p className="text-gray-400 mb-2">للاتصال المباشر:</p>
                <a href="tel:+201559666485" className="text-xl font-bold text-white hover:text-brand-orange transition" dir="ltr">
                  +20 155 966 6485
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Iris Education. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;