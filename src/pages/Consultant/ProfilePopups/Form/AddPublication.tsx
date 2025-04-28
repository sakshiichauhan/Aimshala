import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const AddPublication = () => {
  const [form, setForm] = useState({
    title: "",
    publisher: "",
    publicationDate: "",
    publicationURL: "",
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
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Publication</h1>
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
                placeholder="Ex: Giving and receiving feedback"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
              />
            </div>
          </div>

          {/* Publication/Publisher */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Publication/Publisher</label>
              <div className="relative">
                <input
                  type="text"
                  name="publisher"
                  value={form.publisher}
                  onChange={handleChange}
                  placeholder="Ex: Harvard Business Review"
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

          {/* Publication Date */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Publication date</label>
              <div className="relative">
                <input
                  type="date"
                  name="publicationDate"
                  value={form.publicationDate}
                  onChange={handleChange}
                  className="w-full h-[68px] px-4 pr-10 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

          {/* Publication URL */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Publication URL</label>
              <input
                type="text"
                name="publicationURL"
                value={form.publicationURL}
                onChange={handleChange}
                placeholder="Enter Publication URL"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] focus:outline-none"
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
                maxLength={2000}
                className="w-full h-[120px] px-4 py-2 border border-[#DCDCDC] rounded-md text-[#898989] text-[16px] resize-none focus:outline-none"
              />
              <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
                {form.description.length}/2,000
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddPublication;
