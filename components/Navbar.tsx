import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold">CodeCloudLab</div>
          
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:relative top-20 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}>
            <li><a href="#home" className="block py-2 px-4 hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="block py-2 px-4 hover:text-blue-500">About</a></li>
            <li><a href="#services" className="block py-2 px-4 hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
