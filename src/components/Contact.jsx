import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import githubimg from "../assets/images/github_3291695.png";
import leetcode from "../assets/images/LeetCode_logo_black.png";
import linkedinimg from "../assets/images/linkedin.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    nameOfTheInterviewer: "",
    interviewerEmail: "",
    ctc: "",
    mobileNumber: "",
    interviewDate: "",
    jd: "",
  });

  const handleChange = (e) => {
    console.log("formatData", formData);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMailBody());
    alert("Email format copied to clipboard!");
  };

  const formatDate = (date) => {
    if (!date) return "[Date of Interview]";
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  const generateMailBody = () => {
    return `Dear Candidate,

We are pleased to invite you for an interview for a position at ${
      formData.companyName || "[Company Name]"
    }. Please find the interview details below:

- Interviewer's Name: ${formData.nameOfTheInterviewer || "[Name of Interviewer]"}
- Interviewer's Email: ${formData.interviewerEmail || "[Interviewer Email]"}
- Interviewer's Contact Number: ${formData.mobileNumber || "[Mobile Number]"}
- Offered CTC: ₹${formData.ctc || "[CTC]"}
- Date of Interview: ${formatDate(formData.interviewDate)}
- Job Description:

${formData.jd || "[Job Description here...]"}

We look forward to speaking with you and learning more about your background.

Warm regards,  
${formData.nameOfTheInterviewer || "[Name of Interviewer]"}  
${formData.companyName || "[Company Name]"}`;
  };

  const handleSubmit = () => {
    const subject = `Interview Invitation – Position at ${
      formData.companyName || "[Company Name]"
    }`;
    const body = encodeURIComponent(generateMailBody());
    const mailtoLink = `mailto:${formData.interviewerEmail || ""}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Outer wrapper (glassy) */}
      <div
        className="
          relative mx-4 md:mx-[5rem] mt-6 p-5 rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/15
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          overflow-hidden
        "
      >
        {/* glossy overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute -top-24 left-[-20%] h-56 w-[140%] rotate-6 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-70" />

        {/* Social Cards */}
        <div className="relative flex flex-wrap justify-center gap-x-[3rem] gap-y-[3rem]">
          {/* Github */}
          <div className="w-[20rem] h-[20rem] relative group rounded-2xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_18px_50px_rgba(0,0,0,0.35)]">
            {/* Hover */}
            <a
              href="https://github.com/satyadeepjandhyam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hidden group-hover:flex absolute inset-0 items-center justify-center z-[100] bg-black/40 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-white/80 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  <FaLink className="text-black" />
                </div>
              </div>
            </a>

            {/* Gloss */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

            <img src={githubimg} className="w-full h-full object-cover" alt="git hub" />
          </div>

          {/* Leetcode */}
          <div className="w-[20rem] h-[20rem] relative group rounded-2xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_18px_50px_rgba(0,0,0,0.35)]">
            <a
              href="https://leetcode.com/u/kWE8gbRCNC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hidden group-hover:flex absolute inset-0 items-center justify-center z-[100] bg-black/40 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-white/80 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  <FaLink className="text-black" />
                </div>
              </div>
            </a>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

            <img src={leetcode} className="w-full h-full object-cover" alt="leetcode" />
          </div>

          {/* Linkedin */}
          <div className="w-[20rem] h-[20rem] relative group rounded-2xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_18px_50px_rgba(0,0,0,0.35)]">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hidden group-hover:flex absolute inset-0 items-center justify-center z-[100] bg-black/40 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-white/80 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  <FaLink className="text-black" />
                </div>
              </div>
            </a>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

            <img src={linkedinimg} className="w-full h-full object-cover" alt="linkedin" />
          </div>
        </div>

        {/* Offer a Job section (glassy) */}
        <div
          className="
            relative mt-8 p-5 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/15
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            overflow-hidden
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-[-20%] h-56 w-[140%] rotate-6 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-70" />

          <div className="relative">
            <p className="text-[2rem] text-white">Offer a Job</p>
          </div>

          <div className="relative w-full flex flex-col md:flex-row gap-5 mt-4">
            {/* Left form */}
            <div className="w-full md:w-6/12">
              <div className="flex w-full flex-col md:flex-row gap-[2rem]">
                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="companyName" className="text-white text-[1rem] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData["companyName"]}
                    onChange={(e) => handleChange(e)}
                    className="
                      bg-white/15 text-white placeholder:text-white/60
                      backdrop-blur-xl border border-white/20
                      h-[2.5rem] rounded-xl pl-2
                      focus:outline-none focus:ring-2 focus:ring-white/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    "
                  />
                </div>

                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="nameOfTheInterviewer" className="text-white text-[1rem] mb-1">
                    Name of the interviewer
                  </label>
                  <input
                    type="text"
                    name="nameOfTheInterviewer"
                    id="nameOfTheInterviewer"
                    value={formData["nameOfTheInterviewer"]}
                    onChange={(e) => handleChange(e)}
                    className="
                      bg-white/15 text-white placeholder:text-white/60
                      backdrop-blur-xl border border-white/20
                      h-[2.5rem] rounded-xl pl-2
                      focus:outline-none focus:ring-2 focus:ring-white/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    "
                  />
                </div>
              </div>

              <div className="flex w-full flex-col md:flex-row gap-[2rem] mt-4">
                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="interviewerEmail" className="text-white text-[1rem] mb-1">
                    Interviewer Email
                  </label>
                  <input
                    type="text"
                    id="interviewerEmail"
                    value={formData["interviewerEmail"]}
                    onChange={(e) => handleChange(e)}
                    className="
                      bg-white/15 text-white placeholder:text-white/60
                      backdrop-blur-xl border border-white/20
                      h-[2.5rem] rounded-xl pl-2
                      focus:outline-none focus:ring-2 focus:ring-white/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    "
                  />
                </div>

                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="ctc" className="text-white text-[1rem] mb-1">
                    CTC
                  </label>
                  <input
                    type="text"
                    value={formData["ctc"]}
                    onChange={handleChange}
                    className="
                      bg-white/15 text-white placeholder:text-white/60
                      backdrop-blur-xl border border-white/20
                      h-[2.5rem] rounded-xl pl-2
                      focus:outline-none focus:ring-2 focus:ring-white/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    "
                    id="ctc"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col md:flex-row gap-[2rem] mt-4">
                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="mobileNumber" className="text-white text-[1rem] mb-1">
                    Interviewer Mobilenumber
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={formData["mobileNumber"]}
                    name="mobileNumber"
                    onChange={(e) => handleChange(e)}
                    className="
                      bg-white/15 text-white placeholder:text-white/60
                      backdrop-blur-xl border border-white/20
                      h-[2.5rem] rounded-xl pl-2
                      focus:outline-none focus:ring-2 focus:ring-white/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    "
                  />
                </div>

                <div className="flex flex-col w-full md:w-6/12">
                  <label htmlFor="interviewDate" className="text-white text-[1rem] mb-1">
                    Date of the Interview
                  </label>
                  <input
                    type="date"
                    onChange={(e) => handleChange(e)}
                    className="
                      bg-white/15 text-white placeholder:text-white/60
                      backdrop-blur-xl border border-white/20
                      h-[2.5rem] rounded-xl pl-2
                      focus:outline-none focus:ring-2 focus:ring-white/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    "
                    id="interviewDate"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mt-4">
                <label htmlFor="jd" className="text-white text-[1rem] mb-1">
                  JD
                </label>
                <textarea
                  name="jd"
                  id="jd"
                  onChange={(e) => handleChange(e)}
                  className="
                    bg-white/10 text-white placeholder:text-white/60
                    backdrop-blur-xl border border-white/20
                    h-[30rem] p-5 rounded-2xl
                    focus:outline-none focus:ring-2 focus:ring-white/30
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.18),_0_14px_30px_rgba(0,0,0,0.25)]
                  "
                ></textarea>
              </div>

              <div className="w-full flex items-center justify-center mt-5">
                <input
                  type="button"
                  className="
                    w-[10rem] h-[3rem] rounded-xl cursor-pointer
                    bg-white/15 backdrop-blur-xl border border-white/20
                    text-white font-semibold
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                    hover:bg-white/20 active:scale-[0.98] transition
                  "
                  onClick={() => {
                    handleCopy();
                  }}
                  value={"copy the message"}
                  name="copy"
                />
              </div>
            </div>

            {/* Right preview */}
            <div className="w-full md:w-6/12 h-[100%] p-5">
              <div
                id="mail-format"
                className="
                  relative p-6 rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/15
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_18px_50px_rgba(0,0,0,0.35)]
                  text-[15px] leading-7 text-white/90
                  max-w-2xl mx-auto font-sans h-[100%]
                  overflow-hidden
                "
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent" />

                <p className="relative mb-4">Dear Candidate,</p>

                <p className="relative mb-4">
                  We are pleased to invite you for an interview for a position at
                  <strong> {formData.companyName || "[Company Name]"}</strong>.
                  Please find the interview details below:
                </p>

                <ul className="relative mb-4 list-disc list-inside space-y-1">
                  <li>
                    Interviewer's Name:{" "}
                    {formData?.nameOfTheInterviewer || "[Name of Interviewer]"}
                  </li>
                  <li>
                    Interviewer's Email:{" "}
                    {formData?.interviewerEmail || "[Interviewer Email]"}
                  </li>
                  <li>
                    Interviewer's Contact Number:{" "}
                    {formData?.mobileNumber || "[Mobile Number]"}
                  </li>
                  <li>Offered CTC: ₹{formData.ctc || "[CTC]"}</li>
                  <li>
                    Date of Interview:{" "}
                    {formData?.interviewDate
                      ? formatDate(formData.interviewDate)
                      : "[Interview Date]"}
                  </li>
                  <li>Job Description:</li>
                </ul>

                <p className="relative mb-4">
                  {formData.jd || "[Job Description here...]"}
                </p>

                <p className="relative mb-4">
                  We look forward to speaking with you and learning more about
                  your background.
                </p>

                <p className="relative">
                  Warm regards,
                  <br />
                  {formData.nameOfTheInterviewer || "[Name of Interviewer]"}
                  <br />
                  {formData.companyName || "[Company Name]"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
