import React from 'react';
import BALL from "../assets/basketball-line.png";
import LOGO1 from "../assets/instagram-line.png";
import LOGO2 from "../assets/linkedin-fill.png";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-40 sm:pt-10 pb-10 gap-28">
            <div className="flex flex-col items-center font-inter gap-12">
                <span className="text-5xl sm:text-3xl font-semibold">Let&apos;s talk</span>
                <button className="bg-[#222222] text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-9 sm:px-5 py-3 sm:py-1.5 w-[14rem] sm:w-[7.8rem]">
                    <a href="http://wa.link/0psi4e" className="no-underline">
                        <span>Become our Client</span>
                    </a>
                </button>
            </div>
            <div className="flex items-center justify-between w-9/12 xl:w-10/12 sm:w-10/12 mb-14 pb-5">
                <div className="text-xs sm:text-[0.53rem] font-normal font-inter flex gap-4 sm:gap-2">
                    <span>© 2025 CrestMediaTekAi</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="flex gap-7 sm:gap-4">
                    <a href="https://www.linkedin.com/company/crestmediatek-ai-co-in/" target="_blank" rel="noopener noreferrer">
                        <img src={LOGO2} className="w-6 h-6 sm:w-4 sm:h-4" alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/crestmediatekai/" target="_blank" rel="noopener noreferrer">
                        <img src={LOGO1} className="w-6 h-6 sm:w-4 sm:h-4" alt="Instagram" />
                    </a>
                    <a href="mailto:crestmediatekai.co.in@gmail.com">
                        <img src={BALL} className="w-6 h-6 sm:w-4 sm:h-4" alt="Email" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
