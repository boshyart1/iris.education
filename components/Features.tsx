import React from 'react';
import { FileText, Truck, Stamp, School, CheckCircle2 } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { id: 1, title: 'استخراج المستندات', description: 'نساعدك في استخراج كافة الأوراق الرسمية المطلوبة.' },
  { id: 2, title: 'النقل', description: 'تأمين نقل المستندات بأمان تام من السودان إلى مصر.' },
  { id: 3, title: 'التوثيق', description: 'توثيق الشهادات من الخارجية والسفارة لضمان اعتمادها.' },
  { id: 4, title: 'التقديم', description: 'التقديم المباشر للجامعات عبر القنوات الرسمية.' },
  { id: 5, title: 'ضمان القبول', description: 'نتابع الملف حتى تتسلم خطاب القبول النهائي بيدك.' },
];

const icons = [FileText, Truck, Stamp, School, CheckCircle2];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">لماذا تختار <span className="text-brand-orange">آيريس</span>؟</h2>
          <p className="text-xl text-gray-500">رحلتك معنا في 5 خطوات سهلة ومضمونة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.id} className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-light hover:shadow-lg transition duration-300 border border-transparent hover:border-brand-orange/20 h-full">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition duration-300">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-0 w-full transform -translate-x-1/2 z-0">
                    <div className="h-0.5 w-1/3 bg-gray-200 mx-auto"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;