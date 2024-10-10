import VIDEO from "../assets/vid1.mp4";
import PHOTO1 from "../assets/1.jpg";
import PHOTO2 from "../assets/2.jpg";
import PHOTO3 from "../assets/3.jpg";

const Branding = () => {
    return (
        <div className="flex sm:flex-col items-center justify-evenly px-60 xl:px-24 sm:px-10 gap-36 xl:gap-16 sm:gap-5 xl:py-20 mt-[-250px] 3xl:mt-[-20px] xl:mt-[-350px]">
            <div className="h-[85rem] xl:h-[78rem] 3xl:h-[61rem] xl:mt-10 sm:mt-[-150px]">
                <video src={VIDEO} autoPlay loop muted className="h-full"></video>
            </div>
            <div className="flex flex-col gap-10 sm:mt-[-360px]">
                <div className="flex flex-col gap-16 sm:gap-8">
                    <div className="flex flex-col gap-10 sm:gap-5 xl:pt-10">
                        <span className="text-7xl sm:text-5xl font-semibold font-inter">Branding</span>
                        <span className="text-[#525252] text-3xl sm:text-xl font-semibold font-poppins italic">“Want to Boost Your Business with Marketing, Reels & SEO?”</span>
                        <div className="leading-6 w-11/12">
                            <span className="font-poppins text-xs xl:text-sm sm:text-[0.6rem] tracking-wider sm:tracking-tight text-left">
                                Elevate your brand with dynamic marketing campaigns captivating reels and strategic SEO. Share your ideas, and let’s create something amazing together.
                            </span>
                        </div>
                        
                    </div>
                    <div>
                        <button className="bg-[#222222] text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-9 sm:px-5 py-3 sm:py-1.5">
                            <a href="http://wa.link/0psi4e" className="no-underline">
                                <span>Become our Client</span>
                            </a>    
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 sm:gap-3">
                    <img src={PHOTO1} className="w-[12rem] sm:w-[6rem] sm:h-[6rem]" alt="" />
                    <img src={PHOTO2} className="w-[12rem] sm:w-[6rem] sm:h-[6rem]" alt="" />
                    <img src={PHOTO3} className="w-[12rem] sm:w-[6rem] sm:h-[6rem]" alt="" />
                </div>
            </div>
        </div>
    )
};

export default Branding;