"use client"; // Ensure this component is rendered on the client side

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 
import pic1 from '../../../public/pic1.jpg';
import pic2 from '../../../public/pic2.jpg';
import pic3 from '../../../public/pic3.jpg';
import pic4 from '../../../public/pic4.jpg';
import pic7 from "../../../public/pic7.jpg";
import Link from 'next/link';

const Hero = () => {
  const data = [
    {
      id: 1,
      title: " Hello, I&apos;m Nimra! ",
      description: "A tech enthusiast with a passion for building innovative solutions.",
      image: {
        src: pic2, 
        alt: 'intro slide',
      },
    },
    {
      id: 2,
      title: "Skilled Website Developer",
      description: "Crafting functional and dynamic websites with clean code and seamless user experiences.",
      image: {
        src: pic4, 
        alt: 'skill 1',
      },
    },
    {
      id: 3,
      title: "Creative Website Designer",
      description: "Designing visually appealing, responsive, and user-friendly web interfaces that leave a lasting impression.",
      image: {
        src: pic3, 
        alt: 'skill 2',
      },
    },
    {
      id: 4,
      title: "Aspiring Fullstack Developer",
      description: "Continuously expanding my skillset to handle both frontend and backend development for complete, robust web solutions.",
      image: {
        src: pic7, 
        alt: 'skill 3',
      },
    },
    {
      id: 5,
      title: "Dedicated Instructor and Teacher",
      description: "Sharing my knowledge to inspire and guide others in their journey through web development and design.",
      image: {
        src: pic1, 
        alt: 'skill 4',
      },
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000); 

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row '>

      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-stone-700 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <p className='text-2xl justify-center items-center flex text-center	'>
          {data[currentSlide].description}
        </p>
        <button className='bg-gradient-to-bl from-blue-600 to-red-600 text-white py-4 my-6 px-8 hover:animate-spin text-xl'>
          <Link href={'#contact'}>
          Contact Me
          </Link>
        </button>
      </div>

      <div className='w-full flex-1 flex relative justify-center items-center m-8 '>
        <Image
          src={data[currentSlide].image.src} 
          alt={data[currentSlide].image.alt} 
          className='object-cover drop-shadow-2xl rounded-md justify-center items-center md:m-24 h-3/4 w-2/3 flex border-rose-500 border-8 border-opacity-40'

        />
      </div>
    </div>
  );
};

export default Hero;