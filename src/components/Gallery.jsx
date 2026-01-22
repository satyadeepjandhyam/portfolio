import React, { useEffect, useRef, useState } from "react";
import atnumdesignes from "../assets/images/atnumdesignes.png";
import cinepass from "../assets/images/cinepass1.png";

const Gallery = ({ projectType, isOpen, isCLose }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(isOpen);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsGalleryOpen(isOpen);
  }, [isOpen]);

  // ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        isCLose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCLose]);

  // Outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        isCLose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCLose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-end justify-center
        transition-opacity duration-300 ease-in-out
        ${isGalleryOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        
        /* ✅ glossy overlay */
        bg-black/60
        backdrop-blur-sm
        `}
      >
        <div
          ref={containerRef}
          className={`
          relative rounded-t-3xl w-[80%] h-[80vh] mx-[5rem] flex flex-col
          transition-transform duration-500 ease-in-out transform
          ${isGalleryOpen ? "translate-y-0" : "translate-y-full"}

          /* ✅ glassy container */
          bg-white/10
          backdrop-blur-2xl
          border border-white/15
          shadow-[0_20px_70px_rgba(0,0,0,0.55)]
          overflow-hidden
        `}
        >
          {/* ✅ Gloss highlight overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
          {/* ✅ Top shine streak */}
          <div className="pointer-events-none absolute -top-24 left-[-20%] h-56 w-[140%] rotate-6 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-2xl opacity-70" />

          {/* Slide bar */}
          <div className="relative w-full h-[2.5rem] flex items-center justify-center">
            <div
              className="
                w-[5rem] h-[0.45rem] rounded-xl
                bg-white/25
                border border-white/20
                shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_10px_20px_rgba(0,0,0,0.35)]
              "
            ></div>
          </div>

          {/* Scrollable content */}
          <div
            className="
              relative flex-1 overflow-y-auto p-5 flex flex-wrap gap-5 items-center justify-center

              /* ✅ soft glossy base inside */
              bg-white/5
              backdrop-blur-xl
              border-t border-white/10
            "
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="
                  relative w-[23rem] h-[23rem] rounded-2xl overflow-hidden

                  /* ✅ glassy card */
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/15
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.25),_0_18px_50px_rgba(0,0,0,0.45)]
                  hover:bg-white/15
                  transition
                "
              >
                {/* ✅ card gloss */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

                <img
                  className="relative w-full h-full object-contain"
                  src={i % 2 === 0 ? atnumdesignes : cinepass}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
