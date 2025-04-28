import React, { useState } from "react";
import { UploadCloud, ChevronDown } from "lucide-react";

const CreateOrganisation = () => {
  const [form, setForm] = useState({
    organisationName: "",
    organisationType: "",
    location: "",
    aboutOrganisation: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setForm({ ...form, logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[768px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Create Organisation</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">

          {/* Organisation Name */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Organisation Name</label>
              <input
                type="text"
                name="organisationName"
                value={form.organisationName}
                onChange={handleChange}
                placeholder="Ex: Microsoft"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
              />
            </div>
          </div>

          {/* Organisation Type */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Organisation type</label>
              <div className="relative">
                <input
                  type="text"
                  name="organisationType"
                  value={form.organisationType}
                  onChange={handleChange}
                  placeholder="Please Select"
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
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
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
              />
            </div>
          </div>

          {/* Upload Logo */}
          <div className="flex justify-center">
            <div className="w-full max-w-[530px]">
              <label className="text-sm text-black mb-1 block">Organisation Logo</label>
              <div className="flex flex-col items-center justify-center w-full h-[150px] border-2 border-dashed border-[#DCDCDC] rounded-md cursor-pointer">
                <UploadCloud className="text-[#898989]" size={30} />
                <p className="text-[#898989] mt-2 font-medium text-[15px]">Upload logo</p>
                <p className="text-[#6b7280] text-sm">
                  Drag and drop logo here or{" "}
                  <span className="text-[#94278F] underline cursor-pointer">Browse file</span>
                </p>
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={handleChange}
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* About Organisation */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">About Organisation</label>
              <textarea
                name="aboutOrganisation"
                value={form.aboutOrganisation}
                onChange={handleChange}
                placeholder="Enter Description"
                className="w-full h-[100px] px-4 py-2 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none resize-none"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateOrganisation;
