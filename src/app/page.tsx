import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/hero'
import About from './components/about'
import Skill from './components/skills'
import Project from './components/projects'
import ContactMe from './components/contactme'

const page = () => {
  return (
  <div className="bg-gradient-to-bl from-blue-400 to-red-400 ">
  <Navbar/>
  <Hero/>
  <hr className='bg-rose-500 h-2 blur-xl'/>
  <About/>
  <hr className='bg-rose-500 h-2 blur-xl'/>
  <Skill/>
  <hr className='bg-rose-500 h-2 blur-xl'/>
  <Project/>
  <hr className='bg-rose-500 h-2 blur-xl'/>
  <ContactMe/>
  <hr className='bg-rose-500 h-2 blur-xl'/>
  <Footer/>
  </div>
  )
}

export default page