
import Link from 'next/link'
import React from 'react'
import Menu from './menu'
import styles from '../../styles/navbar.module.css'

const Navbar = () => {
  return (
<nav className={styles.class}>

    <div className={styles.class1}>
       <Link href='/' className={styles.class2}> NIMRA&apos;S PORTFOLIO </Link> 
    </div>

    <div className={styles.class3}>
    <Link href={"/"} className={styles.class4}>
              Home
            </Link>
            <Link href={"#about"} className={styles.class4}>
              About
            </Link>
            <Link href={"#skills"} className={styles.class4}>
              Skills
            </Link>
            <Link href={"#projects"} className={styles.class4}>
              Projects
            </Link>
            <Link href={"#contact"} className={styles.class4}>
              Contact
            </Link>
    </div>

    <div className='md:hidden px-6'>
        <Menu />
    </div>

    </nav>
  )
}

export default Navbar