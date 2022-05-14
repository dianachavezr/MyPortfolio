import React from 'react'
import './pages.css'
import AboutIndex from '../components/aboutIndex/AboutIndex'
import Footer from '../components/footer/Footer'
import Logo from '../components/logo/Logo'
import AnimatedPage from './AnimatedPage'



const Index = () => {
  return (
    <AnimatedPage >
    <div className='gralContainer'>
       <AboutIndex />
       <Logo />
       <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Index
