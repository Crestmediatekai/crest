import STAR from "../assets/star.png";

const ClientsReview = () => {
    return (
        <div className="flex flex-col px-60 xl:px-28 sm:px-10 3xl:mt-[-80px] xl:mt-[-350px] py-28 gap-20">
            <div className="flex flex-col gap-3">
                <span className="uppercase sm:text-sm font-inter font-semibold">Clients Reviews</span>
                <span className="text-6xl sm:text-3xl font-inter font-medium">What they say</span>
            </div>
            <div className="flex sm:flex-col gap-40 sm:gap-20">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-52 sm:gap-24">
                        <div>
                            <div className="font-inter flex sm:text-sm items-end gap-1">
                                <span className="text-4xl sm:text-2xl">5.0</span>
                                <span>of</span>
                                <span>5.0</span>
                            </div>
                            <div className="flex">
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                            </div>
                        </div>
                        <div className="font-poppins text-[0.7rem] sm:text-[0.6rem] font-medium w-1/3 leading-[1.2rem] sm:leading-3 tracking-wide">
                            <span>&quot;I was impressed by the accuracy in everything. The guys are working fast and very organized.&quot;</span>
                        </div>
                    </div>
                    <div className="flex gap-32 sm:gap-12 font-inter text-xs sm:text-[0.6rem]">
                        <div>
                            <ul className="flex flex-col gap-2 sm:gap-1 font-light">
                                <li>Quality</li>
                                <li>Schedule</li>
                                <li>Cost</li>
                                <li>Willing to refer</li>
                            </ul>
                        </div>
                        <div className="flex gap-20 sm:gap-14 items-end">
                            <ul className="flex flex-col gap-2 sm:gap-1 font-semibold text-[#222222]">
                                <li>5.0</li>
                                <li>5.0</li>
                                <li>5.0</li>
                                <li>5.0</li>
                            </ul>
                            <div className="pb-4 font-light tracking-wide">
                                <span>Netmas.in</span>                           
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-52 sm:gap-24">
                        <div>
                            <div className="font-inter flex items-end sm:text-sm gap-1">
                                <span className="text-4xl sm:text-2xl">5.0</span>
                                <span>of</span>
                                <span>5.0</span>
                            </div>
                            <div className="flex">
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                                <img src={STAR} className="w-4 sm:w-3" />
                            </div>
                        </div>
                        <div className="font-poppins sm:pl-2 text-[0.7rem] sm:text-[0.6rem] font-medium w-[8rem] sm:w-1/3 leading-[1.2rem] sm:leading-3 tracking-wide">
                            <span>&quot;We were impressed with CrestMediaTekAi organization skills — how they set their timelines and made estimates.&quot;</span>
                        </div>
                    </div>
                    <div className="flex gap-32 sm:gap-12 font-inter text-xs sm:text-[0.6rem]">
                        <div>
                            <ul className="flex flex-col sm:w-[4.5rem] gap-2 sm:gap-1 font-light">
                                <li>Quality</li>
                                <li>Schedule</li>
                                <li>Cost</li>
                                <li>Willing to refer</li>
                            </ul>
                        </div>
                        <div className="flex gap-20 sm:gap-12 items-end">
                            <ul className="flex flex-col gap-2 sm:gap-1 font-semibold text-[#222222]">
                                <li>5.0</li>
                                <li>5.0</li>
                                <li>5.0</li>
                                <li>5.0</li>
                            </ul>
                            <div className="pb-4 font-light tracking-wide text-[0.6rem]">
                                <span>Ashish Khanna-</span>
                                <span>Founder - SecureTechAV Designs</span> 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ClientsReview;