import { useState } from "react";
import Image4 from "../../../assets/Consultant/BecomeConsultant/image4.png";
import Image1 from "../../../assets/Consultant/BecomeConsultant/image1.png";

import Image3 from "../../../assets/Consultant/BecomeConsultant/image3.png";

const areasOfExpertiseList = [
  { key: "streamselection", label: "Stream Selection" },
  { key: "interviewprep", label: "Interview Prep" },
  { key: "careerpathguidance", label: "Career Path Guidance" },
  { key: "studyabroad", label: "Study Abroad" },
  { key: "collegeselection", label: "College Selection" },
  { key: "peerparentalpressure", label: "Peer & Parental Pressure" },
  { key: "exampreparation", label: "Exam Preparation" },
  { key: "worklifebalance", label: "Work-Life Balance" },
  { key: "studyskills", label: "Study Skills" },
  { key: "confidencebuilding", label: "Confidence Building" },
  { key: "resumehelp", label: "Resume Help" },
];

const targetGroupList = [
  { key: "class5to8", label: "Class 5th-8th", category: "student" },
  { key: "class9to10", label: "Class 9th-10th", category: "student" },
  { key: "class11to12", label: "Class 11th-12th", category: "student" },
  {
    key: "collegeGraduates",
    label: "College & Graduates",
    category: "student",
  },
  { key: "professionals", label: "Professionals", category: "professional" },
  { key: "entrepreneurs", label: "Entrepreneurs", category: "professional" },
  { key: "careerChangers", label: "Career changers", category: "professional" },
  { key: "homeMakers", label: "Home Makers", category: "professional" },
];

