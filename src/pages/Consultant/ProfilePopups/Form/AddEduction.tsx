import React, { useState } from "react";
import { Calendar } from "lucide-react";

const AddEducation = () => {
  const [form, setForm] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    activities: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[791px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Education</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">
          {/* School */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">School</label>
              <input
                type="text"
                name="school"
                value={form.school}
                onChange={handleChange}
                placeholder="Ex: Boston University"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* Degree */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Degree</label>
              <input
                type="text"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                placeholder="Ex: Bachelor's"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* Field of Study */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Field of study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={form.fieldOfStudy}
                onChange={handleChange}
                placeholder="Ex: Business"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* Start Date and End Date */}
          <div className="flex justify-center gap-4">
            <div className="relative w-full max-w-[260px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Start date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
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
                className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
            </div>
          </div>

          {/* Grade */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Grade</label>
              <input
                type="text"
                name="grade"
                value={form.grade}
                onChange={handleChange}
                placeholder="Enter Grade"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
            </div>
          </div>

          {/* Activities */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Activities and societies</label>
              <input
                type="text"
                name="activities"
                value={form.activities}
                onChange={handleChange}
                placeholder="Enter Activities and societies"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px]"
              />
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
                className="w-full h-[100px] px-4 py-2 border border-[#DCDCDC] rounded-md focus:outline-none text-[#898989] text-[16px] resize-none"
              />
              <div className="absolute bottom-2 right-4 text-xs text-[#898989]">{form.description.length}/150</div>
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

export default AddEducation;
