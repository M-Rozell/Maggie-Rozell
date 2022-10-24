
import About from './About';
import "../css/MainHome.css";
import Skills from './Skills';
import Projects from './Projects';
import Kira from '../components/Kira';
import { GiHollowCat } from 'react-icons/gi';
import MainNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import React, { useState, useEffect, useRef } from 'react';
import { CatIcon } from '../components/Navbar/NavbarElements';




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
    }, 500)
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

      <div id='mainHomeContainer'>

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
          <Skills CloseKiraVideo={setOpenKira} />
        </section>
      
      </div>

      <section className='homeSections'>
        <div ref={videoSection}>
          {openKira && <Kira />}
        </div>
      </section>

    </>

  )
};

export default MainHome;