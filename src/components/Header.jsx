import { useState, useEffect } from 'react';
import LOGO from "../assets/f0211ba9161f004f374318662479997c.png";
import IMG1 from "../assets/image_19.png";
import IMG2 from "../assets/image_16.png";
import IMG3 from "../assets/img1.png";
import IMG4 from "../assets/image_20.png";
import LOGO1 from "../assets/linkedin-fill.png";
import LOGO2 from "../assets/instagram-line.png";
import LOGO3 from "../assets/links-fill.png";
import LOGO4 from "../assets/mail-line.png";
import ARROW from "../assets/arrow-right-line.png";

const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    });

    const formattedDate = time.toLocaleDateString('en-IN', {
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex items-center bg-[#101010] rounded-[2.5rem] sm:rounded-[1.7rem] mt-10 sm:mt-7 justify-between mx-20 sm:mx-3 px-10 sm:px-5 relative">
            <div>
                <img src={LOGO} className="w-20 sm:w-10" alt="Company Logo" />
            </div>
            <div>
                <div className="flex sm:items-center gap-3 sm:gap-1 mt-7 sm:mt-4 relative">
                    <div className="relative group">
                        <img src={IMG1} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="Image 1" />
                        <div className="flex flex-col items-center absolute bottom-0 left-1/2 w-48 transform -translate-x-1/2 translate-y-full invisible group-hover:visible bg-[#515151] text-[#FFFFFF] rounded-3xl shadow-lg after:content-[''] after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-full after:border-8 after:border-transparent after:border-b-[#515151]">
                            <div>
                                <img src={IMG1} className='object-cover' alt="" />
                            </div>
                            <div className='flex flex-col gap-3 items-center p-3'>
                                <div className='flex flex-col items-center'>
                                    <span className='text-lg font-bold'>Shivam Kapoor</span>
                                    <span className='text-xs font-semibold'>Founder</span>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO1} className='object-center' alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO2} alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO4} alt="" />
                                    </div>
                                </div>
                                <div>
                                <button className="bg-[#222222] flex gap-3 items-center text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-8 sm:px-2 py-3 sm:py-1 sm:mb-6">
                                    <span className='text-[0.89rem]'>Send Mail</span>
                                    <img src={ARROW} className='w-5' alt="" />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={IMG2} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="Image 2" />
                        <div className="flex flex-col items-center absolute bottom-0 left-1/2 w-48 transform -translate-x-1/2 translate-y-full invisible group-hover:visible bg-[#515151] text-[#FFFFFF] rounded-3xl shadow-lg after:content-[''] after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-full after:border-8 after:border-transparent after:border-b-[#515151]">
                            <div>
                                <img src={IMG2} className='object-cover rounded-t-3xl' alt="" />
                            </div>
                            <div className='flex flex-col gap-3 items-center p-3'>
                                <div className='flex flex-col items-center'>
                                    <span className='text-lg font-bold'>Sumir Singh</span>
                                    <span className='text-xs font-semibold'>Paid ads & Web developer</span>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO1} className='object-center' alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO2} alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO4} alt="" />
                                    </div>
                                </div>
                                <div>
                                <button className="bg-[#222222] flex gap-3 items-center text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-8 sm:px-2 py-3 sm:py-1 sm:mb-6">
                                    <span className='text-[0.89rem]'>Send Mail</span>
                                    <img src={ARROW} className='w-5' alt="" />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={IMG3} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="Image 3" />
                        <div className="flex flex-col items-center absolute bottom-0 left-1/2 w-48 transform -translate-x-1/2 translate-y-full invisible group-hover:visible bg-[#515151] text-[#FFFFFF] rounded-3xl shadow-lg after:content-[''] after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-full after:border-8 after:border-transparent after:border-b-[#515151]">
                            <div>
                                <img src={IMG3} className='object-cover rounded-t-3xl' alt="" />
                            </div>
                            <div className='flex flex-col gap-3 items-center p-3'>
                                <div className='flex flex-col items-center'>
                                    <span className='text-lg font-bold'>Harshit Chaudhary</span>
                                    <span className='text-xs font-semibold'>Visual & UI Designer</span>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO1} className='object-center' alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO2} alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO3} alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO4} alt="" />
                                    </div>
                                </div>
                                <div>
                                <button className="bg-[#222222] flex gap-3 items-center text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-8 sm:px-2 py-3 sm:py-1 sm:mb-6">
                                    <span className='text-[0.89rem]'>Send Mail</span>
                                    <img src={ARROW} className='w-5' alt="" />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <img src={IMG4} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover" alt="Image 4" />
                        <div className="flex flex-col items-center absolute bottom-0 left-1/2 w-48 transform -translate-x-1/2 translate-y-full invisible group-hover:visible bg-[#515151] text-[#FFFFFF] rounded-3xl shadow-lg after:content-[''] after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-full after:border-8 after:border-transparent after:border-b-[#515151]">
                            <div>
                                <img src={IMG4} className='object-cover rounded-t-3xl' alt="" />
                            </div>
                            <div className='flex flex-col gap-4 items-center p-3'>
                                <div className='flex flex-col items-center'>
                                    <span className='text-lg font-bold'>Yash Mudotiya</span>
                                    <span className='text-xs font-semibold'>Co-founder & Client SEO Lead</span>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO1} className='object-center' alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO2} alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO3} alt="" />
                                    </div>
                                    <div className='p-2 bg-[#696969] rounded-full'>
                                        <img src={LOGO4} alt="" />
                                    </div>
                                </div>
                                <div>
                                <button className="bg-[#222222] flex gap-3 items-center text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-8 sm:px-2 py-3 sm:py-1 sm:mb-6">
                                    <span className='text-[0.89rem]'>Send Mail</span>
                                    <img src={ARROW} className='w-5' alt="" />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="text-white text-4xl sm:text-lg">{formattedTime}</span>
                    <div className="flex flex-col text-sm sm:leading-3 sm:text-[0.43rem] sm:pt-1">
                        <span className="text-white">{time.getHours() >= 12 ? 'pm' : 'am'}</span>
                        <span className="text-white">{formattedDate}</span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
