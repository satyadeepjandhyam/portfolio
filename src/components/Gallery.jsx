import React, { useEffect, useRef, useState } from 'react';
import atnumdesignes from '../assets/images/atnumdesignes.png';
import cinepass from '../assets/images/cinepass1.png';

const Gallery = ({ projectType, isOpen, isCLose }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(isOpen);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsGalleryOpen(isOpen);
  }, [isOpen]);

  // ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        isCLose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCLose]);

  // Outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        isCLose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCLose]);

  return (
    <>
      <div className={`fixed inset-0 bg-black/50 z-50 flex items-end justify-center
        transition-opacity duration-300 ease-in-out ${isGalleryOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        <div ref={containerRef} className={`
          bg-white rounded-t-xl w-[80%] h-[80vh] mx-[5rem] flex flex-col
          transition-transform duration-500 ease-in-out transform
          ${isGalleryOpen ? 'translate-y-0' : 'translate-y-full'}
        `}>
          {/* Slide bar */}
          <div className='w-full h-[2rem] flex items-center justify-center'>
            <div className='w-[5rem] h-[0.5rem] bg-gray-300 rounded-xl'></div>
          </div>

          {/* Scrollable content */}
          <div className='flex-1 overflow-y-auto bg-gray-300 p-5 flex flex-wrap gap-5 items-center justify-center'>
            {[...Array(20)].map((_, i) => (
              <div key={i} className='w-[23rem] h-[23rem] bg-white rounded-xl'>
                <img className='w-full h-full object-contain'
                  src={i % 2 === 0 ? atnumdesignes : cinepass} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
