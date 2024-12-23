import Hero from "../components/hero/hero"
import Services from "../components/Services/Services"
import AboutUs from "../components/aboutus/AboutUs"
import Contactus from "../components/contactUs/contactus"
import React from 'react'



const Home = () => {
  return (
    <div>
        <section>
            <Hero />
            <AboutUs />
            <Services />
            <Contactus />
        </section>
    </div>
  )
}

export default Home