import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const YourOrder = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update LocalStorage whenever the cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center text-white mt-5">
        <h1 className="text-2xl font-bold mb-4">Your Order</h1>
        <p>No items have been selected.</p>
        <p>Do you want to add some?</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-white my-5">Your Order</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        {cartItems.map((item) => (
          <div className="bg-white p-4 rounded-md shadow-md" key={item.id}>
            <img src={item.img} alt={item.description} className="w-full h-32 object-cover rounded-md mb-4" />
            <p className="text-lg font-bold mb-1">{item.category.title}</p>
            <p className="text-lg font-normal mb-2">{item.description}</p>
            <p className="text-gray-600 font-bold">₹{item.price}</p>
            <div className="quantity flex justify-end items-center gap-2">
              <button
                className="increase w-fit h-fit px-3 bg-green-600 rounded-xl"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </button>
              <button
                className="decrease px-3 bg-red-600 rounded-xl text-center"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                -
              </button>
              <div className="display w-10 h-10 rounded-full border-2 text-center flex justify-center items-center">
                {item.quantity}
              </div>
            </div>
            <button
              className="mt-2 px-4 py-2 bg-red-600 rounded-xl my-2 text-white font-semibold"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <>
          <p className="text-xl mt-4 font-bold text-white mx-5">Total Items: {cartItems.length}</p>
          <p className="text-xl mt-4 font-bold text-white mx-5">Total Payable: ₹{total}</p>
        </>
      )}
      {cartItems.length > 0 && (
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 mx-5 font-bold">Buy Now</button>
      )}
    </div>
  );
};

export default YourOrder;
