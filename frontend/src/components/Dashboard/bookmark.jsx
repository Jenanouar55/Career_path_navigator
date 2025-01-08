import React, { useState } from 'react'
import './styles/bookmark.css'
import {BiBookBookmark} from 'react-icons/bi'

const Bookmark = ({bookmarks, onRemoveBookmark}) => {

  return (
    <section className="bookmark">
        <div className="bookmark-header">
            <h2>Bookmarks</h2>
        </div>
        <div className="bookmark-list">
            {bookmarks.length > 0 ? (
                bookmarks.map((item, index) => (
                    <div className="bookmark-item">
                <span className="bookmark-icon">
                    <BiBookBookmark />
                </span>
                <span className="bookmark-title"><h3>{item.title}</h3></span>
                <span className="duration">20 Hrs</span>
                <span className="bookmark-details" onClick={() => onRemoveBookmark(item)}>x</span>
                </div>
                ))
                
            ) : (
                <div className="bookmark-list">
                    <div className="bookmark-item">
                        <p>No Bookmarks Available</p>
                    </div>
                    
                </div>
            )}
            

            
        </div>
    </section>
  )
}

export default Bookmark