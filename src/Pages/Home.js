


import React, { useRef } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Section2 from "../Components/Section2_img/Section2";
import About_us from "../Components/AboutUs/About_us";
import "./Home.css";

import Footer from "../Components/Footer/Footer";
import EmptyDiv from "../Components/EmptyDiv/EmptyDiv";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const workRef = useRef(null);
  const footerRef = useRef(null);



  

  return (
    <div className="home">
      {/* Pass the refs to Header */}

      <EmptyDiv/>

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
        {/* <Section2 /> */}
        <About_us />
      </div>


      <div id="footer" ref={footerRef}>
        <Footer

refs={{
  homeRef,
  aboutRef,
  serviceRef,
  workRef,
  footerRef,
}}

        
        />
      </div>
    </div>
  );
};

export default Home;
