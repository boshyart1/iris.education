import React from 'react';
import { Megaphone, Star } from 'lucide-react';

const Announcements: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2e1065] to-[#4c1d95] text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
            <Megaphone size={16} className="ml-2 text-brand-orange" />
            <span className="text-sm font-bold text-brand-orange">إعلانات هامة</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">أخبار وفرص لا تفوتك</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            تابع آخر التحديثات والخصومات الحصرية لطلابنا السودانيين
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Application Season */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition duration-300 group">
            <div className="bg-brand-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Star className="text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-3">فتح باب التقديم</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              تم فتح باب التقديم للجامعات المصرية للعام الدراسي الجديد. الفترة محدودة من 1 ديسمبر وحتى 30 يناير. سارع بحجز مقعدك الآن.
            </p>
            <div className="flex items-center text-sm text-brand-orange font-bold">
              متاح حالياً
            </div>
          </div>

          {/* Card 2: Discount */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition duration-300 group">
             <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-green-400 font-black text-xl">%</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">تخفيضات خاصة</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              نقدم باقات خاصة ومخفضة للطلاب السودانيين تقديراً للظروف الراهنة. تشمل الباقات استخراج الملف وتوثيقه والتقديم للجامعة.
            </p>
             <div className="flex items-center text-sm text-green-400 font-bold">
              عرض خاص
            </div>
          </div>

           {/* Card 3: Advisory */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition duration-300 group">
             <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Megaphone className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">جلسات استشارية مجانية</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              محتار تختار أي تخصص؟ فريقنا الاستشاري جاهز لمساعدتك في اختيار الكلية المناسبة لمجموعك وميولك مجاناً.
            </p>
             <div className="flex items-center text-sm text-blue-400 font-bold">
              احجز موعدك
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;