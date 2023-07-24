import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import products from '../components/data/products';
import Footer from '../components/Footer';

const Home = () => {
  const firstTenProducts = products.slice(0, 8);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/food');
  };

  return (
    <>
      <Navbar />
      <Carousel />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 py-3'>
        {firstTenProducts.map((product, index) => (
          <div key={index} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <Card product={product} showButton={false}/>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
