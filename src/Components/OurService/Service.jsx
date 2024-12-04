import React, { useState } from "react";
import "./Service.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import UseheroBreakPoint from "./ourservice";
import Shedule from "../Shedule/Shedule";


const Service = () => {
  const breakpoint = UseheroBreakPoint();
  const isMobile = breakpoint <= 470;

  const [ showSheduleTab, setShowSheduleTab] = useState(false);
  const [selectedService, setSelectedService] = useState("");



  const handleSheduleView = (serviceName) => {
    setSelectedService(serviceName);
    setShowSheduleTab(true);
  };
  
  const handleCloseShedule = () => {
    
    setShowSheduleTab(false);
    setSelectedService("");
  };
  

  return (
    <div className="service">

      <div className="service_container">
        <div className="service_header">
          <h3>Our Service</h3>

          <div className="service_header_sec_2">

            {isMobile ? 
              <p>
                Our marketing elevates your online presence with SEO, social
                media, and ads.
              </p>
             : 
              <p>
                Our digital marketing service boosts your online presence with
                SEO, social media, and target ads.
              </p>
            }

 
            {isMobile ? (
              <button
              onClick={() => {
                const message = encodeURIComponent("Hello, I would like to discuss your services.");
                const whatsappURL = `https://wa.me/9745937395?text=${message}`;
                window.open(whatsappURL, "_blank");
              }}

               className="shedule_btn">Connect Us</button>
            ) : (
              <button
              
              onClick={handleSheduleView}

              className="shedule_btn">
                Shedule Discussion <MdOutlineKeyboardArrowRight />
              </button>
            )}
          </div>
        </div>

        <div className="service_itemss">
          <div className="service_item">
            <div className="icon_wrap">
              <SiPowerpages />
            </div>

            <h5>Web&App Development</h5>

            <p>
              We develop digital assets, such as websites, microsite and mobile
              apps for your business
            </p>

            <span>Whats is included in service?</span>

            <button 
            
            onClick={() => handleSheduleView("Web&App Development")}

          className="shedule_btn">
              Shedule Discussion <MdOutlineKeyboardArrowRight />
            </button>
          </div>

          <div className="service_item">
            <div className="icon_wrap">
              <SiPowerpages />
            </div>

            <h5>HR operations & staff management</h5>

            <p>
              We handle your HR and staff management, helping your business grow
              and succeed.
            </p>

            <span>Whats is included in service?</span>

            <button
              onClick={() => handleSheduleView("HR operations & staff management")}
         className="shedule_btn">
              Shedule Discussion <MdOutlineKeyboardArrowRight />
            </button>
          </div>

          <div className="service_item">
            <div className="icon_wrap">
              <SiPowerpages />
            </div>

            <h5>Social Media Marketig</h5>

            <p>
              We help you to promote brand on Instagram, Facebook, x, LinkedIn
              etc.. with best social strategies
            </p>

            <span>Whats is included in service?</span>

            <button   onClick={() => handleSheduleView("Social Media Marketig")}
             className="shedule_btn">
              Shedule Discussion <MdOutlineKeyboardArrowRight />
            </button>
          </div>

          <div className="service_item">
            <div className="icon_wrap">
              <SiPowerpages />
            </div>

            <h5>Search Engine Marketing</h5>

            <p>
              We are officially partnering with google to help your website
              appreas on top within minutes
            </p>

            <span>Whats is included in service?</span>

            <button    onClick={() => handleSheduleView("Search Engine Marketing")}
             className="shedule_btn">
              Shedule Discussion <MdOutlineKeyboardArrowRight />
            </button>
          </div>

          <div className="service_item">
            <div className="icon_wrap">
              <SiPowerpages />
            </div>

            <h5>Creative Content</h5>

            <p>
              We think out of the box to create contents that matter to your
              audience & buisness growth
            </p>

            <span>Whats is included in service?</span>

            <button    onClick={() => handleSheduleView("Creative Content")} className="shedule_btn">
              Shedule Discussion <MdOutlineKeyboardArrowRight />
            </button>
          </div>

          <div className="service_item">
            <div className="icon_wrap">
              <SiPowerpages />
            </div>

            <h5>Email Marketing</h5>

            <p>
              We help you to build your lists and send them newsletter regularly
              or simply an email blast
            </p>

            <span>Whats is included in service?</span>

            <button    onClick={() => handleSheduleView("Email Marketing")} className="shedule_btn">
              Shedule Discussion <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>


            {
              showSheduleTab && <Shedule onClose={handleCloseShedule} service={selectedService} /> 
            }

    </div>
  );
};

export default Service;
