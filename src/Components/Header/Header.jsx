

import React, { useState } from "react";
import { assets } from "../../Assets/assets";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Header.css";

const Header = ({ refs }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { homeRef, aboutRef, serviceRef, workRef, footerRef } = refs;

  // Scroll function to scroll smoothly to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close the menu for mobile
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation(); 
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  

  return (

    <header> 
      <h1>
        <img src={assets.logo} alt="Logo" className="logoo" />
      </h1>


      <ul className= "mobile-menu"
      // {isMobileMenuOpen ? "mobile-menu" : ""}
      >
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={(e) => {
               e.stopPropagation(); 
            setActiveSection("home");
            scrollToSection(homeRef);
          }}
        >
          Home
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={(e) => {
               e.stopPropagation(); 
            setActiveSection("about");
            scrollToSection(aboutRef);
          }}
        >
          About Us
        </li>
        <li
          className={activeSection === "service" ? "active" : ""}
          onClick={(e) => {
               e.stopPropagation(); 
            setActiveSection("service");
            scrollToSection(serviceRef);
          }}
        >
          Our Service
        </li>
        <li
          className={activeSection === "work" ? "active" : ""}
          onClick={(e) => {
               e.stopPropagation(); 
            setActiveSection("work");
            scrollToSection(workRef);
          }}
        >
          Our Work
        </li>
        <li
          className={activeSection === "footer" ? "active" : ""}
          onClick={(e) => {
               e.stopPropagation(); 
            setActiveSection("footer");
            scrollToSection(footerRef);
          }}
        >
          Contact Us
        </li>
      </ul>


      {isMobileMenuOpen ? (
        <IoClose onClick={ (e)=> toggleMobileMenu(e)} className="menu-icon_close" />
      ) : (
        <IoMenu onClick={  (e)=> toggleMobileMenu(e)} className="menu-icon" />
      )}
    </header>
  );
};

export default Header;
