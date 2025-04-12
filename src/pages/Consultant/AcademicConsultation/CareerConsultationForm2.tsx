import { useState } from "react";
import AcademicNew from "../../../assets/Consultant/BecomeConsultant/image2.png";

const areasOfExpertiseList = [
  { key: "streamSelection", label: "Stream Selection" },
  { key: "careerPathGuidance", label: "Career Path Guidance" },
  { key: "collegeSelection", label: "College Selection" },
  { key: "examPreparation", label: "Exam Preparation" },
  { key: "studySkills", label: "Study Skills" },
  { key: "resumeHelp", label: "Resume Help" },
  { key: "interviewPrep", label: "Interview Prep" },
  { key: "studyAbroad", label: "Study Abroad" },
  { key: "peerAndParentalPressure", label: "Peer & Parental Pressure" },
  { key: "workLifeBalance", label: "Work-Life Balance" },
  { key: "confidenceBuilding", label: "Confidence Building" },
];

const targetGroupList = [
  { key: "class5to8", label: "Class 5th-8th" },
  { key: "class9to10", label: "Class 9th-10th" },
  { key: "class11to12", label: "Class 11th-12th" },
  { key: "collegeGraduates", label: "College & Graduates" },
];

const CareerConsultationForm2 = () => {
  const [expertiseTitle, setExpertiseTitle] = useState("");
  const [description, setDescription] = useState("");

  const [areasOfExpertise, setAreasOfExpertise] = useState({
    streamSelection: true,
    careerPathGuidance: true,
    interviewPrep: true,
    studyAbroad: true,
    collegeSelection: false,
    examPreparation: false,
    studySkills: false,
    resumeHelp: true,
    peerAndParentalPressure: true,
    workLifeBalance: true,
    confidenceBuilding: true,
  });

  const [targetGroup, setTargetGroup] = useState({
    class5to8: true,
    class9to10: true,
    class11to12: false,
    collegeGraduates: false,
  });

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
      <div className="w-[791px] bg-white rounded-lg shadow-lg pt-6 pb-8 px-8 flex flex-col gap-6">
        <div className="rounded-[12px] border border-[#E5E7EB] p-4 flex items-center gap-4">
          <img
            src={AcademicNew}
            alt="Academic icon"
            className="w-[68px] h-[68px] rounded-[8px] border border-[#E5E7EB]"
          />
          <div>
            <h1 className="text-[32px] font-semibold leading-8 m-0 mb-3">
              Academic Consultation
            </h1>
            <p className="text-[16px] leading-5 text-[#828282] m-0">
              Help with educational planning
            </p>
          </div>
        </div>

        <div className="relative">
          <label className="absolute -top-2 left-2 bg-white px-1 text-[14px] text-[#000000]">
            Expertise Title
          </label>
          <input
            type="text"
            placeholder="Enter Expertise Title"
            value={expertiseTitle}
            onChange={(e) => setExpertiseTitle(e.target.value)}
            className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 placeholder-[#898989]"
          />
        </div>

        <div className="relative w-[725px] rounded-[8px] border border-[#DCDCDC] pt-[14.5px] pr-[16px] pb-[12px] pl-[16px] flex flex-col gap-2.5">
          <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-black">
            Description
          </label>
          <textarea
            rows="3"
            placeholder="Enter Description about expertise"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={250}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 resize-none placeholder-[#898989]"
          />
          <div className="text-right text-sm text-[#898989]">
            {description.length} / 250
          </div>
        </div>

        <section>
          <h2 className="text-lg font-semibold mb-3">
            Academic Areas of Expertise
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

        <section>
          <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-lg font-semibold">Target Group</h2>
            <div className="text-[16px] font-semibold text-[#787878]">
              Students
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-4">
            {targetGroupList.map(({ key, label }) => (
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
        </section>

        <div className="flex justify-between items-center pt-4">
          <button
            onClick={handleDelete}
            className="text-[#000000] text-[20px] font-medium hover:text-red-700"
          >
            Delete Expertise
          </button>
          <button
            onClick={handleSave}
            className="bg-[#94278F] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#7A206F] transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerConsultationForm2;
