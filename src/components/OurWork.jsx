import PHOTO from "../assets/b68e712a80f5a4cacc1bb88446011e89.svg";

const OurWork = () => {
    return (
        <div className="pt-32 sm:pt-20 flex flex-col gap-20 sm:gap-10 px-32 sm:px-10">
            <div className="text-4xl sm:text-2xl font-bold">
                <span>Our Works</span>
            </div>
            <div>
                <div>
                    <img src={PHOTO} className="rounded-xl" alt="" />
                </div>
                <div className="pt-10 flex sm:flex-wrap gap-40 sm:gap-9">
                    <div className="flex flex-col gap-6 sm:gap-3">
                        <div className="text-3xl sm:text-2xl font-semibold font-inter">
                            <span>Netmas</span>
                        </div>
                        <div>
                            <ul className="flex flex-wrap gap-2 uppercase text-[0.5rem] sm:text-[0.4rem]">
                                <li className="border border-black rounded-full px-3 sm:px-2 py-2 sm:py-1.5 font-bold">Catalogue website</li>
                                <li className="border border-black rounded-full px-3 sm:px-2 py-2 sm:py-1.5 font-bold">Saas</li>
                                <li className="border border-black rounded-full px-3 sm:px-2 py-2 sm:py-1.5 font-bold">Product design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-base font-semibold font-poppins">
                            <span>Product Design</span>
                        </div>
                        <div className="w-7/12 sm:w-full text-xs">
                            <span>
                                We provide a complete website from design to deployment
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="text-base font-inter font-semibold">
                            <span>User Review</span>
                        </div>
                        <div className="flex gap-2 items-baseline text-xl">
                            <span className="text-4xl">4.6</span>
                            <span>of</span>
                            <span>5</span>
                        </div>
                        
                    </div>
                    <div className="sm:pl-10">
                        <div className="text-base font-inter font-semibold">
                            <span>Client Review</span>
                        </div>
                        <div className="flex gap-2 items-baseline text-xl">
                            <span className="text-4xl">4.8</span>
                            <span>of</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurWork;