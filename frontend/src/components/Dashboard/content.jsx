import React, { useState } from 'react'
import './styles/content.css'
import Header from './header'
import Card from './card'
import Bookmark from './bookmark'
import { recommendations } from './recommendations'

const Content = ({ information, handleAddCourse}) => {

  const [bookmarks, setBookmarks] = useState([])
  
  const subInterest = information[4]
  const resource = recommendations[subInterest]

  const handleBookMarks = (item) => {
    const isBookmarked =  bookmarks.some((bookmark) => bookmark.id === item.id);
    if (isBookmarked) {
      alert('Already Bookmarked')
    } else {
      setBookmarks ((prev) => [...prev, item])
      
    }
  }

  const handleRemoveBookmark = (item) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== item.id))
  }


  return (
    <div className='dashboard-content'>
      <Header />
      {(!resource || !Array.isArray(resource)) ? (
        <h3>No Resource Available</h3>
      ) : (
        <>
          <Bookmark bookmarks={bookmarks} onRemoveBookmark={handleRemoveBookmark}/>
          <Card information={information} onBookMark={handleBookMarks} onAddCourse={handleAddCourse}/>
        </>
      )}
      
    </div>
  )
}

export default Content