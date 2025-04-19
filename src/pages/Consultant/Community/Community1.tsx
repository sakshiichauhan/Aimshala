import React, { useState } from "react";
import { Link, Upload, ThumbsUp, MessageCircle } from "lucide-react";

const Community1 = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] min-h-screen font-poppins">
      
      <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              VS
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            />
            <button className="px-4 py-2 bg-[#94278F] text-white text-[16px] rounded-md hover:bg-[#7A206F] transition-colors">
              Add Comment
            </button>
          </div>
        </div>  
           

          


        
   

      <div className="w-full max-w-[800px] mt-6">
        {/* Post Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              N
            </div>
            <div>
              <h2 className="text-lg font-semibold">Swati Malik</h2>
              <p className="text-sm text-[#828282]">B.Sc, M.Sc Zoology, B.Ed from University of Delhi | 1 Day ago</p>
            </div>
          </div>
          <p className="text-[#000000] text-[16px] mb-4">
            You are to end up doing a job, whether or not it is worth doing and whether or not you want, let alone like, to do it...
          </p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-[#F5F5F5] text-[#94278F] text-sm rounded-md">Education</span>
            <span className="px-3 py-1 bg-[#F5F5F5] text-[#94278F] text-sm rounded-md">Career</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-[#94278F]">
              <ThumbsUp size={16} />
              65
            </button>
            <button className="flex items-center gap-1 text-[#94278F]">
              <MessageCircle size={16} />
              95
            </button>
          </div>
        </div>

        {/* Comment Section */}
      
      </div>
    </div>
  );
};

export default Community1;
