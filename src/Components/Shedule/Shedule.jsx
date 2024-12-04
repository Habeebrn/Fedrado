import React, { useState } from 'react'
import "./Shedule.scss"
import { VscActivateBreakpoints } from 'react-icons/vsc'
import { RiCloseLine } from "react-icons/ri";




const Shedule = ( { onClose, service }) => {


  console.log(service, "this is service")


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    websiteURL: "",
    service: service?service: "",
});


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};



const handleSubmit = async (e) => {
  e.preventDefault();
 console.log("hello")

 
 
};



  return (
    <div  className='shedule'>




<div className="contact_us_container">

<div onClick={ onClose} className="close_btn">
  
<RiCloseLine />



  </div>

    
    <div className="contact_us_sub_container">

      <div className="contact_us_sub_container_main">

     

   


      <div className="contact_us_container_sub_1">
        <h6>Let's take your goal in to action!</h6>

        <h3>Popular Features</h3>

        <div className="features_wrapper">
        <span>  <VscActivateBreakpoints /> Lead generation </span>
        <span> <VscActivateBreakpoints /> Marketing automation</span>
        <span> <VscActivateBreakpoints /> Advanced CRM</span>
        <span>  <VscActivateBreakpoints /> Sales automation</span>
        </div>

        <p>
        We're committed to your privacy. FEDRADO uses the information you provide to us to contact you about our relevant content, products, and services. 
        </p> 


      </div>
      <div className="contact_us_container_sub_2">
      <form
      id='gform'
      method='post'
       action='https://script.google.com/macros/s/AKfycbxlgc4HTmuHk2DpDJJBdb6APs6XU_ShS-eJW3tehKc0Ep7144lgWd24HczeEvon3HzHTg/exec' onSubmit={handleSubmit}>
          <div className="form_input_container">
            <div className="input_container">
              {/* <label htmlFor="First Name ">First Name</label> */}


              <input type="hidden" name="formDataNameOrder" value='["fullName", "mobileNumber", "email", "companyName],"websiteURL","service" '/>

              <input
                                    name="fullName"
                                    placeholder="Full Name"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
            </div>

            <div className="input_container">
              {/* <label htmlFor="Email Id ">Email Id</label> */}
              <input
                                    name="email"
                                    placeholder="Email Id"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
            </div>

            <div className="input_container">
              {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
              <input
                                    name="mobileNumber"
                                    placeholder="Mobile Number"
                                    type="text"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
            </div>
            <div className="input_container">
              {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
              <input
                                    name="companyName"
                                    placeholder="Company Name"
                                    type="text"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
            </div>

            <div className="input_container">
              {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
              <input
                                    name="websiteURL"
                                    placeholder="Website URL"
                                    type="text"
                                    value={formData.websiteURL}
                                    onChange={handleChange}
                                />
            </div>

            <div className="input_container">
              {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
              <input        
                                    name="service"
                                    placeholder="Service"
                                    type="text"
                                    value={formData.service}
                                    readOnly={ !!service }// Make the service field non-editable
                                    className='serviceInput'
                                />
            </div>

          </div>

  

<button type="submit">Send</button>

        </form>
      </div>



      </div>

      </div>


    </div>


        
    </div>
  )
}

export default Shedule