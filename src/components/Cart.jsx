// Cart.js
import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <Link
      to="/your-order"
      className="bg-white flex justify-center items-center p-3 rounded-full space-x-2"
    >
      <BsFillCartFill size={20} />
      <p>({cartItems.length})</p>
    </Link>
  );
};

export default Cart;



