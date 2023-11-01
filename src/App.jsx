import { useEffect, useState } from 'react'
import './App.css'
import profile from './assets/images/profile.png'

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('json.js')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between py-5 border-b-slate-500'>
          <h1 className='text-3xl text-center font-bold text-slate-800'>Knowledge Cafe</h1>
          <div>
            <img className='w-16 rounded-full' src={profile}  alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
