import React from 'react'
import "./Section2.scss"
import { assets } from '../../Assets/assets'

const Section2 = () => {
  return (
    <div className='section2'>

      <div className="section2_items">

  

          <div className="img_wrapper_sec_2">
            <img src={assets.logo_footer} alt="" />
          </div>

          <div className="text_container_sec_2">
            <span>BOOST</span>
            <span>YOUR BRAND</span>
          </div>

          


      
      </div>
        
    </div>
  )
}

export default Section2