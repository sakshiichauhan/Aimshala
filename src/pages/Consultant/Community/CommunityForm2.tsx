import React, { useState } from "react";
import { Link, Upload } from "lucide-react";

const CommunityForm2 = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[white] font-poppins">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg">
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center px-6 py-4">
          <h1 className="text-lg font-semibold">Add Question</h1>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Categories */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Categories
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            >
              <option value="">Choose categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>

          {/* Title */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Title
            </label>
            <input
              type="text"
              placeholder="Type catching attention title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            />
          </div>

          {/* Ask Question */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Ask Question
            </label>
            <textarea
              rows={3}
              placeholder="Type your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px] resize-none"
            />
          </div>

          {/* Add Link and Upload Photo */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 p-3 border border-[#DCDCDC] rounded-md text-[#94278F] text-[16px]">
              <Link size={20} />
              Add a link
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-3 border border-[#DCDCDC] rounded-md text-[#94278F] text-[16px]">
              <Upload size={20} />
              Upload a photo
            </button>
          </div>
        </div>

        <div className="bg-[#F5F5F5] rounded-b-lg flex justify-center px-6 py-4">
          <button className="w-[170px] h-[46px] bg-[#94278F] text-white text-[16px] rounded-md hover:bg-[#7A206F] transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityForm2;
