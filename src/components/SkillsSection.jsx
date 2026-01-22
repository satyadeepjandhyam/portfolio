// SkillsSection.jsx
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaNpm,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },

  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Socket.IO", icon: SiSocketdotio },

  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },

  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },

  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },

  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
  { name: "NPM", icon: FaNpm },
  { name: "Linux", icon: FaLinux },
];

const SkillsSection = () => {
  return (
    <section className="mx-4 md:mx-[5rem] mt-8">
      <div
        className="
          relative rounded-2xl p-6 md:p-10
          bg-white/10 backdrop-blur-xl
          border border-white/15
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          overflow-hidden
        "
      >
        {/* glossy overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute -top-24 left-[-20%] h-56 w-[140%] rotate-6 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-70" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left title */}
          <div className="max-w-xl">
            <p className="text-white text-3xl md:text-4xl font-semibold leading-tight">
              Skills
            </p>
            <p className="text-lime-300 text-2xl md:text-3xl font-medium">
              your tech stack
            </p>

            <button
              className="
                mt-5 inline-flex items-center justify-center
                px-5 py-2.5 rounded-lg
                bg-white/10 hover:bg-white/15
                border border-white/15
                text-white text-sm
                shadow-[0_14px_30px_rgba(0,0,0,0.25)]
                transition
              "
              type="button"
            >
              See all skills
            </button>
          </div>

          {/* Right icons */}
          <div className="relative w-full lg:w-[58%]">
            <div
              className="
                grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7
                gap-5 sm:gap-6
                items-center justify-items-center
              "
            >
              {skills.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="
                      group flex flex-col items-center justify-center
                      opacity-75 hover:opacity-100
                      transition
                    "
                    title={s.name}
                  >
                    <div
                      className="
                        h-14 w-14 sm:h-16 sm:w-16
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        backdrop-blur
                        flex items-center justify-center
                        shadow-[0_12px_28px_rgba(0,0,0,0.25)]
                        group-hover:bg-white/10
                        transition
                      "
                    >
                      <Icon className="text-white text-2xl sm:text-3xl" />
                    </div>
                    <p className="mt-2 text-[11px] sm:text-xs text-white/80 text-center">
                      {s.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
