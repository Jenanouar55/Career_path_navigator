import React from 'react'
import './card.css'
import {BiLogoHtml5} from 'react-icons/bi'

const card = () => {
  return (

    <section className='card-section'>
        < div className='card'>

            <div className="card-icon">
                <BiLogoHtml5 />
            </div>
            <div className="card-title"> 
                <h1>Resource Title</h1>
            </div>
            <div className="card-excerpt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam sed possimus nisi asperiores.</p>
            </div>

        </div>

        < div className='card'>

            <div className="card-icon">
                <BiLogoHtml5 />
            </div>
            <div className="card-title"> 
                <h1>Resource Title</h1>
            </div>
            <div className="card-excerpt">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam sed possimus nisi asperiores.</p>
            </div>

        </div>

    </section>
  )
}

export default card