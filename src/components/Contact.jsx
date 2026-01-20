import React, { useState } from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import githubimg from "../assets/images/github_3291695.png"

import leetcode from "../assets/images/LeetCode_logo_black.png"

import linkedinimg from "../assets/images/linkedin.jpg"



const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    nameOfTheInterviewer: '',
    interviewerEmail: '',
    ctc: '',
    mobileNumber: '',
    interviewDate: '',
    jd: ''
  });

  const handleChange = (e) => {
    console.log("formatData",formData)
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

    const handleCopy = () => {
    navigator.clipboard.writeText(generateMailBody());
    alert("Email format copied to clipboard!");
  };

  const formatDate = (date) => {
    if (!date) return '[Date of Interview]';
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };

  const generateMailBody = () => {

    return `Dear Candidate,

We are pleased to invite you for an interview for a position at ${formData.companyName || '[Company Name]'}. Please find the interview details below:

- Interviewer's Name: ${formData.nameOfTheInterviewer || '[Name of Interviewer]'}
- Interviewer's Email: ${formData.interviewerEmail || '[Interviewer Email]'}
- Interviewer's Contact Number: ${formData.mobileNumber || '[Mobile Number]'}
- Offered CTC: ₹${formData.ctc || '[CTC]'}
- Date of Interview: ${formatDate(formData.interviewDate)}
- Job Description:

${formData.jd || '[Job Description here...]'}

We look forward to speaking with you and learning more about your background.

Warm regards,  
${formData.nameOfTheInterviewer || '[Name of Interviewer]'}  
${formData.companyName || '[Company Name]'}`;
  };

   const handleSubmit = () => {
    console.log("body"+body)
    const subject = `Interview Invitation – Position at ${formData.companyName || '[Company Name]'}`;
    const body = encodeURIComponent(generateMailBody());
    const mailtoLink = `mailto:${formData.interviewerEmail || ''}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <div className='mx-[5rem] bg-white rounded-xl mt-6 p-5'>
    <div className='  display flex-wrap flex justify-center   gap-x-[3rem] gap-y-[3rem]'>
    
     <div className='w-[20rem] h-[20rem] card-one-link relative group'>
  {/* Hover Link Icon */}
 <a href="https://github.com/satyadeepjandhyam" target="_blank" rel="noopener noreferrer"> <div className='hidden group-hover:flex w-full h-full absolute items-center border cursor-pointer rounded-xl justify-center z-[100] brightness-50 backdrop-grayscale'>
    <FaLink className='text-red-400' />
  </div></a>

  {/* Background Image */}
  <div className='w-full h-full absolute m-0 shadow-xl div-shadow rounded-xl'>
    <img src={githubimg} className='w-full h-full' alt="git hub" />
  </div>
</div>

<div className='w-[20rem] h-[20rem] card-one-link relative group'>
  {/* Hover Link Icon */}
 <a href="https://leetcode.com/u/kWE8gbRCNC/" target="_blank" rel="noopener noreferrer"> <div className='hidden group-hover:flex w-full h-full absolute items-center border cursor-pointer rounded-xl justify-center z-[100] brightness-50 backdrop-grayscale'>
    <FaLink className='text-red-400' />
  </div></a>

  {/* Background Image */}
  <div className='w-full h-full absolute m-0 shadow-xl div-shadow rounded-xl'>
    <img src={leetcode} className='w-full h-full' alt="git hub" />
  </div>
</div>

<div className='w-[20rem] h-[20rem] card-one-link relative group'>
  {/* Hover Link Icon */}
 <a href="https://leetcode.com/u/kWE8gbRCNC/" target="_blank" rel="noopener noreferrer"> <div className='hidden group-hover:flex w-full h-full absolute items-center border cursor-pointer rounded-xl justify-center z-[100] brightness-50 backdrop-grayscale'>
    <FaLink className='text-red-400' />
  </div></a>

  {/* Background Image */}
  <div className='w-full h-full absolute m-0 shadow-xl div-shadow rounded-xl'>
    <img src={linkedinimg} className='w-full h-full' alt="git hub" />
  </div>
</div>
</div>


    <div className='mx-[5rem] bg-black rounded-xl mt-6 p-5'>
      <div>
        <p className='text-[2rem] text-white '>Offer a Job</p>

      </div>
      <div className='w-full flex flex-row gap-x-5' >
      {/* compane name,ctc,Name of the Interviewer,interviewer emailId,jd,date of an interview, */}
      
      <div className='w-6/12 '>
        <div className='flex w-full flex-row gap-[2rem]'>

        <div className='flex flex-col w-6/12'>
          <label htmlFor="companyName " className='text-white text-[1rem] mb-1 '>Company Name</label>
         <input  type="text" name='companyName'  id="companyName"
         value={formData['companyName']}
                onChange={(e)=>handleChange(e)}
        className="bg-white h-[2.5rem] rounded-xl pl-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
         />
        </div>
        <div className='flex flex-col w-6/12'>
          <label htmlFor="nameOfTheInterviewer " className='text-white text-[1rem] mb-1 '>Name of the interviewer</label>
          <input type="text"
          name='nameOfTheInterviewer'
          id="nameOfTheInterviewer"
          value={formData['nameOfTheInterviewer']}
                onChange={(e)=>handleChange(e)}
          className="bg-white h-[2.5rem] rounded-xl pl-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
           />
        </div>
        

        </div>
        <div className='flex w-full flex-row gap-[2rem]'>

        <div className='flex flex-col w-6/12'>
          <label htmlFor="interviewerEmail " className='text-white text-[1rem] mb-1 '>Interviewer Email</label>
         <input  type="text"  id="interviewerEmail"
         value={formData['interviewerEmail']}
                onChange={(e)=>handleChange(e)}
        className="bg-white h-[2.5rem] rounded-xl pl-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
         />
        </div>
        <div className='flex flex-col w-6/12'>
          <label htmlFor="ctc " className='text-white text-[1rem] mb-1 '>CTC</label>
          <input type="text"
          value={formData['ctc']}
                onChange={handleChange}
          className="bg-white h-[2.5rem] rounded-xl pl-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          id='ctc' />
        </div>       
        </div>

<div className='flex w-full flex-row gap-[2rem] '>

        <div className='flex flex-col w-6/12'>
          <label htmlFor="mobileNumber " className='text-white text-[1rem] mb-1 '>Interviewer Mobilenumber</label>
         <input  type="text"  id="mobileNumber"
         value={formData['mobileNumber']}
         name='mobileNumber'
                onChange={(e)=>handleChange(e)}
        className="bg-white h-[2.5rem] rounded-xl pl-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
         />
        </div>
        <div className='flex flex-col w-6/12'>
          <label htmlFor="interviewDate " className='text-white text-[1rem] mb-1 '>Date of the Interview</label>
          <input type="date" onChange={(e)=>handleChange(e)} className="bg-white h-[2.5rem] rounded-xl pl-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          id='interviewDate' />
        </div>       
        </div>

         <div className='flex flex-col w-full gap-x-5 '>
          <label htmlFor="jd " className='text-white text-[1rem] mb-1'>JD</label>
          {/* <input type="date" className='bg-white  ' id='Interviewer Email' /> */}
          <textarea name="jd" id="jd" onChange={(e)=>handleChange(e)} className='bg-white h-[30rem] p-5'>

          </textarea>
        </div>
        <div className='w-full flex items-center justify-center mt-5'>
          <input type="button" className='  w-[10rem] h-[3rem] rounded-xl cursor-pointer bg-blue-700 text-white' onClick={()=>{handleCopy()}} value={"copy the message"} name='copy'  />
        </div>
      </div>
      <div className='w-6/12 h-[100%] p-5 '>
          {/* <div id='mail-format' className=''> */}
         
<div
  id="mail-format"
  className="bg-white p-6 rounded-md shadow-md text-[15px] leading-7 text-gray-800 max-w-2xl mx-auto font-sans h-[100%]"
>
  <p className="mb-4">Dear Candidate,</p>

  <p className="mb-4">
    We are pleased to invite you for an interview for a position at
    <strong> {formData.companyName || '[Company Name]'}</strong>. Please find the interview details below:
  </p>

  <ul className="mb-4 list-disc list-inside space-y-1">
    <li>
      Interviewer's Name: {formData?.nameOfTheInterviewer || '[Name of Interviewer]'}
    </li>
    <li>
      Interviewer's Email: {formData?.interviewerEmail || '[Interviewer Email]'}
    </li>
    <li>
      Interviewer's Contact Number: {formData?.mobileNumber || '[Mobile Number]'}
    </li>
    <li>
      Offered CTC: ₹{formData.ctc || '[CTC]'}
    </li>
    <li>
      Date of Interview: {formData?.interviewDate ? formatDate(formData.interviewDate) : '[Interview Date]'}
    </li>
    <li>Job Description:</li>
  </ul>

  <p className="mb-4">{formData.jd || '[Job Description here...]'}</p>

  <p className="mb-4">
    We look forward to speaking with you and learning more about your background.
  </p>

  <p>
    Warm regards,<br />
    {formData.nameOfTheInterviewer || '[Name of Interviewer]'}<br />
    {formData.companyName || '[Company Name]'}
  </p>
</div>


          {/* </div> */}
      </div>

      </div>
    </div>

</div>

    </>
  )
}

export default Contact
