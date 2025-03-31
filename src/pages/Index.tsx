
import React from 'react';
import { Sparkles } from "lucide-react";
import NotifyForm from '@/components/NotifyForm';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-earthful-cream to-earthful-sage/30 px-4 py-12">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center">
          <Sparkles className="text-earthful-forest w-8 h-8 mr-2" />
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-earthful-forest">
            Stellar Alchemist
          </h1>
        </div>
        
        {/* Main Content */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-earthful-stone mb-6">
            Launching Soon
          </h2>
          <div className="h-0.5 w-24 bg-earthful-moss mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-earthful-moss mb-8">
            Something transformative is on the horizon.
          </p>
          <p className="text-earthful-earth">
            We're crafting something special. Sign up below to be among the first to know when we launch.
          </p>
        </div>
        
        {/* Notification Form */}
        <div className="w-full mb-12">
          <NotifyForm />
        </div>
        
        {/* Footer */}
        <footer className="mt-auto pt-12 w-full text-center text-earthful-earth text-sm">
          <p>© {new Date().getFullYear()} Stellar Alchemist. All rights reserved.</p>
          <p className="mt-1">stellaralchemist.in</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
