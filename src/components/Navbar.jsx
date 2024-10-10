import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 md:w-11/12 bg-zinc-900 bg-opacity-70 backdrop-blur-md text-white flex justify-around py-4 md:py-1 shadow-lg rounded-full mb-4">
        <div className="flex items-center gap-14 md:space-x-0 md:gap-3.5 md:px-1">
          <a href="#home" className="flex items-center gap-1 focus:outline-none">
            <svg className="w-5 h-5 md:w-2 md:h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 4v6H9m-4-6h.01"></path>
            </svg>
            <span className="text-sm md:text-[0.57rem]">Home</span>
          </a>
          <a href="#our-work" className="flex flex-col items-center focus:outline-none">
            <span className="text-sm md:text-[0.57rem]">Our Work</span>
          </a>
          <a href="#about" className="flex flex-col items-center focus:outline-none">
            <span className="text-sm md:text-[0.57rem]">About</span>
          </a>
          <a href="#our-clients" className="flex flex-col items-center focus:outline-none">
            <span className="text-sm md:text-[0.57rem]">Our Clients</span>
          </a>
          <a href="#branding" className="flex flex-col items-center focus:outline-none">
            <span className="text-sm md:text-[0.57rem]">Branding</span>
          </a>
          <a href="#lets-talk" className="flex flex-col items-center focus:outline-none bg-gray-700 px-6 md:px-4 py-4 md:py-2 rounded-full">
            <span className="text-sm md:text-[0.57rem]">Let's talk</span>
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 mb-4 ml-4 md:hidden">
        <button onClick={toggleNavbar} className="bg-zinc-900 p-2 rounded-full focus:outline-none">
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 bg-opacity-70 backdrop-blur-md text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center mt-10 space-y-4">
          <a href="#home" className="text-sm">Home</a>
          <a href="#our-work" className="text-sm">Our Work</a>
          <a href="#about" className="text-sm">About</a>
          <a href="#our-clients" className="text-sm">Our Clients</a>
          <a href="#branding" className="text-sm">Branding</a>
          <a href="#lets-talk" className="text-sm bg-gray-700 px-6 py-2 rounded-full">Let's talk</a>
        </div>
      </div>

      <style jsx>{`
        .hamburger span {
          transition: all 0.3s ease-in-out;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
