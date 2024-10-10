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
    const [activeCard, setActiveCard] = useState(null);

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

    const handleEmailClick = (email) => (e) => {
        e.preventDefault();
        window.open(`mailto:${email}`, '_blank');
    };

    const SocialCard = ({ image, name, role, linkedin, instagram, email, showPortfolio, index }) => (
        <div 
            className="relative"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={(e) => {
                // Check if the mouse is not moving to the card content
                const rect = e.currentTarget.getBoundingClientRect();
                const isLeavingToCard = e.clientY > rect.bottom && 
                                      e.clientX >= rect.left && 
                                      e.clientX <= rect.right;
                if (!isLeavingToCard) {
                    setActiveCard(null);
                }
            }}
        >
            <img src={image} className="rounded-full w-10 h-10 sm:w-5 sm:h-5 object-cover cursor-pointer" alt={name} />
            <div 
                className={`flex flex-col items-center absolute bottom-0 left-1/2 w-48 transform -translate-x-1/2 translate-y-full 
                           ${activeCard === index ? 'visible opacity-100' : 'invisible opacity-0'} 
                           bg-[#515151] text-[#FFFFFF] rounded-3xl shadow-lg transition-opacity duration-200
                           after:content-[''] after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 
                           after:-translate-y-full after:border-8 after:border-transparent after:border-b-[#515151] z-50`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
            >
                <div>
                    <img src={image} className='object-cover rounded-t-3xl w-full' alt={name} />
                </div>
                <div className='flex flex-col gap-3 items-center p-3'>
                    <div className='flex flex-col items-center'>
                        <span className='text-lg font-bold'>{name}</span>
                        <span className='text-xs font-semibold'>{role}</span>
                    </div>
                    <div className='flex gap-1'>
                        {linkedin && (
                            <a 
                                href={linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='p-2 bg-[#696969] rounded-full hover:bg-[#555555] transition-colors'
                            >
                                <img src={LOGO1} className='object-center' alt="LinkedIn" />
                            </a>
                        )}
                        {instagram && (
                            <a 
                                href={instagram} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='p-2 bg-[#696969] rounded-full hover:bg-[#555555] transition-colors'
                            >
                                <img src={LOGO2} alt="Instagram" />
                            </a>
                        )}
                        {showPortfolio && (
                            <div 
                                className='p-2 bg-[#696969] rounded-full hover:bg-[#555555] transition-colors cursor-not-allowed' 
                                title="Portfolio coming soon"
                            >
                                <img src={LOGO3} alt="Portfolio" />
                            </div>
                        )}
                        {email && (
                            <button 
                                onClick={handleEmailClick(email)} 
                                className='p-2 bg-[#696969] rounded-full hover:bg-[#555555] transition-colors'
                            >
                                <img src={LOGO4} alt="Email" />
                            </button>
                        )}
                    </div>
                    {email && (
                        <div>
                            <button 
                                onClick={handleEmailClick(email)} 
                                className="bg-[#222222] flex gap-3 items-center text-white text-sm sm:text-[0.6rem] font-inter 
                                         rounded-full px-8 sm:px-2 py-3 sm:py-1 sm:mb-6 hover:bg-[#333333] transition-colors"
                            >
                                <span className='text-[0.89rem]'>Send Mail</span>
                                <img src={ARROW} className='w-5' alt="" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex items-center bg-[#101010] rounded-[2.5rem] sm:rounded-[1.7rem] mt-10 sm:mt-7 justify-between mx-20 sm:mx-3 px-10 sm:px-5 relative">
            <div>
                <img src={LOGO} className="w-20 sm:w-10" alt="Company Logo" />
            </div>
            <div>
                <div className="flex sm:items-center gap-3 sm:gap-1 mt-7 sm:mt-4 relative">
                    <SocialCard 
                        image={IMG1}
                        name="Shivam Kapoor"
                        role="Founder"
                        linkedin="https://www.linkedin.com/in/shivam-kapoor-579b52223/"
                        instagram="https://www.instagram.com/shivamkapoor17/"
                        email="shivamkapoor2002@gmail.com"
                        showPortfolio={true}
                        index={0}
                    />
                    <SocialCard 
                        image={IMG2}
                        name="Sumir Singh"
                        role="Paid ads & Web developer"
                        linkedin="https://www.linkedin.com/in/sumir-singh-b5a608254/"
                        instagram=""
                        email=""
                        showPortfolio={true}
                        index={1}
                    />
                    <SocialCard 
                        image={IMG3}
                        name="Harshit Chaudhary"
                        role="Visual & UI Designer"
                        linkedin="https://www.linkedin.com/in/harshit-chaudhary-arty/"
                        instagram="https://www.instagram.com/artyone.visuals/"
                        email=""
                        showPortfolio={true}
                        index={2}
                    />
                    <SocialCard 
                        image={IMG4}
                        name="Yash Mudotiya"
                        role="Co-founder & Client SEO Lead"
                        linkedin="https://www.linkedin.com/in/yash-mudotiya-820344246/"
                        instagram="https://www.instagram.com/yashnotyessh/"
                        email="sharyash1101@gmail.com"
                        showPortfolio={true}
                        index={3}
                    />
                    <span className="text-white text-4xl sm:text-lg">{formattedTime}</span>
                    <div className="flex flex-col text-sm sm:leading-3 sm:text-[0.43rem] sm:pt-1">
                        <span className="text-white">{time.getHours() >= 12 ? 'pm' : 'am'}</span>
                        <span className="text-white">{formattedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;