import { useState } from "react";
import { Trash2 } from "lucide-react";
import ProfileImage from "@/assets/Consultant/Profile/01.png"; // replace with actual path

const EditProfile2 = () => {
  const [profileImage, setProfileImage] = useState(ProfileImage);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  const handleSave = () => {
    console.log("Profile saved!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="w-[600px] bg-white rounded-[10px] shadow-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Edit profile Info</h2>

        <div className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[100px] h-[100px] rounded-full object-cover border"
          />

          <div className="flex items-center gap-3 mt-4">
            <label
              htmlFor="upload-image"
              className="cursor-pointer text-[#94278F] border border-[#94278F] px-4 py-[6px] rounded-md text-sm hover:bg-[#94278F] hover:text-white transition"
            >
              Upload new Image
            </label>
            <input
              type="file"
              id="upload-image"
              className="hidden"
              onChange={handleImageChange}
            />

            <button
              type="button"
              onClick={handleDeleteImage}
              className="p-2 border border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            defaultValue="John doe"
            className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Username"
            defaultValue="johndoe123"
            className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Date of Birth"
            defaultValue="24 - 08 - 1997"
            className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm"
            readOnly
          />
          <select className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm text-[#898989]">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Write Personal Statement:"
            maxLength={250}
            className="w-full p-3 border border-[#DCDCDC] rounded-md text-sm h-[100px] resize-none"
          />
          <div className="flex justify-between text-xs text-[#898989]">
            <span></span>
            <span>0/250</span>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={handleSave}
            className="bg-[#94278F] text-white px-6 py-2 rounded-md hover:bg-[#7A206F] transition text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile2;
