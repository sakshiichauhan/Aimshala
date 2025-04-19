import React from "react";
import { Heart } from "lucide-react";
import Agriculture from "../../../assets/Consultant/Resources/TrendingCareers/Image1.png";

const TrendingCareers = () => {
  const careers = [
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
    {
      category: "Agriculture",
      title: "Communications and Online Marketing Coordinator",
      image: Agriculture,
    },
  ];

  return (
    <section className="p-5 font-poppins">
      <div className="flex items-center mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">
          Primary Sector (Extraction and Agriculture)
        </h3>
        <div className="flex-grow ml-4 h-0.5 bg-yellow-400" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {careers.map((career, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-md border border-[#FFFFFF] group
                        ${
                          index === 0
                            ? 'after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[3px] after:bg-[#A855FF]'
                            : ""
                        }`}
          >
            <img
              src={career.image}
              alt={career.title}
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-40
                         transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#FFFFFF]/20 mix-blend-luminosity" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/60 to-transparent" />

            <button
              type="button"
              className="absolute top-4 right-4 z-20 grid h-9 w-9 place-items-center
                         rounded-full bg-white shadow"
            >
              <Heart className="h-4 w-4 fill-[#93268F] stroke-none" />
            </button>

            <div className="relative z-30 p-6">
              <p className="text-[14px] font-semibold text-gray-400">
                {career.category}
              </p>
              <h3 className="mt-2 text-[20px] font-semibold leading-tight text-gray-900">
                {career.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCareers;
