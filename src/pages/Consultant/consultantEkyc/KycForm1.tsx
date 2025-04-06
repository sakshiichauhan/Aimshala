import React, { useState } from "react";
import Kyc1 from "../../../assets/Consultant/ConsulatntEkyc/Kyc1.png";

const KycForm1 = () => {
  const [selectedOption, setSelectedOption] = useState("individual");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white rounded-lg shadow-lg flex w-[972px] h-[682.59px]">
        <div className="w-[587px] h-full p-8 border-r border-[#E5E7EB] flex flex-col justify-center">
          <h1 className="text-[28px] font-bold text-[#1E232C] mb-6 text-center">
            Who you are
          </h1>
          <div className="w-[523px] gap-[16px] mx-auto">
            <div
              className={`flex items-start p-[12px] border-[1px] rounded-[12px] cursor-pointer mb-4 h-[97px] ${
                selectedOption === "individual"
                  ? "border-[#E5E7EB] bg-[#F9F1FA]"
                  : "border-[#E5E7EB]"
              }`}
              onClick={() => handleOptionChange("individual")}
            >
              <input
                type="radio"
                id="individual"
                name="kycType"
                checked={selectedOption === "individual"}
                className="mt-1 mr-[10px] accent-[#94278F]"
                onChange={() => handleOptionChange("individual")}
              />
              <div className="space-y-[10px]">
                <label
                  htmlFor="individual"
                  className="text-[18px] text-[#000000] font-medium"
                >
                  Independent Professional (Individual)
                </label>
                <p className="text-[14px] text-[#787878]">
                  • For individuals working as freelancers or independent
                  consultants.
                  <br />• Submit personal identity documents like Aadhaar, PAN,
                  Bank.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start p-[12px] border rounded-[12px] cursor-pointer h-[139px] ${
                selectedOption === "business"
                  ? "border-[#E5E7EB] bg-[#F9F1FA]"
                  : "border-[#E5E7EB]"
              }`}
              onClick={() => handleOptionChange("business")}
            >
              <input
                type="radio"
                id="business"
                name="kycType"
                checked={selectedOption === "business"}
                className="mt-1 mr-[10px] accent-[#94278F]"
                onChange={() => handleOptionChange("business")}
              />
              <div className="space-y-[10px]">
                <label
                  htmlFor="business"
                  className="text-[18px] text-[#000000] font-medium"
                >
                  Business Representative (Business Entity)
                </label>
                <p className="text-[14px] text-[#787878]">
                  • If you are associated with or represent a registered company
                  or corporate entity.
                  <br />• Submit documents such as Your Aadhaar, Company GST
                  number, company PAN, Company Bank details.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="h-[46PX] w-[108PX] bg-[#94278F] text-white text-lg border-[1px] rounded-[18PX] hover:bg-[#7A206F]">
              Next
            </button>
          </div>
        </div>

        <div className="w-[385px] h-full flex flex-col items-center justify-center pl-8">
          <img
            src={Kyc1}
            alt="KYC Illustration"
            className="w-[208px] h-[208px]"
          />
          <div className="text-[14px] font-poppins font-semibold leading-none tracking-normal text-[#4D4D4D] mt-2 text-center capitalize">
            Data Protection Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm1;
