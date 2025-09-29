import React from 'react';

const About = () => {
  const cards = [
    { icon: "chart-line", title: "Our Vision", text: "Leading innovation in digital transformation" },
    { icon: "handshake", title: "Our Mission", text: "Delivering excellence through technology" },
    { icon: "users", title: "Our Team", text: "Experienced professionals at your service" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className={`fas fa-${card.icon} text-4xl text-blue-500 mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
