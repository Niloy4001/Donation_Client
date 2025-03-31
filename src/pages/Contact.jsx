import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
    {/* Contact Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
      <p className="text-gray-600 mt-2">
        Have questions? Reach out to us and we'll be happy to help!
      </p>
    </div>

    {/* Contact Form & Info Container */}
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Send a Message</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Contact Details</h2>
        <p className="text-gray-700 mb-2">
          📍 <strong>Address:</strong> Dhaka, Bangladesh
        </p>
        <p className="text-gray-700 mb-2">
          📞 <strong>Phone:</strong> +880123456789
        </p>
        <p className="text-gray-700 mb-2">
          📧 <strong>Email:</strong> example@email.com
        </p>

        {/* Social Media Links */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-green-700">Follow Us:</h3>
          <div className="flex space-x-4 mt-2 text-green-600">
            <a href="#" className="hover:text-green-800 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-green-800 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-green-800 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-800 text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact