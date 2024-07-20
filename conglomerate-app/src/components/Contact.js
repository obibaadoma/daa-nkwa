import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="lg:w-2/3 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Please fill out the form below to send us an email and we will get back to you as soon as possible.
            </p>
          </div>
          <form name="sentMessage" onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="md:flex md:gap-4">
              <div className="md:w-1/2 mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                rows="4"
                placeholder="Message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-1/3 lg:ml-auto mt-12 lg:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-4">
              <span className="font-semibold text-blue-500"><i className="fa fa-map-marker"></i> Address:</span> {props.data ? props.data.address : "loading"}
            </p>
            <p className="mb-4">
              <span className="font-semibold text-blue-500"><i className="fa fa-phone"></i> Phone:</span> {props.data ? props.data.phone : "loading"}
            </p>
            <p>
              <span className="font-semibold text-blue-500"><i className="fa fa-envelope-o"></i> Email:</span> {props.data ? props.data.email : "loading"}
            </p>
          </div>
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-4">
              <a href={props.data ? props.data.facebook : "/"} className="text-blue-600 hover:text-blue-800">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href={props.data ? props.data.twitter : "/"} className="text-blue-400 hover:text-blue-600">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href={props.data ? props.data.youtube : "/"} className="text-red-600 hover:text-red-800">
                <i className="fa fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-500 text-white py-4 text-center">
        <p>
          &copy; 2024.
          </p>
      </footer>
    </div>
  );
};

export default Contact;
