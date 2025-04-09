// import React, { useState } from 'react'
// import "./Shedule.scss"
// import { VscActivateBreakpoints } from 'react-icons/vsc'
// import { RiCloseLine } from "react-icons/ri";




// const Shedule = ( { onClose, service }) => {


//   console.log(service, "this is service")


//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobileNumber: "",
//     companyName: "",
//     websiteURL: "",
//     service: service?service: "",
// });


// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
// };



// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("function started")

// //   Email.send({
// //     Host : "smtp.elasticemail.com",
// //     Username : "bdmfedrado@gmail.com",
// //     Password : "bdmFedrado123@",
// //     To : 'bdmfedrado@gmail.com',
// //     From : "bdmfedrado@gmail.com",
// //     Subject : "Sheduled Messages",
// //     Body : `
// //     <p>Full Name: ${formData.fullName}</p>
// //     <p>Email: ${formData.email}</p>
// //     <p>Mobile Number: ${formData.mobileNumber}</p>
// //     <p>Company Name: ${formData.companyName}</p>
// //     <p>Website URL: ${formData.websiteURL}</p>
// //     <p>Service: ${formData.service}</p>
// //   `,

    
// // }).then(
// //   message => alert(message)
// // );


// // Email.send({
// //   Host: "smtp.gmail.com",
// //   Username: "bdmfedrado@gmail.com",
// //   Password: "bdmFedrado123@",
// //   To: "habeebrn.id@gmail.com",
// //   From: formData.email ,
// //   Subject: "Scheduled Message",
// //   Body: `
// //     <p>Full Name: ${formData.fullName}</p>
// //     <p>Email: ${formData.email}</p>
// //     <p>Mobile Number: ${formData.mobileNumber}</p>
// //     <p>Company Name: ${formData.companyName}</p>
// //     <p>Website URL: ${formData.websiteURL}</p>
// //     <p>Service: ${formData.service}</p>
// //   `,
// // }).then(
// //   (message) => {
// //     console.log("Email sent successfully:", message);
// //     alert("Email sent successfully!");
// //   },
// //   (error) => {
// //     console.error("Failed to send email:", error);
// //     alert(`Failed to send email: ${error}`);
// //   }
// // );


// const sendEmail = async () => {
//   const response = await fetch("https://api.elasticemail.com/v2/email/send", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams({
//       apikey: "your_api_key", // Replace with your Elastic Email API key
//       from: "bdmfedrado@gmail.com", // Verified sender email
//       to: "recipient@example.com",
//       subject: "Test Email",
//       bodyText: "This is a test email sent using Elastic Email API.",
//     }),
//   });

//   const result = await response.json();
//   console.log("Email send result:", result);
// };
// sendEmail();


// console.log("function completed''''")
 
 
// };



//   return (
//     <div  className='shedule'>




// <div className="contact_us_container">

// <div onClick={ onClose} className="close_btn">
  
// <RiCloseLine />



//   </div>

    
//     <div className="contact_us_sub_container">

//       <div className="contact_us_sub_container_main">

     

   


//       <div className="contact_us_container_sub_1">
//         <h6>Let's take your goal in to action!</h6>

//         <h3>Popular Features</h3>

//         <div className="features_wrapper">
//         <span>  <VscActivateBreakpoints /> Lead generation </span>
//         <span> <VscActivateBreakpoints /> Marketing automation</span>
//         <span> <VscActivateBreakpoints /> Advanced CRM</span>
//         <span>  <VscActivateBreakpoints /> Sales automation</span>
//         </div>

//         <p>
//         We're committed to your privacy. FEDRADO uses the information you provide to us to contact you about our relevant content, products, and services. 
//         </p> 


//       </div>
//       <div className="contact_us_container_sub_2">
//       <form
//       id='gform'
//       method='post'
//        action='https://script.google.com/macros/s/AKfycbxlgc4HTmuHk2DpDJJBdb6APs6XU_ShS-eJW3tehKc0Ep7144lgWd24HczeEvon3HzHTg/exec' onSubmit={handleSubmit}>
//           <div className="form_input_container">
//             <div className="input_container">
//               {/* <label htmlFor="First Name ">First Name</label> */}


