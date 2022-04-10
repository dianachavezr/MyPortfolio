import React from 'react';
import Logo1 from "../../assets/images/logo1.png";
import { motion } from "framer-motion/dist/framer-motion";
import './logo.css'

const Logo = () => {
  return (
    <div className='containerLogo'
    
      
    >
          <motion.img src={Logo1} alt="logo" className="logo1"
            initial={{opacity:0}}
            animate={{opacity:1,  marginTop:0}}
            transition={{delay:1.5, duration:1.5}}

          />
      
    </div>
  )
}

export default Logo
