import INTRO from "../assets/intro.png";
import IMG1 from "../assets/85b7aa05ecd6e4a875ee2374f82f65f6.svg";
import IMG2 from "../assets/search-line.png";
import IMG3 from "../assets/node-tree.png";
import IMG4 from "../assets/table-fill.png";
import IMG5 from "../assets/bar-chart-fill.png";
import LottieAnimation from "./LottieAnimation";

const Intro =   () => {
    return (
        <div className="px-28 sm:px-3 pt-20">
            <div className="flex gap-20 sm:gap-20 sm:flex-col items-center">
                {/* <div>
                    <img src={INTRO} className="w-10/12 sm:w-10/12" alt="" />
                </div> */}
                <div className="hero-left">
        <LottieAnimation />
      </div>
                <div className="text-6xl sm:text-3xl font-semibold w-7/12 sm:w-10/12 pb-12">
                    <span>Transforming ideas into interactive realities.</span>
                </div>
            </div>
            <div className="pt-20 sm:pt-2 flex sm:flex-col gap-44">
                <div className="pl-12 sm:pl-8 flex flex-wrap sm:flex-col w-5/12 sm:gap-10 sm:w-full">
                    <div className="flex flex-col gap-3">
                        <div className="text-3xl sm:text-xl font-semibold">
                            <span className="font-inter">UI DESIGN</span>
                        </div>
                        <div>
                            <ul className="flex flex-wrap gap-2 uppercase text-[0.55rem] sm:text-[0.4rem]">
                                <li className="border border-black rounded-full px-2 py-1 font-bold">User survey & results analysis</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Concept validation</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Usability testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">A/B testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Results Report</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Improvements Implementation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="text-3xl font-semibold sm:text-xl">
                            <span className="font-inter">WEBSITES</span>
                        </div>
                        <div>
                            <ul className="flex flex-wrap gap-2 uppercase text-[0.55rem] sm:text-[0.4rem]">
                                <li className="border border-black rounded-full px-2 py-1 font-bold">User survey & results analysis</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Concept validation</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Usability testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">A/B testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Results Report</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Improvements Implementation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="text-3xl font-semibold sm:text-xl">
                            <span className="font-inter">BRANDING</span>
                        </div>
                        <div>
                            <ul className="flex flex-wrap gap-2 uppercase text-[0.55rem] sm:text-[0.4rem]">
                                <li className="border border-black rounded-full px-2 py-1 font-bold">User survey & results analysis</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Concept validation</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Usability testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">A/B testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Results Report</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Improvements Implementation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="text-3xl font-semibold sm:text-xl">
                            <span className="font-inter">CONTENT CREATION</span>
                        </div>
                        <div>
                            <ul className="flex flex-wrap gap-2 uppercase text-[0.55rem] sm:text-[0.4rem]">
                                <li className="border border-black rounded-full px-2 py-1 font-bold">User survey & results analysis</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Concept validation</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Usability testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">A/B testing</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Results Report</li>
                                <li className="border border-black rounded-full px-2 py-1 font-bold">Improvements Implementation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-20 w-4/12 sm:w-11/12 sm:pl-8">
                    <div>
                        <div className="flex gap-2">
                            <img src={IMG1} className="w-6 h-6 mt-1 sm:w-5" alt="" />
                            <span className="font-bold">Discovery</span>
                        </div>
                        <div className="pl-8 text-sm sm:text-xs">
                            <span>
                                This stage enables us to gain an initial understanding of the
                                project and business objectives. It involves reviewing initial data,
                                conducting stakeholder interviews.
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2.5">
                            <img src={IMG2} className="w-5 h-5 mt-1 sm:mt-0.5 sm:w-5" alt="" />
                            <span className="font-bold">Research</span>
                        </div>
                        <div className="pl-8 text-sm sm:text-xs">
                            <span>
                                This stage helps to get insights into the product, conducting
                                market research, analyzing the competitors, identifying users&apos;
                                pain points, and determining the analysis plan.
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <img src={IMG3} className="w-5 h-5 mt-1 sm:w-5" alt="" />
                            <span className="font-bold">Analysis</span>
                        </div>
                        <div className="pl-8 text-sm sm:text-xs">
                            <span>
                                This step involves applying design thinking to structure the
                                project. It's akin to piecing together a puzzle, transforming
                                unclear assumptions into a cohesive and comprehensive picture.
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <img src={IMG4} className="w-4 h-4 mt-1 sm:w-4 sm:h-4" alt="" />
                            <span className="font-bold">Implementation</span>
                        </div>
                        <div className="pl-8 text-sm sm:text-xs">
                            <span>
                                At this stage, we bring the design to life by creating the visual
                                components of the interface. Building on the established UX
                                principles, we ensure the interface is not only user-friendly but
                                also boasts a contemporary and aesthetically pleasing UI.
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <img src={IMG5} className="w-5 h-5 pt-1 sm:w-5" alt="" />
                            <span className="font-bold">Validation</span>
                        </div>
                        <div className="pl-8 text-sm sm:text-xs">
                            <span>
                                We recommend to our clients the inclusion of validation and
                                user testing services. This approach strengthens the usability of
                                the product and enhances its competitiveness in the market.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Intro;