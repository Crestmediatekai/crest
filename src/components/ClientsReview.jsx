import React, { useState, useEffect } from 'react';
import STAR from "../assets/star.png";

const reviews = [
    {
        rating: 5.0,
        comment: "I was impressed by the accuracy in everything. The guys are working fast and very organized.",
        metrics: {
            Quality: 5.0,
            Schedule: 5.0,
            Cost: 5.0,
            WillingToRefer: 5.0
        },
        client: "Netmas.in"
    },
    {
        rating: 5.0,
        comment: "We were impressed with CrestMediaTekAi organization skills — how they set their timelines and made estimates.",
        metrics: {
            Quality: 5.0,
            Schedule: 5.0,
            Cost: 5.0,
            WillingToRefer: 5.0
        },
        client: "Ashish Khanna",
        position: "Founder - SecureTechAV Designs"
    },
    {
        rating: 5.0,
        comment: "CrestMediaTekAi transformed our e-commerce vision into reality. The user-friendly interface boosted our sales significantly!",
        metrics: {
            Quality: 5.0,
            Schedule: 4.9,
            Cost: 4.9,
            WillingToRefer: 5.0
        },
        client: "Sukheshi Dhawan",
        position: "Founder - Amaarah"
    },
    {
        rating: 4.9,
        comment: "The innovative approach to our educational platform was remarkable. Udaan has truly taken flight thanks to CrestMediaTekAi!",
        metrics: {
            Quality: 5.0,
            Schedule: 4.8,
            Cost: 4.9,
            WillingToRefer: 5.0
        },
        client: "Mridula",
        position: "Project Lead - Udaan"
    },
    {
        rating: 5.0,
        comment: "CrestMediaTekAi's expertise in B2B web portals is unmatched. They delivered a solution that streamlined our operations tremendously.",
        metrics: {
            Quality: 5.0,
            Schedule: 5.0,
            Cost: 4.9,
            WillingToRefer: 5.0
        },
        client: "Mayank",
        position: "CTO - TechMills India"
    }
];

const ClientsReview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col px-60 xl:px-28 sm:px-10 3xl:mt-[-80px] xl:mt-[-350px] py-28 gap-20">
            <div className="flex flex-col gap-3">
                <span className="uppercase sm:text-sm font-inter font-semibold">Clients Reviews</span>
                <span className="text-6xl sm:text-3xl font-inter font-medium">What they say</span>
            </div>
            <div className="flex sm:flex-col gap-40 sm:gap-20">
                <ReviewCard review={reviews[currentIndex]} />
                {reviews[(currentIndex + 1) % reviews.length] && (
                    <ReviewCard review={reviews[(currentIndex + 1) % reviews.length]} />
                )}
            </div>
            <div className="flex justify-center gap-2">
                {reviews.map((_, index) => (
                    index % 2 === 0 && (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    )
                ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ review }) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-52 sm:gap-24">
                <div>
                    <div className="font-inter flex sm:text-sm items-end gap-1">
                        <span className="text-4xl sm:text-2xl">{review.rating.toFixed(1)}</span>
                        <span>of</span>
                        <span>5.0</span>
                    </div>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src={STAR} className="w-4 sm:w-3" alt="star" />
                        ))}
                    </div>
                </div>
                <div className="font-poppins text-[0.7rem] sm:text-[0.6rem] font-medium w-1/3 leading-[1.2rem] sm:leading-3 tracking-wide">
                    <span>&quot;{review.comment}&quot;</span>
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
                        {Object.values(review.metrics).map((value, index) => (
                            <li key={index}>{value.toFixed(1)}</li>
                        ))}
                    </ul>
                    <div className="pb-4 font-light tracking-wide">
                        <span>{review.client}</span>
                        {review.position && <span className="block text-[0.6rem]">{review.position}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsReview;