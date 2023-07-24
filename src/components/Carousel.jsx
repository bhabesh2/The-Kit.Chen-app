import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    const slides = [
        {
            url: 'https://source.unsplash.com/random/300*300/?ramen',
        },
        {
            url: 'https://source.unsplash.com/random/300*300/?biriyani',
        },
        {
            url: 'https://source.unsplash.com/random/300*300/?dosa',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="container mx-auto h-[500px] p-4 border-2 mt-[6rem] relative rounded-2xl group bg-white">
                <img
                    src={slides[currentIndex].url}
                    alt="carousel slide"
                    className="w-full h-full object-cover duration-500 rounded-xl"
                />
                <div
                    className="hidden group-hover:block left-button absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-3 bg-white cursor-pointer"
                    onClick={prevSlide} style={{
                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <BsChevronCompactLeft />
                </div>
                <div
                    className="hidden group-hover:block right-button absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-3 bg-white cursor-pointer"
                    onClick={nextSlide} style={{
                        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <BsChevronCompactRight />
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((icons, index) => (
                        <div
                            key={index}
                            onClick={() => gotoSlide(index)}
                            className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-black' : 'text-gray-400'
                                }`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;

