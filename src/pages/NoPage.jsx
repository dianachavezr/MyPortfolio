import React from 'react'
import AnimatedPage from './AnimatedPage'
import Logo from '../components/logo/Logo';
import Footer from '../components/footer/Footer'
import './pages.css'
import { useTranslation } from "react-i18next";

const NoPage = () => {
  const [t, i18n]= useTranslation("global");
  return (
    <AnimatedPage>    
      
      <div className='gralContainer'>
        <div className="container404">
          <div className="logo2404">
       <Logo/>
       </div>
      <h1 className='title404'>404 <br/>{t("nopage.nopage")}</h1>
      </div>
      <Footer />
    </div>
   
    </AnimatedPage>
   

  )
}

export default NoPage
