
import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';

const ExpComponent = ({
  companyLogo,
  companyName,
  role,
  duration,
  techStack,
  projects,
  onClickProjectView
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
    <div
        className='w-full h-[5rem] mt-3 bg-white border rounded-xl flex items-center justify-start cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='w-[20%] h-[100%]'>
          <img className='w-full h-full object-contain' src={companyLogo} alt="Company Logo" />
        </div>
        <div className='w-[80%] h-[100%] text-dark-brown flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center gap-y-2'>
            <p>{companyName}</p>
            <p>{role}</p>
          </div>
          <div className='flex flex-col justify-center gap-y-2'>
            <p>{duration}</p>
            <div className='flex gap-x-1'>
              {techStack.map((Icon, index) => (
                <Icon key={index} className='text-[1rem] text-black' />
              ))}
            </div>
          </div>
        </div>
      </div>
<div
    className={`transition-all duration-500 ease-in-out overflow-hidden ${
      isOpen ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5 hidden'
    } w-full bg-white border rounded-xl mt-3 p-5`}
  >
    <p className='text-[2rem] ml-5'>Projects</p>
    {projects.map((project, index) => (
      <div className='w-full flex flex-row mt-5' key={index}>
        <div className='w-[8%] flex items-start justify-center'>
          <div className='border-5 border-gray-300 w-[4rem] h-[4rem] flex items-center justify-center rounded-full'>
            {index + 1}
          </div>
        </div>
        <div className='w-[92%] ml-2'>
          <div className='flex items-center gap-x-5'>
            <p className='text-[1.5rem]'>{project.name}</p>
            <p className='text-[1rem]'>{project.role}</p>
          </div>
          <div className='flex items-end justify-between bg-gray-300 w-full p-5 rounded-xl'>
            <ul className='list-disc ml-5'>
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className='flex items-center gap-5'>
              <a
                className='bg-black w-[7rem] h-[2rem] rounded-2xl flex items-center justify-end gap-x-2 px-2'
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='text-white'>Website</p>
                <div className='w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-white'>
                  <FaLink />
                </div>
              </a>
              <button
                className='border border-black w-[8rem] h-[3rem] rounded-xl bg-white font-semibold hover:bg-black hover:text-white'
                onClick={onClickProjectView}
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
      {/* {isOpen && (
        <div className='w-full bg-white border rounded-xl mt-3 p-5'>
          <p className='text-[2rem] ml-5'>Projects</p>
          {projects.map((project, index) => (
            <div className='w-full flex flex-row mt-5' key={index}>
              <div className='w-[8%] flex items-start justify-center'>
                <div className='border-5 border-gray-300 w-[4rem] h-[4rem] flex items-center justify-center rounded-full'>
                  {index + 1}
                </div>
              </div>
              <div className='w-[92%] ml-2'>
                <div className='flex items-center gap-x-5'>
                  <p className='text-[1.5rem]'>{project.name}</p>
                  <p className='text-[1rem]'>{project.role}</p>
                </div>
                <div className='flex items-end justify-between bg-gray-300 w-full p-5 rounded-xl'>
                  <ul className='list-disc ml-5'>
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  <div className='flex items-center gap-5'>
                    <a
                      className='bg-black w-[7rem] h-[2rem] rounded-2xl flex items-center justify-end gap-x-2 px-2'
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <p className='text-white'>Website</p>
                      <div className='w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-white'>
                        <FaLink />
                      </div>
                    </a>
                    <button
                      className='border border-black w-[8rem] h-[3rem] rounded-xl bg-white font-semibold hover:bg-black hover:text-white'
                      onClick={onClickProjectView}
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </>
  );
};

export default ExpComponent;

