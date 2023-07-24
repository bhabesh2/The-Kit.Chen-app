import React from 'react';

const Card = ({ product, showButton, onAddToCart }) => {
  return (
    <div className="flex flex-col border-2 p-3 rounded-xl bg-white transition-shadow duration-300">
      <img src={product.img} alt="error" className="w-full my-2 rounded-xl object-cover" />
      <div className="info flex flex-col space-y-3">
        <h2 className="title font-bold text-xl">{product.category.title}</h2>
        <p className="description">{product.description}</p>
        <h3>
          Price:&nbsp;<span className="font-bold">₹&nbsp;{product.price}</span>
        </h3>
      </div>
      {showButton && (
        <button
          className="w-fit mx-auto inline-block p-2 rounded-full bg-black text-white shadow-lg"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Card;

