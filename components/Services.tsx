import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic planning and business growth solutions",
      icon: "📈"
    },
    {
      title: "Financial Services",
      description: "Complete financial management and advisory",
      icon: "💰"
    },
    {
      title: "Technology Solutions",
      description: "Modern tech implementation for business",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
