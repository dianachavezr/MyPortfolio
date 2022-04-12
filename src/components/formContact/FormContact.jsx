import React from "react";
import "./formContact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";

const FormContact = () => {
  const [t, i18n]= useTranslation("global");
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a9bjutd",
        "template_ghwwxlc",
        e.target,
        "Asz06hGJZHZ4hMP1d"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Message Sent Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      });
  }

  return (
    <div className="formContainerGral">
      <h2 className="formTitle">{t("formContact.title")}</h2>
      <div className="formContainer">
        <form className="formBody" onSubmit={sendEmail}>
          <div className="">
            <input
              type="text"
              className=""
              placeholder= {t("formContact.placeholderCompany")}
              name="company"
            />
          </div>
          <div className="">
            <input
              type="text"
              className=""
              placeholder={t("formContact.placeholderName")}
              required
              name="name"
            />
          </div>
          <div className="">
            <input
              type="email"
              className=""
              placeholder={t("formContact.placeholderEmail")}
              required
              name="email"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder={t("formContact.placeholderMessage")}
              required
            ></textarea>
          </div>
          <motion.div
            className="formButton"
            whileHover={{
              textDecoration: "none",
            }}
          >
            <motion.button
              type="submit"
              className="btnSubmit"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(128,0,128)",
                boxShadow: "0px 0px 8px rgb(128,0,128)",
                textDecoration: "none",
                originY: 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("formContact.btnSubmit")}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
