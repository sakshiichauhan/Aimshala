import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const AddHonors = () => {
  const [form, setForm] = useState({
    title: "",
    associatedWith: "",
    issuer: "",
    issueDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[768px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Honors & Awards</h1>
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
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Associated With */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Associated with</label>
              <div className="relative">
                <input
                  type="text"
                  name="associatedWith"
                  value={form.associatedWith}
                  onChange={handleChange}
                  placeholder="Please Select"
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

          {/* Issuer */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issuer</label>
              <input
                type="text"
                name="issuer"
                value={form.issuer}
                onChange={handleChange}
                placeholder="Ex: Microsoft"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Issue Date */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issue date</label>
              <div className="relative">
                <input
                  type="date"
                  name="issueDate"
                  value={form.issueDate}
                  onChange={handleChange}
                  className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
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

          {/* Media Section */}
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
      </div>
    </div>
  );
};

export default AddHonors;
