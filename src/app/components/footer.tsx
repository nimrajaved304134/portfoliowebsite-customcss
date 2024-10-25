import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs"; 

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col bg-transparent">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-stone-700">
            <span className="ml-3 text-xl">Nimra</span> 
          </a>
          <p className="text-sm text-stone-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Nimra. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/nimra-javed-25a7512bb/"} 
              className="text-stone-500"
            >
              <BsLinkedin className="text-3xl hover:text-[#0077b5]" /> 
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

      