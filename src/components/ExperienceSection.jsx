import React from 'react'
import aitsimg from "../assets/images/aits.png"
import { SiVite,SiSpring,SiAwssecretsmanager,SiMongodb,SiSocketdotio } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaNodeJs ,FaLink} from "react-icons/fa";
import ExpComponent from './ExpComponent';

const ExperienceSection = ({setGalleryOpen}) => {
  return (
    <>
     
    <div className='mx-[5rem] bg-black rounded-xl mt-6 p-5 '>
      <div className=''>
       <p className=' text-[2rem] text-white '> Experience</p>
      </div>
     
       <ExpComponent
        companyLogo={aitsimg}
        companyName='Analogue IT Solutions'
        role='Fullstack Developer'
        duration='04/2023 to Present'
        techStack={[SiVite, SiSpring, FaNodeJs, SiMongodb, FaAws, SiSocketdotio]}
        onClickProjectView={()=>setGalleryOpen()}
        projects={[
          {
            name: 'Scutiarts',
            role: 'Frontend',
            link: 'https://scutiarts.com',
            description: [
              'Implemented and designed UI/UX logic using React.',
              'Designed authentication and authorization using JWT.',
              'Integrated APIs using Axios to make the website dynamic.',
              'Integrated Razorpay payment gateway.'
            ]
          }
        ]}
      />
    </div>
    
    </>
  )
}

export default ExperienceSection
