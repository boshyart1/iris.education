import React from 'react';
import { CheckCircle } from 'lucide-react';
import { DocumentItem } from '../types';

const docs: DocumentItem[] = [
  { name: 'الشهادة الثانوية', note: 'الأصل موثق من الخارجية' },
  { name: 'جواز السفر', note: 'ساري المفعول لمدة 6 أشهر على الأقل' },
  { name: 'شهادة الميلاد', note: 'الرقم الوطني أو شهادة الميلاد الأصلية' },
  { name: 'صور شخصية', note: 'عدد 6 صور خلفية بيضاء' },
  { name: 'موافقة ولي الأمر', note: 'للطلاب أقل من 18 سنة' },
];

const Documents: React.FC = () => {
  return (
    <section id="documents" className="py-20 bg-brand-orange overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:space-x-12 lg:space-x-reverse">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">المستندات المطلوبة</h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              عشان تقديمك يكون سليم 100%، جهّز الأوراق دي. 
              <br/>
              ما تشيل هم، لو في ورقة ناقصة بنوريك طريقة استخراجها.
            </p>
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-white text-brand-orange font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              استشيرنا الآن
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <ul className="space-y-6">
                {docs.map((doc, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0 ml-4" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{doc.name}</h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded mt-1 inline-block">
                        💡 مساعدة آيريس: {doc.note}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;