import React from 'react';

const About = ({ data }) => {
    return (
        <div id="about" className="container mx-auto p-4 mt-8">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="/img/about.jpg" className="w-full h-auto" alt="About-us" />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
                    <div className="about-text">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p>{data ? data.paragraph : "loading..."}</p>
                        <h3 className="text-2xl font-semibold mt-4">Why Choose Us?</h3>
                        <div className="list-style mt-4">
                            <div className="flex flex-wrap">
                                <div className="w-full sm:w-1/2">
                                    <ul className="list-disc list-inside">
                                        {data
                                            ? data.Why.map((d, i) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-4">
                                    <ul className="list-disc list-inside">
                                        {data
                                            ? data.Why2.map((d, i) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
