import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import Kira from '../components/Kira';
import MainNavbar from '../components/Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import { CatIcon } from '../components/Navbar/NavbarElements';
import { GiHollowCat } from 'react-icons/gi';
import "../css/MainHome.css";

const MainHome = () => {

  const [cat, setCat] = useState(true)
  const [openKira, setOpenKira] = useState(false);
  const videoSection = useRef(null);

  const scrollDownVideo = () => {
    setTimeout(() => {
      window.scrollTo({
        top: videoSection.current.offsetTop,
        behavior: 'smooth'
      })
    }, 100)
  };

  const changeCat = () => {
    if (window.scrollY >= 80) {
      setCat(false)
    } else {
      setCat(true)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeCat)
  }, []);


  return (
    <>
      <MainNavbar CloseKiraVideo={setOpenKira} />

      {cat && <CatIcon onClick={() => { setOpenKira(true) }} >
        <GiHollowCat onClick={() => { scrollDownVideo() }} />
      </CatIcon>}

      <section className='homeSections'>
        <HeroSection />
      </section>
      <section className='homeSections'>
        <About />
      </section>
      <section className='homeSections'>
        <Projects />
      </section>
      <section className='homeSections'>
        <Skills CloseKiraVideo={setOpenKira}/>
      </section>
      <section className='homeSections'>
        <div ref={videoSection}>
          {openKira && <Kira />}
        </div>
      </section>
    </>
  )
};

export default MainHome;