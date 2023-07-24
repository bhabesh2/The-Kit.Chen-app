// Food.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../components/Card';
import products from '../components/data/products';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

const Food = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const dispatch = useDispatch();

  const handleSearch = (results) => {
    setFilteredProducts(results);
  };

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <>
      <Navbar />
      <Searchbar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 py-3">
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            product={product}
            showButton={true}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Food;

