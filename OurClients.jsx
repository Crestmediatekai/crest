import React from 'react';
import PHOTO1 from "../assets/amaarah.jpg";
import PHOTO2 from "../assets/amplux.png";
import PHOTO3 from "../assets/netmas.png";
import PHOTO4 from "../assets/securetech.png";
import TECH from "../assets/tech.jpg";
import UDAAN from "../assets/udaan.png";

const OurClients = () => {
    const clients = [
        { src: PHOTO2, alt: "Amplux logo", className: "w-24 h-auto" },
        { src: PHOTO3, alt: "Netmas logo", className: "w-20 h-auto" },
        { src: TECH, alt: "Tech logo", className: "w-28 h-auto" },
        { src: PHOTO4, alt: "Securetech logo", className: "w-22 h-auto" },
        { src: PHOTO1, alt: "Amaarah logo", className: "w-18 h-18" },
        { src: UDAAN, alt: "Udaan logo", className: "w-28 h-auto" },
    ];

    const businessDomains = [
        "Cables", "Tech", "Jewellery", "Medicine", "Healthcare & Fitness",
        "Digital", "E-commerce", "Designs", "Business", "Apparel",
        "Fashion", "Edtech", "Software", "Startups"
    ];

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 py-12 md:py-20">
            <div className="flex flex-col gap-3 md:gap-5 pb-8 md:pb-10">
                <span className="font-inter uppercase text-xs font-semibold">We made design for</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter">Our clients</h2>
                <p className="font-inter text-sm md:text-base lg:w-3/4 xl:w-1/2">
                    We are working with a diverse range of clients, spanning
                    from globally renowned entities with millions of users to
                    innovative startups seeking for MVP design solutions.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                        {clients.map((client, index) => (
                            <img key={index} src={client.src} className={client.className} alt={client.alt} />
                        ))}
                    </div>
                </div>
                <div className="lg:w-2/5 flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl md:text-3xl font-bold font-inter">Business domains</h3>
                        <p className="text-sm md:text-base">
                            We boast extensive experience with products and projects
                            across various business niches, including:
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap gap-2 text-xs font-medium">
                            {businessDomains.map((domain, index) => (
                                <li key={index} className="border border-black rounded-full px-3 py-1.5 uppercase">
                                    {domain}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;