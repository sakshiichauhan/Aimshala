import React from "react";
import {
  BriefcaseIcon,
  ChartBarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

// Primary Sector Images
import Agriculture from "../../../assets/Consultant/Resources/Primary/image1.jpg";
import Forestry from "../../../assets/Consultant/Resources/Primary/image2.png";
import Mining from "../../../assets/Consultant/Resources/Primary/image3.png";
import OilAndGas from "../../../assets/Consultant/Resources/Primary/image4.png";

// Secondary Sector Images
import Automotive from "../../../assets/Consultant/Resources/Secondary/image1.png";
import Aerospace from "../../../assets/Consultant/Resources/Secondary/image2.png";
import Construction from "../../../assets/Consultant/Resources/Secondary/image3.png";
import Chemical from "../../../assets/Consultant/Resources/Secondary/image4.png";
import Electronics from "../../../assets/Consultant/Resources/Secondary/image5.png";
import Energy from "../../../assets/Consultant/Resources/Secondary/image6.png";
import FoodAndBeverages from "../../../assets/Consultant/Resources/Secondary/image7.png";
import Textiles from "../../../assets/Consultant/Resources/Secondary/image8.png";
import Metallurgy from "../../../assets/Consultant/Resources/Secondary/image9.png";
import Plastics from "../../../assets/Consultant/Resources/Secondary/image10.png";

// Tertiary Sector Images
import Education from "../../../assets/Consultant/Resources/Tertiary/image2.png";
import Tourism from "../../../assets/Consultant/Resources/Tertiary/image2.png";
import IT from "../../../assets/Consultant/Resources/Tertiary/image3.png";
import Media from "../../../assets/Consultant/Resources/Tertiary/image4.png";
import Telecom from "../../../assets/Consultant/Resources/Tertiary/image5.png";
import Retail from "../../../assets/Consultant/Resources/Tertiary/image6.png";
import Transport from "../../../assets/Consultant/Resources/Tertiary/image7.png";
import RealEstate from "../../../assets/Consultant/Resources/Tertiary/image8.png";
import Banking from "../../../assets/Consultant/Resources/Tertiary/image9.png";
import Healthcare from "../../../assets/Consultant/Resources/Tertiary/image9.png";

// Quaternary Sector Images
import Consulting from "../../../assets/Consultant/Resources/Quaternary/image1.png";
import RnD from "../../../assets/Consultant/Resources/Quaternary/image2.png";
import InfoServices from "../../../assets/Consultant/Resources/Quaternary/image3.png";
import EduTech from "../../../assets/Consultant/Resources/Quaternary/image4.png";

// Quinary Sector Images
import Government from "../../../assets/Consultant/Resources/Quinary/image1.png";
import Nonprofit from "../../../assets/Consultant/Resources/Quinary/image2.png";

// Distinct Sector Images
import Agribusiness from "../../../assets/Consultant/Resources/Distinct/image1.png";
import Environment from "../../../assets/Consultant/Resources/Distinct/image2.png";
import Arts from "../../../assets/Consultant/Resources/Distinct/image3.png";
import Sports from "../../../assets/Consultant/Resources/Distinct/image3.png";

const Resources1: React.FC = () => {
  const sectors = [
    {
      title: "Primary Sector (Extraction and Agriculture)",
      items: [
        {
          image: Agriculture,
          title: "Agriculture",
          description: "Farming, crops, livestock",
        },
        { image: Forestry, title: "Forestry", description: "Timber products" },
        { image: Mining, title: "Mining", description: "Coal, gold, minerals" },
        {
          image: OilAndGas,
          title: "Oil & Gas",
          description: "Exploration, drilling",
        },
      ],
    },
    {
      title: "Secondary Sector (Manufacturing and Industry)",
      items: [
        {
          image: Automotive,
          title: "Automotive",
          description: "Vehicles, machinery",
        },
        {
          image: Aerospace,
          title: "Aerospace",
          description: "Aircraft, spacecraft",
        },
        {
          image: Construction,
          title: "Construction",
          description: "Buildings, infrastructure",
        },
        {
          image: Chemical,
          title: "Chemical",
          description: "Industrial chemicals",
        },
        {
          image: Electronics,
          title: "Electronics",
          description: "Devices, circuits",
        },
        { image: Energy, title: "Energy", description: "Power generation" },
        {
          image: FoodAndBeverages,
          title: "Food & Beverages",
          description: "Processing, packaging",
        },
        {
          image: Textiles,
          title: "Textiles",
          description: "Clothing, fabrics",
        },
        {
          image: Metallurgy,
          title: "Metallurgy",
          description: "Metal products",
        },
        {
          image: Plastics,
          title: "Plastics",
          description: "Polymers & plastic products",
        },
      ],
    },
    {
      title: "Tertiary Sector (Services)",
      items: [
        {
          image: Education,
          title: "Education",
          description: "Schools, universities",
        },
        {
          image: Tourism,
          title: "Tourism & Hospitality",
          description: "Hotels, travel",
        },
        {
          image: IT,
          title: "Information Technology",
          description: "Software, IT services",
        },
        {
          image: Media,
          title: "Media & Entertainment",
          description: "Film, TV, music",
        },
        {
          image: Telecom,
          title: "Telecommunications",
          description: "Networks, communication",
        },
        { image: Retail, title: "Retail", description: "Shops, e‑commerce" },
        {
          image: Transport,
          title: "Transportation & Logistics",
          description: "Shipping, freight",
        },
        {
          image: RealEstate,
          title: "Real Estate",
          description: "Property development",
        },
        {
          image: Banking,
          title: "Banking & Finance",
          description: "Banks, investments",
        },
        {
          image: Healthcare,
          title: "Healthcare",
          description: "Hospitals, clinics",
        },
      ],
    },
    {
      title: "Quaternary Sector (Knowledge‑Based)",
      items: [
        {
          image: Consulting,
          title: "Consulting",
          description: "Advisory services",
        },
        { image: RnD, title: "R&D", description: "Innovation, labs" },
        {
          image: InfoServices,
          title: "Info Services",
          description: "Data, analytics",
        },
        {
          image: EduTech,
          title: "EdTech",
          description: "E‑learning platforms",
        },
      ],
    },
    {
      title: "Quinary Sector (High‑Level Decision Making)",
      items: [
        {
          image: Government,
          title: "Government",
          description: "Public administration & policy",
        },
        {
          image: Nonprofit,
          title: "Non‑Profits",
          description: "NGOs, charities, foundations",
        },
      ],
    },
    {
      title: "Distinct Sectors",
      items: [
        {
          image: Agribusiness,
          title: "Agribusiness",
          description: "Agri supply chain & equipment",
        },
        {
          image: Environment,
          title: "Environment",
          description: "NGOs & sustainability groups",
        },
        {
          image: Arts,
          title: "Arts & Culture",
          description: "Museums, galleries & performances",
        },
        {
          image: Sports,
          title: "Sports & Recreation",
          description: "Teams, fitness centers",
        },
      ],
    },
  ];

  return (
    <div className="px-6 sm:px-8 mx-auto font-poppins">
      {/* Resources Header */}
      <div className="w-full min-h-[120px] border border-gray-200 p-6 mb-6 rounded-lg bg-white shadow-sm">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
          Resources
        </h2>
        <p className="text-xl text-gray-600">Help with educational planning.</p>
      </div>

      {/* Main Tabs */}
      <div className="max-w-[1360px] h-[53px] inline-flex bg-white border border-gray-300 rounded-xl shadow-sm mb-8">
        <button className="px-6 h-full flex items-center text-gray-500 text-xl hover:text-gray-700 transition-colors">
          My Resources
        </button>
        <button className="px-6 h-full flex items-center text-[#94278F] font-medium text-xl relative pb-1 border-b-2">
          Career Library
        </button>
        <button className="px-6 h-full flex items-center text-gray-500 text-xl hover:text-gray-700 transition-colors">
          Exams
        </button>
        <button className="px-6 h-full flex items-center text-gray-500 text-xl hover:text-gray-700 transition-colors">
          Scholarship
        </button>
        <button className="px-6 h-full flex items-center text-gray-500 text-xl hover:text-gray-700 transition-colors">
          Colleges
        </button>
      </div>

      {/* Section Title */}
      <div className="flex items-center mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">Career Library</h3>
        <div className="flex-grow ml-4 h-0.5 bg-yellow-400" />
      </div>

      {/* Secondary Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex w-[1010px] h-[56px] border border-gray-300 rounded-full overflow-hidden shadow">
          <button className="flex-1 flex items-center justify-center space-x-2 text-[#94278F] text-[20px] hover:bg-[#94278F] hover:text-white transition-colors duration-200">
            <BriefcaseIcon className="w-8 h-8" />
            <span>Career Cluster</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 text-[#94278F] text-[20px] hover:bg-[#94278F] hover:text-white transition-colors duration-200">
            <ChartBarIcon className="w-8 h-8" />
            <span>Trending Careers</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 text-[#94278F] text-[20px] hover:bg-[#94278F] hover:text-white transition-colors duration-200">
            <AcademicCapIcon className="w-8 h-8" />
            <span>Future Career Prediction</span>
          </button>
        </div>
      </div>

      {sectors.map((sector, i) => {
        const [, main, brackets] =
          sector.title.match(/^([^()]+)(\(.*\))?$/) || [];
        return (
          <section key={i} className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl text-gray-800 whitespace-nowrap">
                <span className="font-semibold">{main?.trim()}</span>
                {brackets && (
                  <span className="font-normal ml-2">{brackets}</span>
                )}
              </h2>
              <div className="flex-grow h-0.5 bg-yellow-400 ml-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              {sector.items.map((item, j) => (
                <div
                  key={j}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Resources1;
