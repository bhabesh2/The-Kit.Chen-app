import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-3 gap-4 md:gap-8 items-center justify-center">
        <div className="main text-center md:text-left">
          <h1 className="text-2xl font-bold">Kit.Chen</h1>
          <div className="copy-right">
            <p>&copy; 2023 All rights reserved</p>
          </div>
        </div>
        <div className="social-media flex items-center justify-center gap-3">
          <a href="https://www.facebook.com/bhabesh.bharali.355" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-xl hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/bhabesh-bharali-728175244/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl hover:text-blue-500" />
          </a>
          <a href="https://github.com/bhabesh2" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-xl hover:text-blue-500" />
          </a>
        </div>
        <div className="made-with-love text-center mt-4 md:mt-0">
          Made with <span className="inline-block"><FaHeart style={{ color: 'red' }}/></span> by Bhabesh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
