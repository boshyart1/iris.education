import React, { useState } from 'react';
import { Menu, X, Phone, FileText } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleGuideClick = () => {
    window.open('https://drive.google.com/drive/folders/1v8xQDwvKtuCdE8xgnM_fzdD6gWzcn50X?usp=sharing', '_blank');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => window.scrollTo(0,0)}>
              <Logo className="h-16 w-auto" mode="light" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#2e1065] tracking-tighter leading-none">IRIS</span>
                <span className="text-sm font-bold text-brand-orange leading-none">للخدمات التعليمية</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <div className="flex items-center text-gray-600 font-medium text-sm ml-4 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
               <Phone size={14} className="ml-2 text-brand-orange" />
               <span dir="ltr">+20 155 966 6485</span>
            </div>

            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-brand-orange transition px-2 py-2 font-medium">المميزات</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-brand-orange transition px-2 py-2 font-medium">الخدمات</button>
            <button onClick={() => scrollToSection('timeline')} className="text-gray-600 hover:text-brand-orange transition px-2 py-2 font-medium">المواعيد</button>
            
            <button 
              onClick={handleGuideClick}
              className="flex items-center text-brand-dark hover:text-brand-orange transition px-2 py-2 font-bold"
            >
              <FileText size={18} className="ml-1" />
              دليل الجامعات
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-orange hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              قدّم الآن
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-6 space-y-2 text-right">
             <div className="mb-4 pb-4 border-b flex justify-end items-center text-gray-600 font-bold">
               <span dir="ltr">+20 155 966 6485</span>
               <Phone size={16} className="ml-2 text-brand-orange" />
            </div>
            <button onClick={() => scrollToSection('features')} className="block w-full text-right px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">المميزات</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-right px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">الخدمات</button>
            <button onClick={() => scrollToSection('timeline')} className="block w-full text-right px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">المواعيد</button>
            <button onClick={handleGuideClick} className="block w-full text-right px-3 py-3 rounded-md text-lg font-medium text-brand-dark hover:bg-gray-50">
              📥 تحميل دليل الجامعات
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center mt-6 bg-brand-orange text-white px-3 py-4 rounded-xl text-lg font-bold"
            >
              قدّم الآن
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;