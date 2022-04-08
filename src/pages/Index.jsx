import React from 'react'
import './pages.css'
import AboutIndex from '../components/aboutIndex/AboutIndex'
import Footer from '../components/footer/Footer'
import Logo from '../components/logo/Logo'
import Logo2 from '../components/logo2/Logo2'
import Redes from '../components/redes/Redes'
import AnimatedPage from './AnimatedPage'


const Index = () => {
  return (
    <AnimatedPage >
    <div className='gralContainer'>
       <AboutIndex />
       <Logo />
       <Redes />
       <Logo2 />
       <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Index
