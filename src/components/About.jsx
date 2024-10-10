import PHOTO1 from "../assets/hahash.png";
import PHOTO2 from "../assets/ad.png";
import PHOTO3 from "../assets/s11.png";
import VIDEO from "../assets/vid.mp4";

const About = () => {
    return (
        <div className="pt-32 sm:pt-10 flex sm:flex-col items-center justify-evenly px-60 xl:px-28 sm:px-10 pb-10">
            <div>
                <div className="text-6xl sm:text-3xl font-semibold font-inter w-5/12 pt-20">
                    <span>About CrestMediaTekAi</span>
                </div>

                <div className="w-10/12 sm:w-11/12 text-sm sm:text-[0.6rem] font-inter flex flex-col py-14 sm:py-7 gap-5">
                    <span>
                        If our clients are happy, then so are we. And we put our hearts into collectively
                        creating pivotal pathways for your brand to be seen and heard by the crowd.
                    </span>
                    <span>
                        We collaborate, craft, and capitalize. Share moments of your brand through
                        striking visuals that make one think ‘Is this really just digital?
                    </span>
                </div>

                <div>
                    <button className="bg-[#222222] text-white text-sm sm:text-[0.6rem] font-inter rounded-full px-9 sm:px-5 py-3 sm:py-1 sm:mb-6">
                        <a href="http://wa.link/0psi4e" className="no-underline">
                            <span>Become our Client</span>
                        </a>
                    </button>
                </div>
            </div>
            
            <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                    <img src={PHOTO1} className="w-[17rem] h-[15rem]" alt="" />
                    <video src={VIDEO} autoPlay loop muted className="w-[17rem]"></video>
                </div>
                <div className="flex flex-col gap-3 pt-10">
                    <img src={PHOTO2} className="w-[17rem] h-[10rem]" alt="" />
                    <img src={PHOTO3} className="w-[13rem] h-[20rem]" alt="" />
                </div>
            </div>
        </div>
    )
};

export default About;