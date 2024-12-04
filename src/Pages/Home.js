// import React, { useRef, useState } from 'react'
// import Header from '../Components/Header/Header';
// import Hero from '../Components/Hero/Hero';
// import Section2 from '../Components/Section2_img/Section2';
// import About_us from '../Components/AboutUs/About_us';
// import "./Home.css"
// import Service from '../Components/OurService/Service';
// import OurWork from '../Components/OurWork/OurWork';
// import WhatOurClientSays from '../Components/WhatOurClientSays/WhatOurClientSays';
// import Footer from '../Components/Footer/Footer';

// const Home = () => {


//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);


//   // Define a scroll function
//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };


//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [borderOffset, setBorderOffset] = useState(283);

//   // const handleScroll = () => {
//   //   const scrollTop = window.scrollY;
//   //   const scrollHeight = document.documentElement.scrollHeight;
//   //   const clientHeight = window.innerHeight;

//   //   const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 283; // 283 is the circumference of the circle
//   //   const borderOffset = 283 - scrollPercentage;

//   //   setBorderOffset(borderOffset);

//   //   setShowScrollTop(scrollTop > clientHeight);
//   // };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // useEffect(() => {
//   //   const handleScrollDebounced = () => {
//   //     handleScroll();
//   //     clearTimeout(window.scrollTimeout);
//   //     window.scrollTimeout = setTimeout(() => {
//   //       document.querySelector(".scroll_top").classList.remove("active");
//   //     }, 100);
//   //   };

//   //   window.addEventListener("scroll", handleScrollDebounced);
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScrollDebounced);
//   //     clearTimeout(window.scrollTimeout);
//   //   };
//   // }, []);

//   return (
//     <div className='home'>


//        <Header />
//       <div id="home" ref={homeRef}>
//         <Hero/>
//       </div>
//       <div id="about" ref={aboutRef}>
//        <Section2/>
//       </div>
//       <div id="aboutUs" ref={aboutRef}>
//        <About_us/>
//       </div>

//       <div id="aboutUs" ref={aboutRef}>
//        <Service/>
//       </div>

//       <div id="aboutUs" ref={aboutRef}>
//        <OurWork/>
//       </div> 

// {/* 
//  <div id="aboutUs" ref={aboutRef}>
//        <WhatOurClientSays/>
//       </div> */}
     
//       <div id="aboutUs" ref={aboutRef}>
//        <Footer/>
//       </div> 

//       </div>
      

//   )
// }

// export default Home




import React, { useRef } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Section2 from "../Components/Section2_img/Section2";
import About_us from "../Components/AboutUs/About_us";
import "./Home.css";
import Service from "../Components/OurService/Service";
import OurWork from "../Components/OurWork/OurWork";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const workRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="home">
      {/* Pass the refs to Header */}
      <Header
        refs={{
          homeRef,
          aboutRef,
          serviceRef,
          workRef,
          footerRef,
        }}
      />
      <div id="home" ref={homeRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <Section2 />
        <About_us />
      </div>
      <div id="service" ref={serviceRef}>
        <Service />
      </div>
      <div id="work" ref={workRef}>
        <OurWork />
      </div>
      <div id="footer" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