const AddExpertise = () => {
  const [expertiseTitle, setExpertiseTitle] = useState("");
  const [description, setDescription] = useState("");
  const additionalExpertiseCards = [
    {
      img: Image1,
      title: "Academic Counsellor",
    },
    {
      img: Image3,
      title: "International Study",
    },
    {
      img: Image4,
      title: "Emotional Well-being",
    },
  ];

  const [areasOfExpertise, setAreasOfExpertise] = useState({
    countryselection: true,
    visaapplication: true,
    programselection: true,
    culturaladjustment: true,
    admissionprocess: true,
    careeropportunities: true,
    languageproficiency: true,
    documentation: true,
    financialplanning: true,
    accommodation: true,
  });

  const initialTargetGroup = targetGroupList.reduce(
    (acc, curr) => ({ ...acc, [curr.key]: false }),
    {
      professionals: true,
      entrepreneurs: true,
    }
  );

  const [targetGroup, setTargetGroup] = useState(initialTargetGroup);

  const handleAreaCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAreasOfExpertise((prev) => ({ ...prev, [name]: checked }));
  };

  const handleTargetGroupChange = (e) => {
    const { name, checked } = e.target;
    setTargetGroup((prev) => ({ ...prev, [name]: checked }));
  };

  const handleDelete = () => {
    console.log("Expertise deleted (placeholder).");
  };

  const handleSave = () => {
    const payload = {
      expertiseTitle,
      description,
      areasOfExpertise,
      targetGroup,
    };
    console.log("Saving data:", payload);
  };

  const checkboxClass =
    "appearance-none cursor-pointer w-[21px] h-[21px] rounded-[4px] \
    border-2 border-[#94278F] transition-colors checked:bg-[#FFFFFF] \
    checked:border-[#94278F] relative after:content-[''] after:absolute \
    after:top-[3px] after:left-[7px] after:w-[5px] after:h-[11px] \
    after:border-r-[2px] after:border-b-[2px] after:border-[#94278F] \
    after:rotate-45 after:scale-0 checked:after:scale-100 duration-200 \
    ease-in-out";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-lg">
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center gap-[16px] min-h-[60px] px-6">
          <h1 className="text-lg font-semibold">Add Expertise</h1>
        </div>

        <div className="pt-6 pb-8 px-8 flex flex-col gap-6">
        <div className="relative w-[725px]">
  <label className="absolute -top-2 left-2 bg-white px-1 text-[14px] text-[#000000]">
    Consulting Type
  </label>
  <div className="w-full h-auto pt-[14.5px] pb-[14.5px] px-[16px] border-[1px] border-[#DCDCDC] rounded-[8px] focus:outline-none placeholder-[#898989] font-poppins">
    <div className="grid grid-cols-3 gap-4">
      {additionalExpertiseCards.map(({ img, title }, index) => (
        <div
          key={index}
          className="rounded-[12px] border border-[#E5E7EB] p-4 flex flex-col items-center text-center gap-3"
        >
          <img
            src={img}
            alt={`Expertise ${index + 1}`}
            className="w-[56px] h-[56px] rounded-[8px] border border-[#E5E7EB]"
          />
          <p className="text-[14px] font-semibold text-[#93268F]">{title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

          
          <div className="relative w-[725px]">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[14px] text-[#000000]">
              Expertise Title
            </label>
            <input
              type="text"
              placeholder="Enter Expertise Title"
              value={expertiseTitle}
              onChange={(e) => setExpertiseTitle(e.target.value)}
              className="w-full h-[57px] pt-[14.5px] pb-[14.5px] px-[16px] border-[1px] border-[#DCDCDC] rounded-[8px] focus:outline-none focus:ring-[#94278F]/20 placeholder-[#898989] placeholder:text-[18px] font-poppins"
            />
          </div>

          {/* Input: Description */}
          <div className="relative w-[725px] rounded-[8px] border border-[#DCDCDC] pt-[14.5px] pr-[16px] pb-[12px] pl-[16px] flex flex-col gap-2.5">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[14px] text-[#000000]">
              Description
            </label>
            <textarea
              placeholder="Enter Description about expertise"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={250}
              className="w-full rounded-md focus:outline-none focus:ring-[#94278F]/20 resize-none placeholder-[#898989] placeholder:text-[18px]"
            />
            <div className="text-right text-sm text-[#898989]">
              {description.length} / 250
            </div>
          </div>

          {/* Areas of Expertise */}
          <section>
            <h2 className="text-lg font-semibold mb-3">
              Primary Areas of Expertise
            </h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {areasOfExpertiseList.map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center gap-2 text-[18px] text-[#898989] whitespace-nowrap"
                >
                  <input
                    type="checkbox"
                    name={key}
                    checked={areasOfExpertise[key]}
                    onChange={handleAreaCheckboxChange}
                    className={checkboxClass}
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>

          {/* Target Group */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Target Group</h2>
            <div className="grid grid-cols-2 gap-x-10">
              {/* Students Column */}
              <div>
                <div className="text-[16px] font-semibold text-[#787878] mb-3">
                  Students
                </div>
                <div className="flex flex-col gap-y-4">
                  {targetGroupList
                    .filter((item) => item.category === "student")
                    .map(({ key, label }) => (
                      <label
                        key={key}
                        className="flex items-center gap-2 text-[18px] text-[#898989] whitespace-nowrap"
                      >
                        <input
                          type="checkbox"
                          name={key}
                          checked={targetGroup[key]}
                          onChange={handleTargetGroupChange}
                          className={checkboxClass}
                        />
                        {label}
                      </label>
                    ))}
                </div>
              </div>

              {/* Professionals Column */}
              <div>
                <div className="text-[16px] font-semibold text-[#787878] mb-3">
                  Professionals
                </div>
                <div className="flex flex-col gap-y-4">
                  {targetGroupList
                    .filter((item) => item.category === "professional")
                    .map(({ key, label }) => (
                      <label
                        key={key}
                        className="flex items-center gap-2 text-[18px] text-[#898989] whitespace-nowrap"
                      >
                        <input
                          type="checkbox"
                          name={key}
                          checked={targetGroup[key]}
                          onChange={handleTargetGroupChange}
                          className={checkboxClass}
                        />
                        {label}
                      </label>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-[#F5F5F5] rounded-b-lg flex items-center justify-between px-[24px] py-[16px] w-[791px] h-[78px]">
          <button
            onClick={handleDelete}
            className="text-[#000000] text-[18px] font-medium hover:text-red-700"
          >
            Delete Expertise
          </button>
          <div className="flex gap-[10px]">
            <button
              onClick={handleSave}
              className="w-[170px] h-[46px] bg-[#94278F] text-white text-[20px] rounded-[12px] hover:bg-[#7A206F] transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpertise;
