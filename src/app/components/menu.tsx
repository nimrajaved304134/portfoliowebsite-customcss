"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {!open ? (
          <Image
            src={require("../../../public/open.png")}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src={require("../../../public/close.png")}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      
        {open&& <div className='text-white bg-gradient-to-bl from-blue-600 to-red-600 absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center w-full text-3xl z-10'>
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#about"} onClick={()=>setOpen(false)} className="mr-5 hover:text-blue-800">
              About
            </Link>
            <Link href={"#skills"} onClick={()=>setOpen(false)} className="mr-5 hover:text-blue-800">
              Skills
            </Link>
            <Link href={"#projects"} onClick={()=>setOpen(false)} className="mr-5 hover:text-blue-800">
              Projects
            </Link>
            <Link href={"#contact"} onClick={()=>setOpen(false)} className="mr-5 hover:text-blue-800">
              Contact
            </Link>
        </div>

        }
      
    </>
  );
};

export default Menu;

