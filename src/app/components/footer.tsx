
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs"; 
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.class}>
        <div className={styles.class1}>
          <a className={styles.class2}>
            <span className={styles.class3}>Nimra</span> 
          </a>
          <p className={styles.class4}>
            © {new Date().getFullYear()} Nimra. All rights reserved.
          </p>
          <span className={styles.class5}>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/nimra-javed-25a7512bb/"} 
              className={styles.class6}
            >
              <BsLinkedin className={styles.class7} /> 
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;