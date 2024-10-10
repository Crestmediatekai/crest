import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import NETMAS_PHOTO from "../assets/b68e712a80f5a4cacc1bb88446011e89.svg";
import AMAARAH_PHOTO from "../assets/amaarah1.jpg";
import AMPLUXE_PHOTO from "../assets/ampluze.jpg";
import SECURE_PHOTO from "../assets/secure.jpg";
import UDAAN_PHOTO from "../assets/udaan1.jpg";
import TECHMILLS_PHOTO from "../assets/techmiles.jpg";

const projects = [
  {
    name: "Netmas",
    image: NETMAS_PHOTO,
    tags: ["Catalogue website", "Saas", "Product design"],
    description: "We provide a complete website from design to deployment",
    userReview: 4.6,
    clientReview: 4.8,
  },
  {
    name: "Amaarah",
    image: AMAARAH_PHOTO,
    tags: ["E-commerce", "Fashion", "Web design"],
    description: "A stylish online fashion boutique",
    userReview: 4.7,
    clientReview: 4.9,
    link: "https://amaarah.co.in/",
  },
  {
    name: "Ampluxe",
    image: AMPLUXE_PHOTO,
    tags: ["Luxury goods", "E-commerce", "Brand identity"],
    description: "Premium online shopping experience",
    userReview: 4.8,
    clientReview: 4.7,
    link: "https://ampluxe.in/",
  },
  {
    name: "SecureTech AV",
    image: SECURE_PHOTO,
    tags: ["Security", "Audio-Visual", "B2B"],
    description: "Cutting-edge security and AV solutions",
    userReview: 4.5,
    clientReview: 4.6,
    link: "https://securetechav.com/",
  },
  {
    name: "Udaan",
    image: UDAAN_PHOTO,
    tags: ["Education", "E-learning", "Web app"],
    description: "Empowering education through technology",
    userReview: 4.4,
    clientReview: 4.5,
    link: "https://pbch.pythonanywhere.com/",
  },
  {
    name: "TechMills India",
    image: TECHMILLS_PHOTO,
    tags: ["IT Services", "B2B", "Web portal"],
    description: "Innovative IT solutions for businesses",
    userReview: 4.6,
    clientReview: 4.7,
    link: "https://techmillsindia.in/login",
  },
];

const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageAspectRatio, setImageAspectRatio] = useState(16 / 9);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateAspectRatio = () => {
      if (imageRef.current) {
        const { naturalWidth, naturalHeight } = imageRef.current;
        if (naturalWidth && naturalHeight) {
          setImageAspectRatio(naturalWidth / naturalHeight);
        }
      }
    };

    const img = imageRef.current;
    if (img) {
      img.addEventListener('load', updateAspectRatio);
      return () => img.removeEventListener('load', updateAspectRatio);
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div className="pt-32 sm:pt-20 flex flex-col gap-20 sm:gap-10 px-32 sm:px-10">
      <div className="text-4xl sm:text-2xl font-bold">
        <span>Our Works</span>
      </div>
      <div className="relative w-full" style={{ paddingBottom: `${100 / imageAspectRatio}%` }}>
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-gray-100">
          <img 
            ref={imageRef}
            src={project.image} 
            className="w-full h-full object-cover" 
            alt={project.name} 
          />
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="pt-10 flex sm:flex-wrap gap-40 sm:gap-9">
        <div className="flex flex-col gap-6 sm:gap-3">
          <div className="text-3xl sm:text-2xl font-semibold font-inter">
            <span>{project.name}</span>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2 uppercase text-[0.5rem] sm:text-[0.4rem]">
              {project.tags.map((tag, index) => (
                <li key={index} className="border border-black rounded-full px-3 sm:px-2 py-2 sm:py-1.5 font-bold">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-base font-semibold font-poppins">
            <span>Project Description</span>
          </div>
          <div className="w-7/12 sm:w-full text-xs">
            <span>{project.description}</span>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
              Visit Website
            </a>
          )}
        </div>
        <div>
          <div className="text-base font-inter font-semibold">
            <span>User Review</span>
          </div>
          <div className="flex gap-2 items-baseline text-xl">
            <span className="text-4xl">{project.userReview.toFixed(1)}</span>
            <span>of</span>
            <span>5</span>
          </div>
        </div>
        <div className="sm:pl-10">
          <div className="text-base font-inter font-semibold">
            <span>Client Review</span>
          </div>
          <div className="flex gap-2 items-baseline text-xl">
            <span className="text-4xl">{project.clientReview.toFixed(1)}</span>
            <span>of</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;