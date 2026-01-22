import { useRef, useState } from "react";
import "./App.css";
import AnimatedIntro from "./components/AnimatedIntro";
import ExperienceSection from "./components/ExperienceSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
// import Skills from "./components/Skills"; // if you have it

function App() {
  const [isGalleryOpen, setIsgalleryOpen] = useState(false);

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const skillsRef = useRef(null);   // ✅ add this
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <HeroSection
        onAbout={() => scrollToSection(aboutRef)}
        onExp={() => scrollToSection(expRef)}
        onSkills={() => scrollToSection(skillsRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      {/* add scroll margin top so fixed hero/nav doesn't cover section headings */}
      <section ref={aboutRef} className="scroll-mt-28">
        <AnimatedIntro />
      </section>

      <section ref={expRef} className="scroll-mt-28">
        <ExperienceSection setGalleryOpen={() => setIsgalleryOpen(true)} />
      </section>

      <section ref={skillsRef} className="scroll-mt-28">
        {/* <Skills /> */}
        {/* temporary */}
        <div className="mx-4 md:mx-20 py-20">Skills Section</div>
      </section>

      <section ref={contactRef} className="scroll-mt-28">
        <Gallery isOpen={isGalleryOpen} isCLose={() => setIsgalleryOpen(false)} />
        <Contact />
      </section>
    </>
  );
}

export default App;
