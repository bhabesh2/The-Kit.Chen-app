import React, { useState } from 'react';
import { FaBars, FaHome, FaUtensils, FaInfoCircle } from 'react-icons/fa';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto flex items-center justify-between p-4 relative">
          <div className="logo text-white text-2xl font-bold">
            <span>Kit.</span>
            <span>Chen</span>
          </div>
          <div className="menu-items flex items-center space-x-4">
            {/* Mobile Menu Icon */}
            <FaBars
              className="text-white block md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            {/* Desktop Menu List */}
            <ul className="hidden md:flex space-x-6">
              <li className="text-white flex items-center space-x-2">
                <Link to="/" className='flex space-x-2'>
                  <FaHome size={18} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-white flex items-center space-x-2">
                <Link to="/food" className='flex space-x-2'>
                  <FaUtensils size={18} />
                  <span>Food</span>
                </Link>
              </li>
              <li className="text-white flex items-center space-x-2">
                <Link to="/about" className='flex space-x-2'>
                  <FaInfoCircle size={18} />
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Cart for Large Screens */}
          <div className="hidden md:block">
            <Cart cartItems={cartItems} />
          </div>
        </nav>
      </header>
      {/* Mobile Menu List */}
      <div
        className="md:hidden bg-gray-800"
        style={{
          maxHeight: isMenuOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out',
        }}
      >
        <ul className="flex flex-col space-y-4 p-6 justify-center items-center mt-20">
          <li className="text-white flex items-center space-x-2">
            <Link to="/" className='flex space-x-2'>
              <FaHome size={18} />
              <span>Home</span>
            </Link>
          </li>
          <li className="text-white flex items-center space-x-2">
            <Link to="/food" className='flex space-x-2'>
              <FaUtensils size={18} />
              <span>Food</span>
            </Link>
          </li>
          <li className="text-white flex items-center space-x-2">
            <Link to="/about" className='flex space-x-2'>
              <FaInfoCircle size={18} />
              <span>About</span>
            </Link>
          </li>
        </ul>
        {/* Cart for Mobile */}
        <div className="flex justify-center my-2">
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
