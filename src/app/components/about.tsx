import Image from "next/image";
import React from "react";
import pic2 from '../../../public/pic2.jpg'
import styles from '../../styles/about.module.css'

const About = () => {
  return (
    <div className={styles.class} id="about">
      <section className={styles.class1}>
        <div className={styles.class2}>
          <div className={styles.class3}>
            <Image
              className={styles.class4}
              alt="hero"
              src={pic2}
              width={300}
              height={500}
            />
          </div>
          <div className={styles.class5}>
            <h1 className={styles.class6}>
              About Me
            </h1>
            <p className={styles.class7}>
            Hi, I&apos;m Nimra! I&apos;m a passionate frontend developer with a knack for building functional and visually appealing websites using HTML, CSS, and TypeScript. I love both coding and design, ensuring each project I work on is user-friendly and efficient.
            </p>
            <p className={styles.class7}>
            Currently, I&apos;m expanding my skills as an aspiring fullstack developer to handle complete web applications. I&apos;m also dedicated to teaching, helping others grow in their web development journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      