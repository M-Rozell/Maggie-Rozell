
import About from './About';
import "../css/MainHome.css";
import Skills from './Skills';
import Projects from './Projects';
// import Kira from '../components/Kira';
import { GiHollowCat } from 'react-icons/gi';
import MainNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import React, { useState, useRef, Suspense } from 'react';
import { CatIcon } from '../components/HeroSection/HeroElements';

const Kira = React.lazy(() => import("../components/Kira"))



const MainHome = () => {

  // const [cat, setCat] = useState(true)
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

  // const changeCat = () => {
  //   if (window.scrollY >= 80) {
  //     setCat(false)
  //   } else {
  //     setCat(true)
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeCat)
  // }, []);



  return (

    <>

      <MainNavbar CloseKiraVideo={setOpenKira} />

      <CatIcon onClick={() => { setOpenKira(true) }} >
        <GiHollowCat onClick={() => { scrollDownVideo() }} />
      </CatIcon>

      {/* <div id='mainHomeContainer' className=''>
        </div> */}


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

    </>

  )
};

export default MainHome;