import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profileimg from './assets/profilepic.jpg'
import HoverLottie from './components/HoverLottie'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* home */}
      
      {/* quick links */}
      {/* {profile pic} */}
      {/* about */}
      {/* experience section*/}
      {/* hobbies */}
      {/* greetings and download section*/}
      {/* contact */}
      <div className=' w-full bg-near-black h-[30rem] p-[2.5rem] border rounded-xl flex flex-row gap-5 justify-start items-center'>
          <div className='w-[30%] h-[100%]  '>
            <img className='w-full h-full border rounded-xl object-cover' src={profileimg} alt="" />
          </div>
          <div className=' w-[70%] h-[100%] bg-soft-green rounded-xl p-[2.5rem] flex flex-col gap-y-5'>
            <div className='  flex flex-col items-end justify-end'>
              <p className='text-[3rem] font-[10]' >SATYADEEP JANDHYAM</p>
                <p className='text-[1rem]'>Sr. Fullstack developer</p>
            </div>
            <div className=''>
              <p className='text-[1.5rem] text-dark-brown'>Hii iam satyadeep I am Fullstack web developer, Welcome to my profile. </p>
            </div>
            <div className='flex flex-row gap-x-10'>
              <button className='border w-[8rem] bg-white rounded-[0.2rem] h-[2rem] button-shadow '>About</button>
              <button className='border w-[8rem] bg-white  rounded-[0.2rem] h-[2rem] button-shadow'>Experience</button>
              <button className='border w-[8rem] bg-white  rounded-[0.2rem] h-[2rem] button-shadow'>Skills</button>
              <button className='border w-[8rem] bg-white rounded-[0.2rem] h-[2rem] button-shadow'>Contact</button>
              <button></button>
            </div>
          </div>
      </div>
      
      <HoverLottie/>

    </>
  )
}

export default App
