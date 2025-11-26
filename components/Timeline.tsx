import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">موسم التقديم</h2>
        
        <div className="bg-white border-2 border-brand-orange/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-full -mr-4 -mt-4"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start text-brand-orange mb-2">
                <Calendar className="w-6 h-6 ml-2" />
                <span className="font-bold text-lg">البداية</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900">1 ديسمبر</h3>
              <p className="text-gray-500">بداية استلام الملفات</p>
            </div>

            <div className="flex-1 px-4 md:px-8 w-full">
               <div className="h-2 bg-gray-100 rounded-full relative">
                  <div className="absolute top-0 right-0 h-full bg-brand-orange rounded-full w-2/3 animate-pulse"></div>
               </div>
               <div className="text-center mt-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                    التقديم مفتوح الآن
                  </span>
               </div>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-end text-red-500 mb-2">
                <span className="font-bold text-lg">النهاية</span>
                <Clock className="w-6 h-6 mr-2" />
              </div>
              <h3 className="text-3xl font-black text-gray-900">30 يناير</h3>
              <p className="text-gray-500">نهاية التقديم</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-xl flex items-start text-right">
            <AlertCircle className="w-6 h-6 text-blue-500 ml-3 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              <span className="font-bold">تنويه هام:</span> المقاعد في الجامعات المصرية بأسبقية التقديم. كل ما قدّمت بدري، فرصتك في الكلية العايزها أكبر!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;