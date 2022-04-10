import React from 'react'
import './aboutIndex.css'
import { motion } from "framer-motion/dist/framer-motion";

const AboutIndex = () => {
  return (

    <motion.div className='aboutIndex'
    
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.5, duration:1.5}}
    >
        
        <h3 className="aboutIndexTitle">About me</h3>
        <p className="aboutIndexParagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sunt dolore sint qui, id doloribus excepturi, ducimus, in molestias saepe corporis laudantium eius. Similique nihil facilis atque explicabo, magni mollitia.</p>
    </motion.div>

  )
}

export default AboutIndex
