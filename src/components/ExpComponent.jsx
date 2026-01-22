// ExpComponent.jsx
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";

const ExpComponent = ({
  companyLogo,
  companyName,
  role,
  duration,
  techStack,
  projects,
  onClickProjectView,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="
          relative w-full h-[5rem] mt-3 rounded-2xl
          flex items-center justify-start cursor-pointer
          bg-white/10 backdrop-blur-xl
          border border-white/15
          shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_18px_50px_rgba(0,0,0,0.35)]
          overflow-hidden
          hover:bg-white/15 transition
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />

        <div className="relative w-[20%] h-[100%]">
          <img
            className="w-full h-full object-contain"
            src={companyLogo}
            alt="Company Logo"
          />
        </div>

        <div className="relative w-[80%] h-[100%] text-white flex items-center justify-between px-5">
          <div className="flex flex-col justify-center gap-y-2">
            <p className="text-white/90">{companyName}</p>
            <p className="text-white/70">{role}</p>
          </div>

          <div className="flex flex-col justify-center gap-y-2 text-right">
            <p className="text-white/80">{duration}</p>
            <div className="flex gap-x-2 justify-end">
              {techStack.map((Icon, index) => (
                <Icon key={index} className="text-[1rem] text-white/90" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5 hidden"
        } w-full mt-3 p-5 rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/15
          shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_18px_50px_rgba(0,0,0,0.35)]
        `}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />

        <p className="relative text-[2rem] ml-5 text-white">Projects</p>

        {projects.map((project, index) => (
          <div className="relative w-full flex flex-row mt-5" key={index}>
            <div className="w-[8%] flex items-start justify-center">
              <div
                className="
                  border border-white/20
                  bg-white/10 backdrop-blur
                  w-[4rem] h-[4rem]
                  flex items-center justify-center rounded-full
                  text-white
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                "
              >
                {index + 1}
              </div>
            </div>

            <div className="w-[92%] ml-2">
              <div className="flex items-center gap-x-5">
                <p className="text-[1.5rem] text-white">{project.name}</p>
                <p className="text-[1rem] text-white/70">{project.role}</p>
              </div>

              <div
                className="
                  relative flex items-end justify-between w-full p-5 rounded-2xl
                  bg-white/15 backdrop-blur-xl
                  border border-white/15
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_14px_30px_rgba(0,0,0,0.25)]
                  overflow-hidden
                  mt-2
                "
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent" />

                <ul className="relative list-disc ml-5 text-white/85">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>

                <div className="relative flex items-center gap-5">
                  {project.link && (
                    <a
                      className="
                        w-[7rem] h-[2rem] rounded-2xl flex items-center justify-end gap-x-2 px-2
                        bg-white/15 backdrop-blur-xl border border-white/15
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                        hover:bg-white/20 transition
                      "
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-white">Website</p>
                      <div className="w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-white/80">
                        <FaLink className="text-black" />
                      </div>
                    </a>
                  )}

                  <button
                    className="
                      w-[8rem] h-[3rem] rounded-xl font-semibold
                      bg-white/15 backdrop-blur-xl border border-white/20
                      text-white
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_10px_24px_rgba(0,0,0,0.25)]
                      hover:bg-white/20 active:scale-[0.98] transition
                    "
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
    </>
  );
};

export default ExpComponent;
