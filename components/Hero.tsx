import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Professional Business Solutions
            </h1>
            <p className="text-xl mb-8">
              Providing expert services and innovative solutions for your business needs
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
