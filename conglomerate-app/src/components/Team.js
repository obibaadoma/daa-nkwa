import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container mx-auto py-16">
        <div className="w-full md:w-2/3 mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="w-full sm:w-1/2 md:w-1/4 p-4">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={d.img} alt="..." className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold">{d.name}</h4>
                      <p className="text-gray-600">{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Team;
