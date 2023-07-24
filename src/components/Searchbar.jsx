import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import products from './data/products';

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredProducts = products.filter((product) =>
      product.category.title.toLowerCase().includes(query.toLowerCase())
    );

    onSearch(filteredProducts);
  };

  return (
    <>
      <div className='container flex border-2 justify-center items-center md:w-[700px] lg:w-[800px] sm:w-96 mx-auto px-3 py-2 rounded-3xl mt-[5.5rem] bg-white shadow-lg'>
        <input
          type="text"
          placeholder='Search food'
          value={searchQuery}
          onChange={handleSearch}
          className='container rounded-2xl p-2 outline-none bg-transparent'
        />
        <AiOutlineSearch size={20} />
      </div>
    </>
  );
};

export default Searchbar;
