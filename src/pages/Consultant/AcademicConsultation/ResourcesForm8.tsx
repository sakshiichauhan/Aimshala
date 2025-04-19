import React, { useState } from "react";
import { Upload, Link, Eye, Trash2 } from "lucide-react";

const ResourcesForm8 = () => {
  const [resourceTitle, setResourceTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [visibility, setVisibility] = useState("public");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5] font-poppins">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg">
        <div className="bg-[#F5F5F5] rounded-t-lg flex items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">Resources</h1>
          <button className="text-[#000000] hover:text-red-700">
            <Trash2 size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Resource Title */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Resource Title
            </label>
            <input
              type="text"
              placeholder="Enter Resource Title"
              value={resourceTitle}
              onChange={(e) => setResourceTitle(e.target.value)}
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            />
          </div>

          {/* Description */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Enter Description about resource"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={250}
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px] resize-none"
            />
            <div className="text-right text-sm text-[#898989]">
              {description.length} / 250
            </div>
          </div>

          {/* Upload and Add Link */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 p-3 border border-[#DCDCDC] rounded-md text-[#94278F] text-[16px]">
              <Upload size={20} />
              Upload or drop
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-3 border border-[#DCDCDC] rounded-md text-[#94278F] text-[16px]">
              <Link size={20} />
              Add Link
            </button>
          </div>

          {/* File List */}
          <div className="flex items-center justify-between p-3 border border-[#DCDCDC] rounded-md">
            <span className="text-[#898989] text-[16px]">file2.jpg</span>
            <div className="flex items-center gap-2">
              <Eye size={20} className="text-[#94278F] cursor-pointer" />
              <Trash2 size={20} className="text-red-700 cursor-pointer" />
            </div>
          </div>

          {/* URL Input */}
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
              URL
            </label>
            <input
              type="text"
              placeholder="Enter URL"
              className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
            />
          </div>

          {/* Visibility Options */}
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="visibility"
                value="public"
                checked={visibility === "public"}
                onChange={(e) => setVisibility(e.target.value)}
                className="accent-[#94278F]"
              />
              Public
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="visibility"
                value="private"
                checked={visibility === "private"}
                onChange={(e) => setVisibility(e.target.value)}
                className="accent-[#94278F]"
              />
              Private
            </label>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                Price (₹)
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-[#000000]">
                Discounted Price (₹)
              </label>
              <input
                type="text"
                placeholder="Enter Discounted Price"
                value={discountedPrice}
                onChange={(e) => setDiscountedPrice(e.target.value)}
                className="w-full p-3 border border-[#DCDCDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94278F]/20 text-[#898989] text-[16px]"
              />
            </div>
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

export default ResourcesForm8;