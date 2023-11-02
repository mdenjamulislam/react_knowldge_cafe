import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header';
import Posts from './components/Posts/Posts';

function App() {

  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   fetch('json.js')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }, [])

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <Posts></Posts>
      </div>
    </>
  )
}

export default App
