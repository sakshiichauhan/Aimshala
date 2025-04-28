import React, { useState } from "react";
import ProfileImage from "../../../assets/Consultant/BecomeConsultant/image1.png";
import { Camera, Trash2 } from "lucide-react";
import Img1 from "../../../assets/Consultant/Profile/01.png";
import Img2 from "../../../assets/Consultant/Profile/02.png";
import Img3 from "../../../assets/Consultant/Profile/03.png";
import Img4 from "../../../assets/Consultant/Profile/04.png";
import Img5 from "../../../assets/Consultant/Profile/05.png";
import Img6 from "../../../assets/Consultant/Profile/06.png";
import Img7 from "../../../assets/Consultant/Profile/07.png";
import Img8 from "../../../assets/Consultant/Profile/08.png";
import Img9 from "../../../assets/Consultant/Profile/09.png";
import Img10 from "../../../assets/Consultant/Profile/10.png";
import Img11 from "../../../assets/Consultant/Profile/11.png";
import Img12 from "../../../assets/Consultant/Profile/12.png";
import Img13 from "../../../assets/Consultant/Profile/13.png";
import Img14 from "../../../assets/Consultant/Profile/14.png";

const imageList = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
];

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(ProfileImage);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [activeImage, setActiveImage] = useState(ProfileImage);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        setProfileImage(imageData);
        setActiveImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    setActiveImage(avatar);
    setProfileImage(avatar);
  };

  const handleSave = () => {
    console.log("Profile saved!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="w-[791px] bg-white rounded-lg shadow-lg">
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center gap-[16px] min-h-[60px] px-6">
          <h1 className="text-lg font-semibold">Edit Expertise</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Profile Image */}
          <div className="w-[727px] h-[256px] border border-[#DCDCDC] rounded-[8px] pt-[14.5px] px-4 flex flex-col justify-center items-center gap-4 mx-auto mb-6 bg-white">
            <p className="text-gray-500 text-sm">Current Image</p>

            <div className="relative">
              <img
                src={activeImage}
                alt="Profile"
                className="h-[120px] w-[120px] rounded-full object-cover border border-gray-300 shadow"
              />
            </div>

            <div className="flex gap-4 mt-2">
              <div className="relative">
                <label htmlFor="upload-input">
                  <div className="px-5 py-2 border border-[#7A206F] text-[#7A206F] rounded-lg hover:bg-[#7A206F] hover:text-white transition cursor-pointer">
                    Upload new Image
                  </div>
                </label>
                <input
                  type="file"
                  id="upload-input"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <button
                onClick={() => {
                  setActiveImage(ProfileImage);
                  setProfileImage(ProfileImage);
                  setSelectedAvatar(null);
                }}
                className="p-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>

          {/* Image Selection Section */}
          <div
            className="w-[727px] p-[14.5px_16px] border border-gray-300 rounded-[8px]"
            style={{ height: "fit-content" }}
          >
            <p className="font-medium mb-2 text-sm text-center text-[#898989]">
              Choose Image
            </p>
            <div className="grid grid-cols-7 gap-[5px]">
              {imageList.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index + 1}`}
                  onClick={() => handleAvatarClick(img)}
                  className={`w-[80px] h-[80px] rounded-full object-cover cursor-pointer border transition ${
                    activeImage === img
                      ? "border-[#94278F] ring-2 ring-[#94278F]"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20"
            />
          </div>
          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full">
              <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20 text-[#898989]"
              />
            </div>
            <div className="relative w-full">
              <label className="absolute -top-2 left-2 bg-white px-1.5 text-sm text-[#000000]">
                Gender
              </label>
              <select className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20 text-[#898989]">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Headline
            </label>
            <input
              type="text"
              placeholder="Enter Headline"
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus-[#94278F]/20"
            />
          </div>
          <div className="relative w-full">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Bio/About you
            </label>
            <textarea
              placeholder="Enter Bio/About you"
              maxLength={250}
              className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm resize-none h-[111px] focus:outline-none focus:ring-2 focus-[#94278F]/20"
            />
          </div>

          {/* Intro Video Upload */}
          <div>
            <p className="text-sm font-medium">Intro Video</p>
            <p className="text-xs text-gray-500 mb-1">
              Upload a Short Intro Video (3–5 minutes)
            </p>
            <div className="w-[140px] h-[36px] bg-[#F5E9F4] text-[#94278F] rounded-full text-sm font-medium flex items-center justify-center cursor-pointer">
              + Add Media
            </div>
          </div>

          {/* Save Button */}
         <div className="flex justify-end">
  <button 
    type="button"
    onClick={handleSave}
    className="w-[170px] bg-[#94278F] hover:bg-[#7A206F] text-white py-2 rounded-md text-sm mt-2"
  >
    Save
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
