import React, { useState } from 'react'
import './styles/card.css'
import {BiLogoHtml5} from 'react-icons/bi'
import {recommendations} from './recommendations';
import { BiSolidBookmark } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';

const Card = ({information, onBookMark, onAddCourse}) => {
    const info = information
    const resource = recommendations[info[4]]

    // console.log(resource)
    
  return (
    <div className='resource-card'>
        <h3>Recommended {info[4]} Courses:</h3>
        <section className='card-section'>
            {resource.map((item, index) => (
                <div className='card' key={index}>
                    <div className="card-icon">
                        <BiLogoHtml5 />
                    </div>
                    <div className="card-title"> 
                        <h1>{item.title}</h1>
                    </div>
                    <div className="card-excerpt">
                        <p>{item.description}</p>
                    </div>
                    <div className="action-button">
                        <BiSolidBookmark className='icon' onClick={() => onBookMark(item)}/>
                        <BiPlus className='icon' onClick={() => onAddCourse(item)}/>
                    </div>
                </div>
                ))}
           

        </section>
    </div>
)}

export default Card;