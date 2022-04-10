import React from 'react'
import './logo2.css'
import LogoChamaleon from "../../assets/images/logo2.png";
import { motion } from "framer-motion/dist/framer-motion";


const Logo2 = () => {
  return (
    <motion.div className='containerLogo2'
    drag

    //drag constrains to keep image in the page
    dragConstraints={{left:0, top:250, right:250, bottom:0}}
    dragElastic={2}
    >
    <motion.img src={LogoChamaleon} alt="logochamaleon" className="logochamaleon"
                initial={{opacity:0}}
                animate={{opacity:1, rotateZ:360, marginTop:0}}
                transition={{delay:1.5, duration:1.5}}

    />
    </motion.div>
  )
}

export default Logo2
