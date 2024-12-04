import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import "./Hero.scss"
import { LuArrowDownRight } from 'react-icons/lu'
import  UseheroBreakPoint  from "./heroBreakPoint"
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll';


const Hero = () => {

  const breakpoint = UseheroBreakPoint();
  const isMobile = breakpoint <= 470;


  const navigation = useNavigate();


  const handleNavigation = ()=> {
    navigation("/service");
  }

  const handleScroll = () => {
    scroller.scrollTo('service', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };


  return (
    <div className='hero'>

        <div className="logo_text">
            <div className="line_"></div>
              <h3>Fedrado</h3>
            <div className="line_"></div>
        </div>
        <h2>DIGITAL BUSINESS SOLUTION</h2>

        { isMobile ? 
 <p>
Innovative solutions to elevate your brand, drive growth, and transform your digital presence.
 </p>

 :   <p>
 Innovative business solutions designed to elevate your brand, dive growth, and transform your presence in today's digital landscape.
 </p>
         
      }
        <div className="herBtnContainer">
            <div
            onClick={() => {
              const message = encodeURIComponent("Hello, I would like to discuss your services.");
              const whatsappURL = `https://wa.me/9745937395?text=${message}`;
              window.open(whatsappURL, "_blank");
            }}

            className="getInBtn">
            Get In Touch <MdOutlineArrowOutward />
            </div>


            <div 
            
            onClick={handleScroll}
            className="larnMoreBtn">
                Learn More <LuArrowDownRight />
            </div>

      
        </div>
        
    </div>
  )
}

export default Hero