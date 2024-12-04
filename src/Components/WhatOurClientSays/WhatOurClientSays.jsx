import React from 'react'
import "./WhatOurClientSays.scss"
import { assets } from '../../Assets/assets'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const WhatOurClientSays = () => {
  return (
    <div className='whatourclientsays'>

        <div className="whatourclientsays_container">

            <div className="whatourclientsays_container_header">
                <h5>What Client Says</h5>
                <p className='header_desc'>
                    Our clients'feedback speaks volumes. Discover their stories of success, collabration, and the impactful results we've delivered together
                </p>
            </div>

            <div className="testimonial_wrapper">

              <div className="testimonial_item">
                <div className="testimonial_item_header">
                  <div className="img_wrapper">
                    <img src={assets.client} alt="" />
                  </div>
                  <div className="testimonial_item_header_text">
                    <span>Robert Fox</span>
                    <p>Ceo of Urban nests</p>
                  </div>
                </div>

                <p>We have seen incredible growth thanks to their tailored digital markeing strategies. The team's expertise in SEO and social media has been invaluable</p>

              </div>

              <div className="testimonial_item">
                <div className="testimonial_item_header">
                  <div className="img_wrapper">
                    <img src={assets.workIMg1} alt="" />
                  </div>
                  <div className="testimonial_item_header_text">
                    <span>Eddie</span>
                    <p>Manager FasionWave's</p>
                  </div>
                </div>

                <p>The digital marketing team transformned or online presence, delivering expetional reuslts with their SEO and targeted ads. Highly recommend their professional approach</p>

              </div>


              
            </div>

            <div className="controler_wrapper_main">

           

            <div className="controler_wrapper">

                    
            <div className="arrow_wrapper">

            <RiArrowLeftSLine />

                  </div>

                  <span> 4/10 </span>

                  <div className="arrow_wrapper">
                  <RiArrowRightSLine />

                  </div>
            </div>

            </div>







        </div>


        
    </div>
  )
}

export default WhatOurClientSays