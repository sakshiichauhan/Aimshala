import React, { useState } from "react";
import CalendarIcon from '@/assets/Consultant/Calendar.png';
import { ChevronDown } from "lucide-react";

const AddProject = () => {
  const [form, setForm] = useState({
    projectName: "",
    description: "",
    currentlyWorking: false,
    startDate: "",
    endDate: "",
    associatedWith: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#000000]">Add Project</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">

          {/* Project Name */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              placeholder="Ex: World History"
              className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] placeholder-[#898989]"
            />
          </div>

          {/* Description */}
          <div className="relative w-full max-w-[521.81px] mx-auto">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description"
              maxLength={150}
              className="w-full h-[100px] px-4 py-5 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#898989]"
            />
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">{form.description.length}/150</div>
          </div>

          {/* Skills Section */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
            <p className="text-base text-[#6b7175] mb-4">
              We recommend adding your top 5 used in this project. They'll also appear in your Skills section.
            </p>
            <button className="w-[97px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Skill
            </button>
          </div>

          {/* Media Section */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Media</h2>
            <p className="text-base text-[#6b7175] mb-4">
              Add Documents, photos, sites, videos, and presentations.{" "}
              <span className="text-[#94278F] underline cursor-pointer">Learn more about media file types supported</span>
            </p>
            <button className="w-[114px] h-[30px] bg-[#93268F]/10 text-[#93268F] rounded-full text-base font-medium hover:bg-[#e9c6e7] transition">
              + Add Media
            </button>
          </div>

          {/* Additional Details */}
          <div className="w-full max-w-[530px] mx-auto">
            <h2 className="text-lg font-semibold text-black mb-2 mt-2">Additional Details</h2>

            {/* Currently Working */}
            <label className="inline-flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={form.currentlyWorking}
                onChange={handleChange}
                className="w-5 h-5 text-[#94278F] bg-white border border-[#DCDCDC] rounded focus:outline-none"
              />
              <span className="text-[#94278F] text-[15px] font-medium">I am currently working in this project</span>
            </label>

            {/* Start and End Date */}
            <div className="flex justify-between gap-4">
              {[{ label: "Start date", name: "startDate" }, { label: "End date (or expected)", name: "endDate" }].map(
                ({ label, name }) => (
                  <div key={name} className="relative w-full max-w-[260px]">
                    <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">{label}</label>
                    <input
                      type="date"
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px] [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                    <img
                      src={CalendarIcon}
                      alt="Calendar"
                      onClick={() => document.getElementById(name)?.showPicker?.()}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                    />
                  </div>
                )
              )}
            </div>

            {/* Associated With */}
            <div className="relative w-full max-w-[530px] mt-6">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Associated with</label>
              <input
                type="text"
                name="associatedWith"
                value={form.associatedWith}
                onChange={handleChange}
                placeholder="Please Select"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
            </div>
          </div>
        </div>

        {/* Footer Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-[12px]">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-xl font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
