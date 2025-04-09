import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import "./Hero.scss"
import { LuArrowDownRight } from 'react-icons/lu'
import  UseheroBreakPoint  from "./heroBreakPoint"
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll';
import { IoCall } from 'react-icons/io5'
import { TbPhoneCall } from 'react-icons/tb'
import Shedule from '../Shedule/Shedule'


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

 <div className="hero_cotent_box_1">

    

        <div className="logo_text">
            {/* <div className="line_"></div> */}
              <h3>YOUR GATEWAY TO SUCCESS!
              </h3>
            {/* <div className="line_"></div> */}
        </div>
        <h2>WE ARE HERE TO MAKE YOUR FUTURE DREAMS COME TRUE</h2>

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
                 <TbPhoneCall />

            Call Us now
            {/* <MdOutlineArrowOutward /> */}
        

            </div>


            <div 
            
            onClick={handleScroll}
            className="larnMoreBtn">
                Our Cources <LuArrowDownRight />
            </div>

      
        </div>

        </div>

        <div className="hero_cotent_box_2">

        <Shedule />

        </div>
        
    </div>
  )
}

export default Hero