//               <input type="hidden" name="formDataNameOrder" value='["fullName", "mobileNumber", "email", "companyName],"websiteURL","service" '/>

//               <input
//                                     name="fullName"
//                                     placeholder="Full Name"
//                                     type="text"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                 />
//             </div>

//             <div className="input_container">
//               {/* <label htmlFor="Email Id ">Email Id</label> */}
//               <input
//                                     name="email"
//                                     placeholder="Email Id"
//                                     type="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//             </div>

//             <div className="input_container">
//               {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
//               <input
//                                     name="mobileNumber"
//                                     placeholder="Mobile Number"
//                                     type="text"
//                                     value={formData.mobileNumber}
//                                     onChange={handleChange}
//                                 />
//             </div>
//             <div className="input_container">
//               {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
//               <input
//                                     name="companyName"
//                                     placeholder="Company Name"
//                                     type="text"
//                                     value={formData.companyName}
//                                     onChange={handleChange}
//                                 />
//             </div>

//             <div className="input_container">
//               {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
//               <input
//                                     name="websiteURL"
//                                     placeholder="Website URL"
//                                     type="text"
//                                     value={formData.websiteURL}
//                                     onChange={handleChange}
//                                 />
//             </div>

//             <div className="input_container">
//               {/* <label htmlFor="Mobile Number ">Mobile Number</label> */}
//                     <input        
//                                           name="service"
//                                           placeholder="Service"
//                                           type="text"
//                                           value={formData.service}
//                                           readOnly={ !!service }// Make the service field non-editable
//                                           className='serviceInput'
//                                       />
//                   </div>

//           </div> 

  

// <button type="submit">Send</button>

//         </form>
//       </div>



//       </div>

//       </div>


//     </div>


        
//     </div>
//   )
// }

// export default Shedule




import React, { useState } from "react";
import "./Shedule.scss";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { RiCloseLine } from "react-icons/ri";
import { toast } from 'sonner'



const Shedule = ({ onClose }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteURL: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.companyName ||
      !formData.service
    ) {
      
      // alert("helloo error")

      toast.error("Pls fill the field")
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyfBCnR-s7ZUmjYMam6iTARwdJC0L9ZWfkJt5k9B29jItGyiS2vD5mNFHlz0TUHDLnmHA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),  // Use URLSearchParams to encode form data
        }
      );

      if (response.ok) {
       
        toast.success("We will get you soon 😊")

        // Reload page after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.")
      console.error(error);
    }
  };

  return (
    <div className="shedule">

      <div className="contact_us_container">

        {/* <div onClick={onClose} className="close_btn">
          <RiCloseLine />
        </div> */}

        <div className="contact_us_sub_container">

          <div className="contact_us_sub_container_main">

            {/* <div className="contact_us_container_sub_1">
             
    
      
            </div> */}
            
            <div className="contact_us_container_sub_2">

            <h6>Let's take your goal into action!</h6>

              <form
                id="gform"
                method="post"
                onSubmit={handleSubmit}  // Removed action attribute for single form handling
              >
                <div className="form_input_container">
                  <div className="input_container">
                    <input
                      type="hidden"
                      name="formDataNameOrder"
                      value='["fullName", "email", "phone", "companyName", "websiteURL", "service"]'
                    />
                    <input
                      name="fullName"
                      placeholder="Full Name"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input_container">
                    <input
                      name="email"
                      placeholder="Email Id"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input_container">
                    <input
                      name="phone"
                      placeholder="Mobile Number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input_container">
                    <input
                      name="companyName"
                      placeholder="Company Name"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* <div className="input_container">
                    <input
                      name="websiteURL"
                      placeholder="Website URL"
                      type="text"
                      value={formData.websiteURL}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input_container">
                    <input
                      name="service"
                      placeholder="Service"
                      type="text"
                      value={formData.service}
                      onChange={handleChange}
                      className="serviceInput"
                    />
                  </div> */}
                </div>

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;