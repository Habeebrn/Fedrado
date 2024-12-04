// import React, { useState } from 'react'
// import { ScrollLink } from 'react-scroll';
// import {assets} from "../../Assets/assets"
// import { IoClose, IoMenu } from 'react-icons/io5';
// import "./Header.css"

// const Header = () => {

//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleSetActive = (to) => {
//     setActiveSection(to);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <header>
//     <h1>
//       <img src={assets.logo} alt="" className="logoo" />
//     </h1>
//     <ul className={isMobileMenuOpen ? "mobile-menu" : ""}>
//       <li>
//         <ScrollLink
//           to="home"
//           spy={true}
//           smooth={true}
//           duration={500}
//           onSetActive={handleSetActive}
//           className={activeSection === "home" ? "active" : ""}
//           onClick={closeMobileMenu}
//         >
//           Home
//         </ScrollLink>
//       </li>
//       <li>
//         <ScrollLink
//           to="about"
//           spy={true}
//           smooth={true}
//           duration={500}
//           onSetActive={handleSetActive}
//           className={activeSection === "about" ? "active" : ""}
//           onClick={closeMobileMenu}
//         >
//           About Us
//         </ScrollLink>
//       </li>

//       <li>
//         <ScrollLink
//           to="packages"
//           spy={true}
//           smooth={true}
//           duration={500}
//           onSetActive={handleSetActive}
//           className={activeSection === "packages" ? "active" : ""}
//           onClick={closeMobileMenu}
//         >
//           Our Service
//         </ScrollLink>
//       </li>

//       <li>
//         <ScrollLink
//           to="OurTourCoordinators"
//           spy={true}
//           smooth={true}
//           duration={500}
//           onSetActive={handleSetActive}
//           className={activeSection === "OurTourCoordinators" ? "active" : ""}
//           onClick={closeMobileMenu}
//         >
//           Our Work
//         </ScrollLink>
//       </li>

//       <li>
//         <ScrollLink
//           to="OurTourCoordinators"
//           spy={true}
//           smooth={true}
//           duration={500}
//           onSetActive={handleSetActive}
//           className={activeSection === "OurTourCoordinators" ? "active" : ""}
//           onClick={closeMobileMenu}
//         >
//           Our clients
//         </ScrollLink>
//       </li>

//     </ul>
//     {isMobileMenuOpen ? (
//       <IoClose onClick={toggleMobileMenu} className="menu-icon" />
//     ) : (
//       <IoMenu onClick={toggleMobileMenu} className="menu-icon" />
//     )}
//   </header>
//   )
// }

// export default Header



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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <h1>
        <img src={assets.logo} alt="Logo" className="logoo" />
      </h1>


      <ul className={isMobileMenuOpen ? "mobile-menu" : ""}>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => {
            setActiveSection("home");
            scrollToSection(homeRef);
          }}
        >
          Home
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => {
            setActiveSection("about");
            scrollToSection(aboutRef);
          }}
        >
          About Us
        </li>
        <li
          className={activeSection === "service" ? "active" : ""}
          onClick={() => {
            setActiveSection("service");
            scrollToSection(serviceRef);
          }}
        >
          Our Service
        </li>
        <li
          className={activeSection === "work" ? "active" : ""}
          onClick={() => {
            setActiveSection("work");
            scrollToSection(workRef);
          }}
        >
          Our Work
        </li>
        <li
          className={activeSection === "footer" ? "active" : ""}
          onClick={() => {
            setActiveSection("footer");
            scrollToSection(footerRef);
          }}
        >
          Contact Us
        </li>
      </ul>


      {isMobileMenuOpen ? (
        <IoClose onClick={toggleMobileMenu} className="menu-icon_close" />
      ) : (
        <IoMenu onClick={toggleMobileMenu} className="menu-icon" />
      )}
    </header>
  );
};

export default Header;
