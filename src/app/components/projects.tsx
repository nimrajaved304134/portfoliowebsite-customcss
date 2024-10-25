import Image from "next/image";
import Link from "next/link";
import React from "react";
import bakery from '../../../public/bakery.jpg';
import calculator from '../../../public/calculator.jpg';
import countdowntimer from '../../../public/countdowntimer.jpg'

const Project = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-stone-700">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project 1*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={bakery}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200  opacity-0 hover:opacity-100 hover:bg-gradient-to-r from-fuchsia-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Bakery Web Page Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-stone-700 mb-3">
                  Bakery Web Page
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  A visually appealing website for a bakery, showcasing delicious products, with smooth navigation and an inviting design to attract customers.
                  </p>

                    <p className="leading-relaxed text-blue-500 hover:underline cursor-pointer">
                      View Project..
                    </p>

                </div>
              </div>
            </div>
            {/* Project 2*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={calculator}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200  opacity-0 hover:opacity-100 hover:bg-gradient-to-r from-fuchsia-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-STONE-700 mb-3">
                  Calculator
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  A user-friendly calculator built with clean design and precise functionality, allowing users to perform basic arithmetic operations with ease.
                  </p>

                    <p className="leading-relaxed text-blue-500 hover:underline cursor-pointer">
                      View Project..
                    </p>

                </div>
              </div>
            </div>
            {/* Project 3*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={countdowntimer}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200  opacity-0 hover:opacity-100 hover:bg-gradient-to-r from-fuchsia-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  Countdown Timer Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-stone-700 mb-3">
                  Countdown Timer
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  A responsive countdown timer that helps track time for various events, with a simple interface and customizable countdown settings.
                  </p>

                    <p className="leading-relaxed text-blue-500 hover:underline cursor-pointer">
                      View Project..
                    </p>
                    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      