import React, { useState } from "react";
import '../CSS/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Got a question, feedback, or just want to say hi? We're here to help!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
              Thank you for reaching out! We'll get back to you soon.
            </div>
          )}
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h2>
          <p className="text-gray-600 mb-6">Follow us on social media for the latest updates:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:text-blue-800 transition"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-2xl hover:text-blue-600 transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:text-pink-700 transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
