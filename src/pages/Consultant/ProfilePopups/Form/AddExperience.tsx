import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const AddExperience = () => {
  const [form, setForm] = useState({
    title: "",
    employmentType: "",
    companyName: "",
    location: "",
    locationType: "",
    startDate: "",
    endDate: "",
    description: "",
    profileHeadline: "",
    currentlyWorking: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[768px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Experience</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">

          {/* Title */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Ex: Retail Sales Manager"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* Employment Type */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Employment type</label>
              <div className="relative">
                <input
                  type="text"
                  name="employmentType"
                  value={form.employmentType}
                  onChange={handleChange}
                  placeholder="Please Select"
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

          {/* Company Name */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Company name</label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Ex: Microsoft"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94278F] text-sm cursor-pointer font-medium">Create One</span>
            </div>
          </div>

          {/* Location */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Ex: London, United Kingdom"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Location Type */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Location Type</label>
              <div className="relative">
                <input
                  type="text"
                  name="locationType"
                  value={form.locationType}
                  onChange={handleChange}
                  placeholder="Please Select"
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
              <p className="text-sm text-[#6b7280] mt-1">Pick a location type (ex: remote)</p>
            </div>
          </div>

          {/* Currently Working */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-[530px]">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="currentlyWorking"
                  checked={form.currentlyWorking}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#94278F] bg-white border border-[#DCDCDC] rounded focus:outline-none"
                />
                <span className="text-[#94278F] text-[15px] font-medium">I am currently working in this role</span>
              </label>
            </div>
          </div>

          {/* Start and End Date */}
          <div className="flex justify-center gap-4">
            <div className="relative w-full max-w-[260px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Start date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
            </div>

            <div className="relative w-full max-w-[260px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">End date (or expected)</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
            </div>
          </div>

          {/* Description */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter Description"
                maxLength={150}
                className="w-full h-[100px] px-4 py-2 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] resize-none focus:outline-none"
              />
              <div className="absolute bottom-2 right-4 text-xs text-[#898989]">{form.description.length}/150</div>
            </div>
          </div>

          {/* Profile Headline */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Profile headline</label>
              <input
                type="text"
                name="profileHeadline"
                value={form.profileHeadline}
                onChange={handleChange}
                placeholder="Ex: Senior Manager at Microsoft"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-[530px]">
              <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
              <p className="text-sm text-[#6b7280] mb-4">
                We recommend adding your top 5 used in this experience. They'll also appear in your Skills section.
              </p>
              <button className="w-[170px] h-[46px] bg-[#F8E1F7] text-[#94278F] rounded-[12px] text-sm font-medium hover:bg-[#e9c6e7] transition">
                + Add Skill
              </button>
            </div>
          </div>

          {/* Media */}
          <div className="relative flex justify-center mt-8">
            <div className="w-full max-w-[530px]">
              <h2 className="text-lg font-semibold text-black mb-2">Media</h2>
              <p className="text-sm text-[#6b7280] mb-4">
                Add Documents, photos, sites, videos, and presentations.{" "}
                <span className="text-[#94278F] underline cursor-pointer">
                  Learn more about media file types supported
                </span>
              </p>
              <button className="w-[170px] h-[46px] bg-[#F8E1F7] text-[#94278F] rounded-[12px] text-sm font-medium hover:bg-[#e9c6e7] transition">
                + Add Media
              </button>
            </div>
          </div>

        </div>

        {/* Save Button */}
        <div className="bg-[#F5F5F5] px-8 py-4 flex justify-end rounded-b-lg">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-sm font-medium rounded-[12px] hover:bg-[#7a1d72] transition">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddExperience;
