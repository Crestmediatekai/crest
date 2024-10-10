import PHOTO1 from "../assets/amaarah.jpg";
import PHOTO2 from "../assets/amplux.png";
import PHOTO3 from "../assets/netmas.png";
import PHOTO4 from "../assets/securetech.png";

const OurClients = () => {
    return (
        <div className="px-60 xl:px-28 sm:px-10 py-20">
            <div className="flex flex-col gap-5 sm:gap-2 pb-10">
                <span className="font-inter uppercase text-xs sm:text-[0.6rem] font-semibold">We made design for</span>
                <span className="text-5xl sm:text-3xl font-bold font-inter">Our clients</span>
                <span className="font-inter text-[0.6rem] sm:text-[0.55rem] w-1/4 sm:w-full">
                    We are working with a diverse range of clients, spanning
                    from globally renowned entities with millions of users to
                    innovative startups seeking for MVP design solutions.
                </span>
            </div>
            <div className="flex gap-72 sm:gap-20 sm:flex-col">
                <div className="flex flex-col gap-40 sm:gap-24">
                    <div className="flex gap-40 sm:gap-28">
                        <img src={PHOTO2} className="w-[6rem]" alt="" />
                        <img src={PHOTO3} className="w-[5rem]" alt="" />
                    </div>
                    <div className="flex gap-40 sm:gap-32">
                        <img src={PHOTO4} className="w-[5.5rem]" alt="" />
                        <img src={PHOTO1} className="w-[4.5rem] h-[4.5rem]" alt="" />
                    </div>
                </div>
                <div className="w-2/6 xl:w-5/6 sm:w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-5 sm:gap-2">
                        <div className="text-3xl sm:text-xl font-bold font-inter">
                            <span>Business domains</span>
                        </div>
                        <div className="text-[0.8rem] sm:text-[0.6rem] sm:pr-3">
                            <span>
                                We boast extensive experience with products and projects
                                across various business niches, including:
                            </span>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-wrap uppercase gap-2 text-[0.55rem] font-medium">
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Cables</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Tech</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Jewellery</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Medicine</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Healthcare & Fitness</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Digital</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">E-commerce</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Designs</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Business</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Apparel</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Fashion</li>
                            <li className="border border-black rounded-full px-6 sm:px-3 py-2.5 sm:py-1.5">Edtech</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )   
};

export default OurClients;