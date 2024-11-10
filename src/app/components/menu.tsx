"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import openicon from '../../../public/open.png'
import closeicon from '../../../public/close.png'
import styles from '../../styles/menu.module.css'

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {!open ? (
          <Image
            src= {openicon}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src= {closeicon}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      
        {open&& <div className={styles.class}>
            <Link href={"/"} className={styles.class1}>
              Home
            </Link>
            <Link href={"#about"} onClick={()=>setOpen(false)} className={styles.class2}>
              About
            </Link>
            <Link href={"#skills"} onClick={()=>setOpen(false)} className={styles.class2}>
              Skills
            </Link>
            <Link href={"#projects"} onClick={()=>setOpen(false)} className={styles.class2}>
              Projects
            </Link>
            <Link href={"#contact"} onClick={()=>setOpen(false)} className={styles.class2}>
              Contact
            </Link>
        </div>

        }
      
    </>
  );
};

export default Menu;

