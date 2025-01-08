import React, { useState } from 'react'
import './styles/content.css'
import Header from './header'
import Card from './card'
import Bookmark from './bookmark'
import { recommendations } from './recommendations'

const Content = ({ interests }) => {

  const [bookmarks, setBookmarks] = useState([])
  
  const subInterest = interests[2]
  const resource = recommendations[subInterest]

  if (!resource || !Array.isArray(resource)) {
    return (
      <div className="dashboard-content"><h3>No Resource Available</h3></div>
    )
  }

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
      <Bookmark bookmarks={bookmarks} onRemoveBookmark={handleRemoveBookmark}/>
      <Card interests={interests} onBookMark={handleBookMarks} />
    </div>
  )
}

export default Content