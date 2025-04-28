import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AddCourse = () => {
  const [form, setForm] = useState({
    courseName: "",
    courseNumber: "",
    associatedWith: "",
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
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Course</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">

          {/* Course Name */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Course name</label>
              <input
                type="text"
                name="courseName"
                value={form.courseName}
                onChange={handleChange}
                placeholder="Ex: World History"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
              />
            </div>
          </div>

          {/* Course Number */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Number</label>
              <input
                type="text"
                name="courseNumber"
                value={form.courseNumber}
                onChange={handleChange}
                placeholder="Ex: HIS101"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
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
                  className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#898989]" size={20} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddCourse;
