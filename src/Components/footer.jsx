import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Get in Touch</h2>
          <p>Email: Cruz.marceddyson.eccbscs@gmail.com</p>
          <p>Phone: +63 991 917 0254</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Connect with Me</h2>
          <div className="flex space-x-4 mt-2 justify-center">
            <a
              href="https://facebook.com"
              className="text-white hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>

          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center md:text-right">
          <p>© 2024 Marc Eddyson V. Cruz All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
