import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profileimg from './assets/profilepic.jpg'
import HoverLottie from './components/HoverLottie'
import AnimatedIntro from './components/AnimatedIntro'
import ExperienceSection from './components/ExperienceSection'
import Gallery from './components/Gallery'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0);
  const [isGalleryOpen,setIsgalleryOpen]=useState(false);

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
      <div className=' mx-[5rem] mt-[5rem] bg-near-black h-[30rem] p-[2.5rem] border rounded-xl flex flex-row gap-5 justify-start items-center'>
          <div className='w-[30%] h-[100%]  '>
            <img className='w-full h-full border rounded-xl object-cover' src={profileimg} alt="" />
          </div>
          <div className=' w-[70%] h-[100%] bg-soft-green rounded-xl p-[2.5rem] flex flex-col gap-y-5'>
            <div className='  flex flex-col items-end justify-end'>
              <p className='text-[3rem] font-[10]' >SATYADEEP JANDHYAM</p>
                <p className='text-[1rem]'>Sr. Fullstack developer</p>
            </div>

            <div className=''>
              <p className='text-[1.5rem] text-dark-brown'>Hii iam satyadeep, Welcome to my profile. </p>
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
      
      {/* <form
      name="sdklaunch"
      id="sdklaunch"
      action="https://uat1.billdesk.com/u2/web/v1_2/embeddedsdk"
      method="POST"
    >
      <input type="hidden" id="merchantid" name="merchantid" value="BDMERCID" />
      <input type="hidden" id="bdorderid" name="bdorderid" value="OAVS21T9I8QL" />
      <input
        type="hidden"
        id="rdata"
        name="rdata"
        value="89fd934cf8ca5ad76b8efbcf1d56c4.70675f706172616d5"
      />
      <button type="submit">Complete your Payment</button>
    </form> */}
      {/* <HoverLottie/> */}
        <AnimatedIntro/>
        <ExperienceSection setGalleryOpen={()=>setIsgalleryOpen(true)}/>
       
        <Gallery isOpen={isGalleryOpen} isCLose={()=>{setIsgalleryOpen(false)}}/>
      <Contact/>
    </>
  )
}

export default App
