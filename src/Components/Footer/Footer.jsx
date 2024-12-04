


import React from "react";
import "./Footer.scss";
import { RiMessage2Line } from "react-icons/ri";
import { assets } from "../../Assets/assets";
import UseheroBreakPoint from "../OurService/ourservice";

const Footer = () => {
  const breakpoint = UseheroBreakPoint();

  const isBig = breakpoint > 865;
  const isTab = breakpoint > 760 && breakpoint <= 865; // Between 761 and 865
  const isTabSmall = breakpoint <= 760; // Specifically for smaller devices

  const isMobileSmall = breakpoint <= 395;

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_header_div">
          <h4>Ready To Launch Your Digital Marketing Project?</h4>
          <span>
            Ready to launch your digital marketing project? Let us craft
            strategies that drive results and growth.
          </span>
          <button 
           onClick={() => {
            const message = encodeURIComponent("Hello, I would like to discuss your services.");
            const whatsappURL = `https://wa.me/9745937395?text=${message}`;
            window.open(whatsappURL, "_blank");
          }}

          className="engage_Btn">
            <RiMessage2Line /> Let's Talk
          </button>
        </div>

        <div className="footer_items_wrapper">
          <div className="footer_items_footer_text">
            <div className="footer_items_footer_text_logoNtext">
              <div className="footer_img_wrapper">
                <img src={assets.logo_footer} alt="Fedrado Logo" />
              </div>
              <span>Fedrado</span>
            </div>

            {/* Footer Text Based on Breakpoints */}
            {isTabSmall ? (
              <span>
                Innovative digital solutions for your success. © FEDRADO. All
                rights reserved. Let’s grow together!
              </span>
            ) : isTab ? (
              <span>
                Empowering businesses with innovative digital solutions for
                success. From branding to operations, we deliver strategies
                that drive growth and scalability. Partner with FEDRADO for a
                brighter future.
              </span>
            ) : (
              <span>
                Empowering businesses with innovative digital solutions
                tailored for success. From branding to operations, we deliver
                results-driven strategies to help you scale and thrive. Partner
                with us and experience growth like never before. © FEDRADO. All
                rights reserved. Let's build a brighter future together!
              </span>
            )}
          </div>

          {/* Footer Links */}
          <div className="footer_items_li_continer">
            <ul>
              <li className="headingUl">MENU</li>
              <li>Home</li>
              <li>Service</li>
              <li>Our Work</li>
              <li>Projects</li>
              <li>About Us</li>
            </ul>

            <ul>
              <li className="headingUl">SERVICES</li>
              <li>Web & App Development</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing</li>
              <li>SEO</li>
              <li>Creative & Content</li>
            </ul>

            <ul>
              <li className="headingUl">SOCIAL MEDIA</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="line_bottom"></div>
        <div className="bottom_terms_conditions">

        {
  isMobileSmall ? (
    <>
      <span>© 2024 FEDRADO</span>
      <span>Terms | Privacy</span>
    </>
  ) : (
    <>
      <span>© 2024 FEDRADO. All Rights Reserved</span>
      <span>Terms & Conditions | Privacy Policy</span>
    </>
  )
}


         


        </div>
      </div>
    </div>
  );
};

export default Footer;
