import React from 'react';

const Service = ({ data }) => {
  return (
    <div id="services" className="py-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-xl mb-8">
          We offer a variety of services to cater to your needs. Our services are designed to provide exceptional value and quality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <div key={index} className="service-item p-6 bg-white rounded-lg shadow-lg text-center text-gray-800">
              <i className={`${service.icon} w-16 h-16 mx-auto mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
