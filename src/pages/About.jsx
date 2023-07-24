import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center underline font-bold text-white mt-[5.3rem]">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-10 md:px-10">
        <div className="flex justify-center items-center">
          <img
            src="https://source.unsplash.com/random/300x300/?biriyani"
            alt="error"
            className=" w-96 h-96 rounded-lg object-cover"
          />
        </div>
        <div className=" text-white">
          <h2 className='text-2xl font-bold mb-4'>Welcome To Kit.Chen</h2>
          <p className='text-justify'>
            Hi! i am <strong>Bhabesh Bharali</strong>, a visionary developer with a passion for crafting exceptional digital experiences. His latest creation, "Kit.Chen," is an extraordinary food ordering app that promises to whisk users away on a gastronomic adventure like no other.

            "Kit.Chen" is a culinary marvel that beckons food enthusiasts to embark on a delightful journey through a world of delectable flavors and exquisite cuisines. With an impressive array of handpicked dishes, this app offers a remarkable dining experience right at your fingertips.

            At its core, "Kit.Chen" is powered by cutting-edge technology. Bhabesh ingeniously integrated React and Redux, transforming the app into a seamless ordering platform. From tantalizing appetizers to mouthwatering main courses and heavenly desserts, users can easily add their favorite dishes to the cart and indulge their cravings effortlessly.

            What sets "Kit.Chen" apart is Bhabesh's meticulous attention to detail. Through the ingenious use of local storage, user preferences are thoughtfully preserved, ensuring a personalized and convenient ordering process every time they return.

            But that's not all! Bhabesh's ingenuity shines brightly with the addition of real-time pop-up messages. Whenever a scrumptious dish is added to the cart, a delightful message pops up, celebrating the successful addition and adding a touch of magic to the dining experience.

            Visually, "Kit.Chen" is a masterpiece. Bhabesh's expertise in Tailwind CSS crafts a stunning, mobile-responsive layout that guarantees an enchanting visual feast, no matter the device.
            </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
