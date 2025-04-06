import React from 'react';
import Kyc3 from '../../../assets/Consultant/ConsulatntEkyc/Kyc3.png';

const KycForm6 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5FF] to-[#F0F8F8] font-poppins">
      <div className="bg-white rounded-lg shadow-lg flex w-[972px] h-[682.59px] border border-[#E5E7EB]">
        {/* Left Section - Content */}
        <div className="w-[587px] h-full border-r border-[#E5E7EB] flex flex-col items-center justify-center text-center space-y-8 max-w-[400px] mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#94278F]">Thank You!</h1>
            <p className="text-lg text-[#1E232C]">
              Thank you for completing your eKYC verification.
            </p>
            <p className="text-sm text-[#6B7280]">
              If you need any assistance, feel free to reach out.
            </p>
          </div>

          <button className="w-full py-3 bg-[#94278F] text-white rounded-lg hover:bg-[#7A206F] transition-colors font-medium text-lg h-[46px]">
            Go To Dashboard
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-[385px] h-full flex flex-col items-center justify-center">
          <img
            src={Kyc3}
            alt="Verification"
            className="w-[208px] h-[208px]"
          />
          <div className="text-[14px] font-semibold text-[#4D4D4D] mt-2 capitalize">
            Data Protection Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm6;