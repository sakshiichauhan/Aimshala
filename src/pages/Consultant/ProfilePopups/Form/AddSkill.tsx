import React, { useState } from "react";

const AddSkill = () => {
  const [form, setForm] = useState({
    skill: "",
    selectedOptions: [],
    followSkill: false,
  });

  const suggestedSkills = ["Social Media", "Business", "Advertisement", "Marketing", "Sales"];
  const experienceOptions = [
    { id: 1, label: "Senior UI/UX Designer at Alpheric" },
    { id: 2, label: "Senior UI/UX designer at RewardLion" },
    { id: 3, label: "User Experience Designer at Kadritech" },
  ];
  const educationOptions = ["Tilak Raj Chadha Institute of Management & Technology"];
  const licensesOptions = ["UI/UX design"];
  const projectsOptions = ["Beauty Club Platform / UI/UX Design of Mobile & Website"];
  const coursesOptions = ["UI/UX design"];
  const honorsOptions = ["UI/UX design award"];

  const handleCheckboxChange = (label) => {
    if (form.selectedOptions.includes(label)) {
      setForm((prev) => ({
        ...prev,
        selectedOptions: prev.selectedOptions.filter((item) => item !== label),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        selectedOptions: [...prev.selectedOptions, label],
      }));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins p-4">
      <div className="w-[768px] bg-white rounded-lg shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center min-h-[60px] px-6">
          <h1 className="text-2xl font-semibold text-[#1C1C1C]">Add Skill</h1>
        </div>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">

          {/* Skill Input */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[530px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">Skill</label>
              <input
                type="text"
                name="skill"
                value={form.skill}
                onChange={(e) => setForm({ ...form, skill: e.target.value })}
                placeholder="Ex: Retail Sales Manager"
                className="w-full h-[68px] px-4 border border-[#DCDCDC] rounded-md text-[16px] text-[#898989] focus:outline-none"
              />
            </div>
          </div>

          {/* Suggested based on your profile */}
          <div className="flex justify-center">
            <div className="w-full max-w-[530px] space-y-2">
              <h2 className="text-sm text-black font-medium">Suggested based on your profile</h2>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#F5F5F5] text-[#6b7280] text-sm px-3 py-1 rounded-full cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Show where you used this skill */}
          <div className="flex justify-center">
            <div className="w-full max-w-[530px] space-y-4">
              <h2 className="text-xl font-semibold text-black">Show us where you used this skill</h2>
              <p className="text-sm text-[#6b7280]">
                75% of hirers value skill context. Select at least one item to show where you used this skill.
              </p>

              {/* Experience */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1C1C1C]">Experience</h3>
                {experienceOptions.map((option) => (
                  <label key={option.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.selectedOptions.includes(option.label)}
                      onChange={() => handleCheckboxChange(option.label)}
                      className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                    />
                    <span className="text-[#6b7280]">{option.label}</span>
                  </label>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1C1C1C]">Education</h3>
                {educationOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                    />
                    <span className="text-[#6b7280]">{option}</span>
                  </label>
                ))}
              </div>

              {/* Licenses & Certifications */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1C1C1C]">Licenses & certifications</h3>
                {licensesOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                    />
                    <span className="text-[#6b7280]">{option}</span>
                  </label>
                ))}
              </div>

              {/* Projects */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1C1C1C]">Projects</h3>
                {projectsOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                    />
                    <span className="text-[#6b7280]">{option}</span>
                  </label>
                ))}
              </div>

              {/* Courses */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1C1C1C]">Courses</h3>
                {coursesOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                    />
                    <span className="text-[#6b7280]">{option}</span>
                  </label>
                ))}
              </div>

              {/* Honors & Awards */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#1C1C1C]">Honors & awards</h3>
                {honorsOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                    />
                    <span className="text-[#6b7280]">{option}</span>
                  </label>
                ))}
              </div>

              {/* Follow skill */}
              <div className="space-y-2 pt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="followSkill"
                    checked={form.followSkill}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-[#94278F] border-[#DCDCDC] rounded focus:outline-none"
                  />
                  <span className="text-[#6b7280]">Follow this skill to keep up with relevant content.</span>
                </label>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddSkill;
