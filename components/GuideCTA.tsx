import React from 'react';
import { Download, FileText, ChevronLeft } from 'lucide-react';

const GuideCTA: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 transform hover:scale-[1.01] transition duration-300">
          <div className="flex items-start space-x-6 space-x-reverse">
            <div className="hidden sm:flex bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl items-center justify-center flex-shrink-0">
               <FileText size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">دليل الجامعات المصرية</h3>
              <p className="text-gray-600 leading-relaxed">
                عاوز تعرف أسعار الجامعات الحكومية والخاصة ونسب الخصم للسودانيين؟
                <br/>
                جمعنا ليك كل المعلومات في ملف واحد.
              </p>
            </div>
          </div>
          
          <a 
            href="https://drive.google.com/drive/folders/1v8xQDwvKtuCdE8xgnM_fzdD6gWzcn50X?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition group"
          >
            <span>تصفح الدليل</span>
            <ChevronLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuideCTA;