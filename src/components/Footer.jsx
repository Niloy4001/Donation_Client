import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">🌿 Green Future Initiative</h3>
        <p className="text-gray-400 mb-6">
          A dedicated environmental organization working towards sustainability and climate action.
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Events</a>
          <a href="#" className="hover:text-white">Donate</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        <div className="text-gray-400 mb-6">
          <p>📧 Email: example@email.com</p>
          <p>📞 Phone: +880123456789</p>
          <p>📍 Location: Dhaka, Bangladesh</p>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>

        <p className="text-gray-500 text-sm mt-6">&copy; 2025 Green Future Initiative. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
