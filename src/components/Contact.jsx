import React, { useState } from "react";
import { margins_paddings } from "../utils";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AnimatePresence, motion } from "framer-motion";

const Contact = ({ darkMode, textColor, textColor2, dynamicBorder }) => {
// ------------------ Custom styles variables  ------------------ //
  const rmv_focus_border = `${textColor} ${ darkMode ? "dark" : ""} focus:outline-none focus:ring-0`;
  const form_container_styles = `flex px-[20px] max-w-[600px] py-[20px] rounded-lg transition-all ease-in-out duration-500 ${ darkMode ? "shadow-[3px_3px_10px_#000000a2]" : "shadow-[3px_3px_10px_#12121276]" }`;
  const Submit_Button_Styles = `HeroBTN ${!darkMode && "bg-[#171717] border-none"} w-[50%] max-sm:w-full px-[10px] py-[5px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] `;
// ------------------ Custom styles variables  ------------------ //


  const access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ;
  const [btnLoading, setBtnLoading] = useState(false); // Add loading state for the submit button
  const [message, setMessage] = useState(null); // Add message state for success/error
  const [messageIsVisible, setMessageIsVisible] = useState(false); // Add message state for success/error
  

  const [formDetails, setFormDetails] = useState(
    {
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Email: '',
      Subject: '',
      Message: '',
    }
  );

 const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission wich refreshes the page
  setBtnLoading(true); // so that the submit button is temporary disabled

    // Prepare form data
    const formData = new FormData();
    formData.append("access_key", access_key);  // Add your Web3Forms access key its an .env variable
    formData.append("First Name", formDetails.FirstName);
    formData.append("Last Name", formDetails.LastName);
    formData.append("Phone Number", formDetails.PhoneNumber);
    formData.append("Email", formDetails.Email);
    formData.append("Subject", formDetails.Subject);
    formData.append("Message", formDetails.Message);

  try{
    const response = await fetch('https://api.web3forms.com/submit', {method: 'POST',body: formData });
    const result = await response.json();
    if(result.success){
      setMessage("Thanks for contacting me!");
      setMessageIsVisible(true);
      
      setTimeout(() => {setMessage(null), setMessageIsVisible(false)}, 5000);
        setFormDetails({                    // reset the forms after submited
          FirstName: "",
          LastName: "",
          PhoneNumber: "",
          Email: "",
          Subject: "",
          Message: "",
        });
      } else {
        setMessage("Failed to send message. Try again later.");
      }
  } 
  catch (error){
    console.log('malakia egine tsekare to, Error :',error);
    setMessage('Kati malakia egine bro de to esteile')
  }
  setBtnLoading(false);
}

  return (
    <section id="contact" className={`${margins_paddings} relative flex flex-col items-start justify-center max-md:py-[70px] py-[100px] w-full`}>
     
     <div className={`gap-[8px] items-start max-sm:items-center text-[1.2rem] max-md:text-[1.2rem] flex ${textColor} mb-[20px] max-w-[600px] flex-col px-[10px]`}>
        <h1 className={`text-wrap max-sm:text-center`}>Interested in collaborating or learning more about my projects?</h1>

        <div className="flex flex-wrap items-center gap-[12px]">
            <h1 className={`text-nowrap`}> Connect with me by filling the form or on </h1>
            <button className={`HeroBTN px-[10px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] bg-[#171717]`}>
              <a className="flex items-center gap-[3px]" href="#">Linked<i className={`fa-brands fa-linkedin`}></i></a>
            </button> 
        </div>

     </div>
     

      <div className="flex flex-row max-sm:flex-col-reverse gap-[30px] justify-start w-full">
        <div id="form-container" className={`${form_container_styles}`} >

          <form onSubmit={handleSubmit} className="space-y-[17px] w-[700px] transition-all ease-in-out duration-500">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formDetails.FirstName} 
                name="FirstName"
                className={`p-2 rounded w-full bg-transparent  ${rmv_focus_border} ${dynamicBorder}`}
                required
                onChange={(e) => setFormDetails ((prev) => ({...prev ,FirstName : e.target.value }) ) }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formDetails.LastName} 
                name="LastName"
                className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
                required
                onChange={(e) => setFormDetails ((prev) => ({...prev ,LastName : e.target.value }) ) }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formDetails.PhoneNumber} 
                name="PhoneNumber"
                className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
                required
                onChange={(e) => setFormDetails ((prev) => ({...prev ,PhoneNumber : e.target.value }) ) }
              />

              <input
                type="email"
                placeholder="Email"
                value={formDetails.Email} 
                name="Email"
                className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder} `}
                required
                onChange={(e) => setFormDetails ((prev) => ({...prev ,Email : e.target.value }) ) }
              />
            </div>

           

            <input
              type="text"
              placeholder="Subject"
              value={formDetails.Subject} 
              name="Subject"
              className={`p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder}`}
              required
              onChange={(e) => setFormDetails ((prev) => ({...prev ,Subject : e.target.value }) ) }
            />
            <textarea
              placeholder="Message"
              value={formDetails.Message} 
              name="Message"
              className={`h-[200px] p-2 rounded w-full bg-transparent ${rmv_focus_border} ${dynamicBorder} `}
              required
              onChange={(e) => setFormDetails ((prev) => ({...prev ,Message : e.target.value }) ) }
            ></textarea>

            <div className={`flex w-full gap-[20px] max-sm:flex-col items-center justify-between transition-all ease-in-out duration-400`}>
              <button type="submit" disabled={btnLoading} className={`${Submit_Button_Styles} ${btnLoading ? "opacity-50 cursor-not-allowed" : ""} transition-all ease-in-out duration-400`}>
              {btnLoading? 'Sending...' : 'Send Message'}
              </button>

              <AnimatePresence>
                {message && messageIsVisible &&
                <motion.div
                  initial={{ opacity: 0, x: 150 }}   // Starts hidden, slides in from the right
                  animate={{ opacity: 1, x: 0 }}   // Becomes fully visible
                  exit={{ opacity: 0, x: 150 }}     // Fades out and slides out to the right
                  transition={{ duration: 0.3 }}  // Smooth transition
                  className={`flex flex-col gap-[1px] items-center`}>
                  
                  <div className="flex gap-[10px] items-center">
                    <h1 className={`${textColor} max-sm:text-[13px] text-nowrap`}>{message}</h1>
                    <CheckCircleIcon sx={{ color: '#26d000a2' }} />
                  </div>
                
                    {/* Loading Bar */}
                  <motion.div
                    initial={{ width: 0, originX: 1 }} // Start from the right
                    animate={{ width: "100%" }} // Fills up over 5 seconds
                    transition={{ duration: 5, ease: "linear" }} // Smooth linear fill
                    className={`h-[3px] ${darkMode? 'bg-[#f5f3dc]' : 'bg-[#121212]'} rounded-lg w-full`}
                  />

                </motion.div> } 

                
              </AnimatePresence>
            

            </div>
          
          </form>

        </div>

      </div>
   
    </section>
  );
};

export default Contact;

