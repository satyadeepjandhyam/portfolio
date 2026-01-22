// ExperienceSection.jsx
import React from "react";
import aitsimg from "../assets/images/aits.png";
import npdclimg from "../assets/images/npdcl.png";
import {
  SiVite,
  SiSpring,
  SiMongodb,
  SiSocketdotio,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import ExpComponent from "./ExpComponent";

const ExperienceSection = ({ setGalleryOpen }) => {
  // Experience Data
  const experiences = [
    {
      companyLogo: npdclimg,
      companyName: "npdcl",
      role: "Fullstack Developer",
      duration: "03/2025 to Present",
      techStack: [SiVite, SiSpring, FaNodeJs, SiMongodb, FaAws, SiSocketdotio],
      projects: [
        {
          name: "Employee Dashboard APP",
          role: "BACKEND",
          description: [
             "Implemented Spring Security with access and refresh token authentication.",
        "Configured multi-database connectivity for modular backend growth.",
        "Improved backend performance from 30% to 90% using query and API optimization.",
        "Built scalable REST APIs for internal government services."
          ],
        },
        {
          name: "QUALITY CONTROL",
          role: "SPRING MVC + JSP",
          description: [
            "Designed a role-based access control system improving security by 40%.",
        "Built authentication and password management modules.",
        "Developed reporting dashboards using JSP and Spring MVC.",
        "Optimized backend logic improving report processing time by 45%.",
        "Integrated workflow automation for internal departments."
          ],
        },
        {
          name: "SAP TO J2S",
          role: "Spring Boot + Selenium",
          description: [
             "Implemented automated schedulers to sync SAP data with Oracle systems.",
        "Built background jobs for daily synchronization at 12 AM.",
        "Improved data accuracy and reduced manual work.",
        "Designed REST APIs to monitor synchronization status."
          ],
        }
      ],
    },
    {
      companyLogo: aitsimg,
      companyName: "Analogue IT Solutions",
      role: "Fullstack Developer",
      duration: "04/2023 to 03/2025",
      techStack: [SiVite, SiSpring, FaNodeJs, SiMongodb, FaAws, SiSocketdotio],
      projects: [
        {
          name: "Scuti Arts",
          role: "Frontend",
          link: "https://scutiarts.com",
          description: [
            "Developed a high-performance eCommerce platform using React.js with digital/physical artworks buying & bidding.",
            "Implemented real-time bidding with Socket.IO and WebSockets.",
            "Built 30+ reusable components (Login, Signup, OTP, Home, Footer, Sub-pages) using TailwindCSS + Swiper.js.",
            "Integrated Razorpay for payments and Cashfree for payouts with receipt generation.",
            "Implemented complete eCommerce flow: Add-to-Cart, Checkout, Payment.",
            "Integrated Ecom Express API for delivery tracking; handled 40+ REST API integrations.",
            "Robust forms with Formik + Yup validation.",
            "Optimized performance with lazy loading, code splitting, React Suspense (40% faster).",
            "Achieved 98+ Lighthouse scores in performance & accessibility with responsive design.",
            "JWT authentication with RBAC security.",
            "CI/CD with GitHub Actions boosted release efficiency by 50%.",
            "Hosted on AWS (EC2, S3, Route53, CloudFront, LoadBalancer) scaling to 10,000+ users.",
          ],
        },
        {
          name: "Jonas Kitchen",
          role: "React + Spring Dev",
          link: "https://jonnaskitchen.com/",
          description: [
            "Technologies: React.js, Spring Boot, MongoDB, Razorpay, WebSockets, AWS.",
            "Built dashboard UI with ReactJS, role-based layouts for users/trainers.",
            "Integrated Razorpay reducing payment failures by 30%.",
            "Developed backend APIs with Spring Boot & Node.js for user/order handling.",
            "Implemented RBAC for admins, users, and trainers.",
            "Built WebSocket + STOMP notifications & in-app messaging.",
            "Enabled trainer assignment, user management, custom logins.",
            "Integrated WhatsApp API for image sharing in dashboard.",
            "Added YouTube video upload/embedding + chat inside dashboard.",
            "Faster debugging with browser debugger + React DevTools.",
          ],
        },
        {
          name: "Web Scraping Dashboard",
          role: "Spring Boot + Selenium",
          description: [
            "Technologies: Spring Boot, Selenium WebDriver, MongoDB, REST APIs, Scheduler.",
            "Built scheduled scraping jobs (daily at 12 AM) extracting product pricing, stock & ratings.",
            "Automated browser interactions with Selenium.",
            "Stored history in MongoDB for competitor trend analysis.",
            "Exposed REST APIs & built frontend dashboard to visualize scraped data.",
          ],
        },
        {
          name: "Theatre Booking App",
          role: "Backend Developer",
          description: [
            "Technologies: MongoDB, Node.js, Express.js, Handlebars.",
            "Designed optimized MongoDB data models with schema validation + indexing (40% faster queries).",
            "Built modular REST APIs for booking, seating, and admin operations.",
            "Implemented JWT authentication & secure session handling.",
            "Bulk movie data import reduced admin workload by 80%.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div
        className="
          relative mx-4 md:mx-[5rem]
          mt-6 p-5 rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/15
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          overflow-hidden
        "
      >
        {/* glossy overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute -top-24 left-[-20%] h-56 w-[140%] rotate-6 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl opacity-70" />

        <div className="relative">
          <p className="text-[2rem] text-white">Experience</p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExpComponent
              key={index}
              companyLogo={exp.companyLogo}
              companyName={exp.companyName}
              role={exp.role}
              duration={exp.duration}
              techStack={exp.techStack}
              onClickProjectView={() => setGalleryOpen()}
              projects={exp.projects}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
