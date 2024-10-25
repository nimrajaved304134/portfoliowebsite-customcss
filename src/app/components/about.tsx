import Image from "next/image";
import React from "react";
import pic2 from '../../../public/pic2.jpg'

const About = () => {
  return (
    <div className="bg-transparent" id="about">
      <section className="text-gray-600 body-font bg-transparent">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={pic2}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-700">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed text-stone-700 text-xl font-semibold">
            Hi, I&apos;m Nimra! I&apos;m a passionate frontend developer with a knack for building functional and visually appealing websites using HTML, CSS, and TypeScript. I love both coding and design, ensuring each project I work on is user-friendly and efficient.
            </p>
            <p className="mb-5 leading-relaxed text-stone-700 text-xl font-semibold">
            Currently, I&apos;m expanding my skills as an aspiring fullstack developer to handle complete web applications. I&apos;m also dedicated to teaching, helping others grow in their web development journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      