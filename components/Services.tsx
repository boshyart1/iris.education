import React from 'react';
import { FolderInput, FileSearch, FileCheck, Building2, PhoneOutgoing, Headphones } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  { id: 1, title: 'استلام الملفات', description: 'نستلم منك الملفات أينما كنت ونبدأ الإجراءات فوراً.', icon: <FolderInput /> },
  { id: 2, title: 'مراجعة المستندات', description: 'فحص دقيق للتأكد من خلو الأوراق من أي نواقص.', icon: <FileSearch /> },
  { id: 3, title: 'تجهيز الأوراق', description: 'ترتيب وتنسيق الملف ليتناسب مع متطلبات التعليم العالي.', icon: <FileCheck /> },
  { id: 4, title: 'التقديم للجامعات', description: 'اختيار الكليات المناسبة والتقديم الإلكتروني والورقي.', icon: <Building2 /> },
  { id: 5, title: 'المتابعة المستمرة', description: 'متابعة يومية مع الإدارة العامة للوافدين والجامعات.', icon: <PhoneOutgoing /> },
  { id: 6, title: 'دعم كامل', description: 'فريق دعم فني متواجد للإجابة على استفساراتك طوال الموسم.', icon: <Headphones /> },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-500">نقدم لك باقة متكاملة تغنيك عن عناء السفر والمتابعة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-row items-start space-x-4 space-x-reverse group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center group-hover:scale-110 transition">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;