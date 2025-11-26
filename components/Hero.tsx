import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-light overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-sm font-bold border border-orange-200 mb-2">
               <span className="flex h-2 w-2 rounded-full bg-brand-orange ml-2 animate-pulse"></span>
               متاح الآن: التقديم للجامعات المصرية
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              ابدأ رحلتك الدراسية في <span className="text-brand-orange">مصر</span> مع <span className="text-[#2e1065]">آيريس</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              نستلم ملفاتك ونجّهز مستنداتك ونقدّم ليك… لحد ضمان القبول 🎓
              <br/>
              <span className="text-base text-gray-500 mt-2 block">
                خليك مرتاح، ومستقبلك في أمان معنا.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-brand-orange hover:bg-brand-dark transition transform hover:-translate-y-1 shadow-lg shadow-orange-500/30"
              >
                قدّم الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/1v8xQDwvKtuCdE8xgnM_fzdD6gWzcn50X?usp=sharing', '_blank')}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2e1065] text-lg font-bold rounded-full text-[#2e1065] hover:bg-purple-50 transition"
              >
                دليل الجامعات
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
               <div className="flex items-center">
                 <CheckCircle className="w-5 h-5 text-green-500 ml-1" />
                 موثوق 100%
               </div>
               <div className="flex items-center">
                 <CheckCircle className="w-5 h-5 text-green-500 ml-1" />
                 دعم مستمر
               </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             <div className="relative mx-auto w-full max-w-lg lg:max-w-full">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Sudanese Students Studying" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 text-white text-right">
                       <p className="font-bold text-lg">أحلامك تبدأ هنا</p>
                       <p className="text-sm opacity-90">القاهرة، مصر</p>
                    </div>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce hidden md:block">
                    <span className="text-2xl">🎓</span>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-pulse hidden md:block">
                    <span className="text-2xl">🇪🇬</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;