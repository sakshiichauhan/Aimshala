import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const AddLicense = () => {
  const [form, setForm] = useState({
    name: "",
    issuingOrganisation: "",
    issueDate: "",
    expirationDate: "",
    credentialID: "",
    credentialURL: "",
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
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add License or Certification</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">

          {/* Name */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ex: Certified Network Security Associate"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Issuing Organisation */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issuing Organisation</label>
              <div className="relative">
                <input
                  type="text"
                  name="issuingOrganisation"
                  value={form.issuingOrganisation}
                  onChange={handleChange}
                  placeholder="Ex: Microsoft"
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

          {/* Issue Date */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Issue</label>
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

          {/* Expiration Date */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Expiration date</label>
              <div className="relative">
                <input
                  type="date"
                  name="expirationDate"
                  value={form.expirationDate}
                  onChange={handleChange}
                  className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

          {/* Credential ID */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Credential ID</label>
              <input
                type="text"
                name="credentialID"
                value={form.credentialID}
                onChange={handleChange}
                placeholder="Enter Credential ID"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Credential URL */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Credential URL</label>
              <input
                type="text"
                name="credentialURL"
                value={form.credentialURL}
                onChange={handleChange}
                placeholder="Enter Credential URL"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="relative flex justify-center mt-8">
            <div className="w-full max-w-[530px]">
              <h2 className="text-lg font-semibold text-black mb-2">Skills</h2>
              <p className="text-sm text-[#6b7280] mb-4">
                We recommend adding your top 5 used in this experience. They'll also appear in your Skills section.
              </p>
              <button className="w-[170px] h-[46px] bg-[#F8E1F7] text-[#94278F] rounded-[12px] text-sm font-medium hover:bg-[#e9c6e7] transition">
                + Add skill
              </button>
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

export default AddLicense;
