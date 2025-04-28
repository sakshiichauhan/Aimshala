import React, { useState } from "react";
import { ArrowLeft, X } from "lucide-react";

const AddMedia = () => {
  const [form, setForm] = useState({
    school: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 w-[400px]">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <ArrowLeft className="text-[#1C1C1C]" size={24} />
            <h1 className="text-xl font-semibold text-[#1C1C1C]">Add media</h1>
          </div>
          <X className="text-[#1C1C1C]" size={24} />
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* School Input */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">School</label>
            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              placeholder="Ex: Boston University"
              className="w-full h-[56px] px-4 border border-[#DCDCDC] rounded-md text-[15px] text-[#898989] focus:outline-none"
            />
          </div>

          {/* Description Input */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="w-full h-[80px] px-4 py-2 border border-[#DCDCDC] rounded-md text-[15px] text-[#898989] resize-none focus:outline-none"
            />
          </div>

          {/* Media Preview */}
          <div className="flex justify-center">
            <img
              src="https://i.postimg.cc/KY1cvCgD/certificate-sample.png" // Replace this with your real certificate URL
              alt="Certificate"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button className="w-full h-[48px] bg-[#94278F] text-white rounded-[12px] font-medium text-lg hover:bg-[#7a1d72] transition">
              Save
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddMedia;
