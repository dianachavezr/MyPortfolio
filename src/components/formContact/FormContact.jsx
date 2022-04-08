import React from "react";
import "./formContact.css";
import emailjs from 'emailjs-com'
import swal from 'sweetalert';



const FormContact = () => {

  function sendEmail(e){
    e.preventDefault();
     emailjs.sendForm('service_a9bjutd','template_ghwwxlc', e.target, 'Asz06hGJZHZ4hMP1d').then(res=>{console.log(res);
      e.target.reset() 
      swal("Message Sent!", "", "success");

    })
  }

  

  return (
    <div className="formContainerGral">
      <h2 className="formTitle">Contact</h2>
      <div className="formContainer">
        <form className="formBody" onSubmit={sendEmail}>
          <div className="">
            <input type="text" className="" placeholder="Company:" name="company" />
          </div>
          <div className="">
            <input type="text" className="" placeholder="Name:" required name="name" />
          </div>
          <div className="">
            <input type="email" className="" placeholder="Email:" required name="email" />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder="Message:"
              required
            ></textarea>
          </div>
          <div className="formButton">
            <button type="submit" className="text-align: 'left">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
