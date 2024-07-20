import React from "react";

const Testimonial = (props) => {
  return (
    <div id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What our clients say
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img className="object-cover w-full h-full" src={d.img} alt={d.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-800 text-m italic">{d.text}</p>
                        <div className="text-gray-600">- {d.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
