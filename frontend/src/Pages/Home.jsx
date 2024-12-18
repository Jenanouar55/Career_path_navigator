import Hero from "../components/hero/hero"
import Services from "../components/Services/Services"
import AboutUs from "../components/AboutUs/AboutUs"
import React from 'react'

const Home = () => {
  return (
    <div>
        <section>
            <Hero />
            <Services />
            <AboutUs />
        </section>
    </div>
  )
}

export default Home