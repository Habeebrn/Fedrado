import React, { useEffect, useState } from "react";
import "./OurWork.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { assets } from "../../Assets/assets";

const OurWork = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 790);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 790);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="our_work">
      <div className="our_work_container">
        <div className="service_header">
          <h3>Our Work</h3>

          <div className="service_header_sec_2">
            <p>
              Our digital marketing service boosts your online presence with
              SEO, social media, and target ads.
            </p>
            <button className="shedule_btn">
              Show More <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
{/* 
        {!isMobile ? (
          <> */}


            <div className="header_line"></div>

            <div className="work_items">
              
              <div className="text_container">
                <div className="item_type_1">
                  <span> Digitl Buisness Solution </span>
                </div>

                <div className="desc_wrapper">
                  <h4>
                    Achieving Success with Tailored Digital Business Solutions
                  </h4>
                  <span className="des_span">
                    We provide complete digital solutions tailored to solve
                    business challenges and ensure assured growth, empowering
                    your success in every step.
                  </span>
                </div>
              </div>

              <div className="work_img_container">
                <div className="index_box">
                  <p>+50%</p>
                  <span>Organic Traffic</span>
                </div>

                <div className="img_wrapper">
                  <img src={assets.support} alt="" />
                </div>
              </div>
            </div>

            <div className="header_line"></div>

            <div className="work_items_2">
              <div className="work_img_container">
                <div className="index_box_diff">
                  <p>+50%</p>
                  <span>Organic Traffic</span>
                </div>

                <div className="img_wrapper">
                  <img src={assets.workIMg1} alt="" />
                </div>
              </div>

              <div className="text_container">
                <div className="item_type">
                  <span>SEO Optimization</span>
                </div>

                <div className="desc_wrapper">
                  <h4>Maximize Visibility with Expert SEO Strategies</h4>
                  <span className="des_span">
                    Boost your online visibility with tailored strategies that
                    improve search engine rankings, drive organic traffic, and
                    connect you with your target audience effectively.
                  </span>
                </div>
              </div>
            </div>

            <div className="header_line"></div>

            <div className="work_items">
              <div className="text_container">
                <div className="item_type">
                  <span>Brand Strategy</span>
                </div>

                <div className="desc_wrapper">
                  <h4>Strengthening Brand Connections and Market Presence</h4>
                  <span className="des_span">
                    Leading to a 60% increase in customer recongnition and
                    loyality. The refreshed image strengthened maket presence
                    and deepened connections with target audience.
                  </span>
                </div>
              </div>

              <div className="work_img_container">
                <div className="index_box">
                  <p>+50%</p>
                  <span>Organic Traffic</span>
                </div>

                <div className="img_wrapper">
                  <img src={assets.buisssSolution} alt="" />
                </div>
              </div>
            </div>


          {/* </>
        ) : (


          <>

          <div className="work_items_mobile_design_1">

            <div className="work_img_container_mobile_design_1">
              <div className="index_box">
                <p>+50%</p>
                <span>Organic Traffic</span>
              </div>

              <div className="img_wrapper">
                <img src={assets.buisssSolution} alt="" />
              </div>
            </div>

            <div className="text_container">
              <div className="item_type">
                <span>Brand Strategy</span>
              </div>

              <div className="desc_wrapper">
                <h4>Strengthening Brand Connections and Market Presence</h4>
                <span className="des_span">
                  Leading to a 60% increase in customer recongnition and
                  loyality. The refreshed image strengthened maket presence and
                  deepened connections with target audience.
                </span>
              </div>
            </div>


            <div className="header_line_mobile"></div>


          </div>


                <div className="work_items_mobile_design_2">

            <div className="work_img_container_mobile_design_2">
              <div className="index_box">
                <p>+50%</p>
                <span>Organic Traffic</span>
              </div>

              <div className="img_wrapper">
                <img src={assets.buisssSolution} alt="" />
              </div>
            </div>

            <div className="text_container">
              <div className="item_type">
                <span>Brand Strategy</span>
              </div>

              <div className="desc_wrapper">
                <h4>Strengthening Brand Connections and Market Presence</h4>
                <span className="des_span">
                  Leading to a 60% increase in customer recongnition and
                  loyality. The refreshed image strengthened maket presence and
                  deepened connections with target audience.
                </span>
              </div>
            </div>


            <div className="header_line_mobile"></div>


          </div>




          <div className="work_items_mobile_design_1">

<div className="work_img_container_mobile_design_1">
  <div className="index_box">
    <p>+50%</p>
    <span>Organic Traffic</span>
  </div>

  <div className="img_wrapper">
    <img src={assets.buisssSolution} alt="" />
  </div>
</div>

<div className="text_container">
  <div className="item_type">
    <span>Brand Strategy</span>
  </div>

  <div className="desc_wrapper">
    <h4>Strengthening Brand Connections and Market Presence</h4>
    <span className="des_span">
      Leading to a 60% increase in customer recongnition and
      loyality. The refreshed image strengthened maket presence and
      deepened connections with target audience.
    </span>
  </div>
</div>


<div className="header_line_mobile"></div>


</div>


















          </>
        )} */}
      </div>
    </div>
  );
};

export default OurWork;
