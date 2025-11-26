import React from 'react';
import { Heart } from 'lucide-react';

const photos = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544531679-377268eb75a1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
];

const StudentLife: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">مجتمع طلاب آيريس</h2>
          <p className="text-xl text-gray-500">أكثر من مجرد مكتب تقديم، نحن عائلتك في مصر</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((url, idx) => (
            <div key={idx} className={`relative rounded-2xl overflow-hidden group h-64 ${idx % 2 === 0 ? 'mt-8' : ''} shadow-lg`}>
              <img 
                src={url} 
                alt={`Student Life ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold flex items-center">
                  <Heart className="w-4 h-4 text-brand-orange mr-1 fill-current" />
                  نجاحكم فرحتنا
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;