import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n]= useTranslation("global");
  return (
    <div className="footerContainer">
      <p className="footerParagraph">
      {t("footer.footer")}
      </p>
    </div>
  );
};

export default Footer;
