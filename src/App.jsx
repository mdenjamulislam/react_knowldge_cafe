import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header';
import Posts from './components/Posts/Posts';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Bookmark from './components/Bookmark/Bookmark';

function App() {

  const [bookmarks, setBookmark] = useState([]); //This state for bookmark

  const [readingTime, setReadingTime] = useState(0); //This is for mark as read 

  const handleAddToBookmark = post => {
    const newBookmark = [...bookmarks, post];
    setBookmark(newBookmark);
  }

  // Mark as Read
  const handleMarkAsRead = time => {
    const timeNumber = parseInt(time)
    const newReadingTime = readingTime + timeNumber;
    setReadingTime(newReadingTime);
    // console.log(typeof(readingTime));
    console.log(typeof(timeNumber));
  }

  return (
    <>
      <div className='w-full lg:w-[1140px] mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-12 gap-5 pt-8'>
          <div className='col-span-12 lg:col-span-8'>
            <Posts 
            handleAddToBookmark = {handleAddToBookmark}
            handleMarkAsRead = {handleMarkAsRead}
            ></Posts>
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
