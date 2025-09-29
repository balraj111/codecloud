import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
