
import About from './About';
import "../css/MainHome.css";
import Skills from './Skills';
import Projects from './Projects';
import { GiHollowCat } from 'react-icons/gi';
import MainNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import React, { useState, useRef, Suspense } from 'react';
import { CatIcon } from '../components/HeroSection/HeroElements';

const Kira = React.lazy(() => import("../components/Kira"))



const MainHome = () => {


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



  return (

    <>
      <MainNavbar CloseKiraVideo={setOpenKira} aria-label="navbar"/>

      <CatIcon onClick={() => { setOpenKira(true) }} aria-label="cat video">
        <GiHollowCat onClick={() => { scrollDownVideo() }} />
      </CatIcon>

      <main>
        <section className='homeSections'>
          <HeroSection />
        </section>

        <section className='aboutSections'>
          <About />
        </section>

        <section className='projectSections'>
          <Projects />
        </section>

        <section className='skillsSections'>
          <Skills CloseKiraVideo={setOpenKira} />
        </section>



        <section className='kiraSections'>
          <div ref={videoSection}>
            {openKira && (
              <Suspense fallback={<p>Loading...</p>}>
                <Kira />
              </Suspense>)}
          </div>
        </section>
      </main>
    </>

  )
};

export default MainHome;