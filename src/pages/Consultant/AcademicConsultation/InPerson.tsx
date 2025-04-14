import React, { useState } from "react";
import { MapPin } from 'lucide-react';

const InPerson = () => {
  const [availability, setAvailability] = useState("acceptBookings");
  const [pricingOption, setPricingOption] = useState("fixedPrice");
  const [callDuration, setCallDuration] = useState("60");
  const [haveTimeExtension, setHaveTimeExtension] = useState(true);

  const checkboxClass =
  "appearance-none cursor-pointer w-[21px] h-[21px] rounded-[4px] \
  border-2 border-[#94278F] transition-colors checked:bg-[#FFFFFF] \
  checked:border-[#94278F] relative after:content-[''] after:absolute \
  after:top-[3px] after:left-[7px] after:w-[5px] after:h-[11px] \
  after:border-r-[2px] after:border-b-[2px] after:border-[#94278F] \
  after:rotate-45 after:scale-0 checked:after:scale-100 duration-200 \
  ease-in-out";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] font-poppins">
      <div className="w-full max-w-[791px] bg-white rounded-lg shadow-lg">
        <div className="bg-[#F5F5F5]/50 rounded-t-lg flex items-center gap-4 min-h-[60px] px-6">
          <MapPin className="w-9 h-9 text-black" />
          <h1 className="text-lg font-semibold">In-Person</h1>
        </div>

        <div className="p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3 text-[#898989] text-[18px]">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="availability"
                value="acceptBookings"
                checked={availability === "acceptBookings"}
                onChange={(e) => setAvailability(e.target.value)}
                className="accent-[#94278F] w-[20px] h-[20px]"
              />
              Accept bookings as per my availability.
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="availability"
                value="manualRequests"
                checked={availability === "manualRequests"}
                onChange={(e) => setAvailability(e.target.value)}
                className="accent-[#94278F] w-[20px] h-[20px]"
              />
              I will take requests and share my time manually.
            </label>
          </div>

          <div className="w-full max-w-[480px]">
            <h2 className="text-[16px] font-semibold mb-2 text-[#000000]">
              Call Duration (In Minutes)
            </h2>
            <div className="flex gap-[10px]">
              {["30", "45", "60"].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setCallDuration(duration)}
                  className={`w-[129px] h-[43px] flex items-center justify-center rounded-[40px] border text-[18px] transition-all duration-200 ease-in-out rotate-[-0.28deg] ${
                    callDuration === duration
                      ? "border-[#94278F] text-[#94278F] bg-white"
                      : "border-[#DCDCDC] text-[#000000] bg-white"
                  }`}
                >
                  {duration} Minutes
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 text-[#898989] text-[18px]">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="pricingOption"
                value="fixedPrice"
                checked={pricingOption === "fixedPrice"}
                onChange={(e) => setPricingOption(e.target.value)}
                className="accent-[#94278F] w-[20px] h-[20px]"
              />
              Set a fixed price for sessions.
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="pricingOption"
                value="quoteManually"
                checked={pricingOption === "quoteManually"}
                onChange={(e) => setPricingOption(e.target.value)}
                className="accent-[#94278F] w-[20px] h-[20px]"
              />
              I will quote prices manually.
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                Price (₹)
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                className="w-full p-[14px] border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[18px] placeholder-[#898989]"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                Discounted Price (₹)
              </label>
              <input
                type="text"
                placeholder="Enter Discounted Price"
                className="w-full p-[14px] border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[18px] placeholder-[#898989]"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 text-[#000000] text-[18px] mb-2">
              <input
                type="checkbox"
                checked={haveTimeExtension}
                onChange={(e) => setHaveTimeExtension(e.target.checked)}
                className={checkboxClass}
              />
              Have Time Extension
            </label>

            {haveTimeExtension && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="relative">
                  <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                    Time Extension
                  </label>
                  <select className="w-full p-[14px] border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#94278F]/20">
                    <option>Please Select</option>
                    <option>15 Minutes</option>
                    <option>30 Minutes</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                    Time Extension Price (₹)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Time Extension Price"
                    className="w-full p-[14px] border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[18px] placeholder-[#898989]"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[14px] text-[#000000]">
                Buffer Time (Idle time between 2 consecutive sessions)
              </label>
              <select className="w-full p-[14px] border border-[#DCDCDC] rounded-md text-[#898989] text-[18px] focus:outline-none  focus:ring-[#94278F]/20">
                <option>Please Select</option>
                <option>5 Minutes</option>
                <option>10 Minutes</option>
                <option>15 Minutes</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center  px-[24px] py-[16px] w-[791px] h-[78px]  min-h-[60px]">
          <div className="w-full flex justify-center items-center gap-[10px]">
            <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-[20px] rounded-[12px] hover:bg-[#7A206F] transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPerson;
