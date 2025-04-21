// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./layout/Navbar";

import ConsultantForm1 from "./pages/Consultant/BecomeConsultant/ConsultantForm1";
import ConsultantForm2 from "./pages/Consultant/BecomeConsultant/ConsultantForm2";
import ConsultantForm3 from "./pages/Consultant/BecomeConsultant/ConsultantForm3";
import KycForm1 from "./pages/Consultant/consultantEkyc/KycForm1";
import KycForm2 from "./pages/Consultant/consultantEkyc/KycForm2";
import KycForm3 from "./pages/Consultant/consultantEkyc/KycForm3";
import KycForm4 from "./pages/Consultant/consultantEkyc/KycForm4";
import KycForm5 from "./pages/Consultant/consultantEkyc/KycForm5";
import KycForm6 from "./pages/Consultant/consultantEkyc/KycForm6";
import DashboardLayout from "./pages/Consultant/Dashboard/Layout";
import AcademicConsultationForm1 from "./pages/Consultant/AcademicConsultation/AcademicConsultationForm1";
import CareerConsultationForm2 from "./pages/Consultant/AcademicConsultation/CareerConsultationForm2";
import OneOnOneForm6 from "./pages/Consultant/AcademicConsultation/oneononeForm6";
import InPerson from "./pages/Consultant/AcademicConsultation/InPerson";
import InternationalStudy from "./pages/Consultant/AcademicConsultation/InternationalStudy";
import EmotionalWellbeing from "./pages/Consultant/AcademicConsultation/EmotionalWellbeing";
import AddExpertise from "./pages/Consultant/AcademicConsultation/AddExpertise";
import ResourcesForm8 from "./pages/Consultant/AcademicConsultation/ResourcesForm8";
import DoubtPucho from "./pages/Consultant/AcademicConsultation/DoubtPucho";
import CommunityForm2 from "./pages/Consultant/Community/CommunityForm2";
import Community1 from "./pages/Consultant/Community/Community1";
import Resources1 from "./pages/Consultant/Resources/Resources1";
import TrendingCareers from "./pages/Consultant/Resources/TrendingCareers";
import Footer from "./layout/Footer"
function AppLayout() {
  const location = useLocation();

  const hideNavbarOnRoutes = [
    "/academic-consultation",
    "/career-consultation",
    "/oneononeForm6",
    "/inperson",
    "/internationalstudy",
    "/emotionalwellbeing",
    "/addexpertise",
    "/resourcesform8",
    "/doubtpucho",
    "/resources1",
    "/trendingcareers",
    "/footer"
  ];

  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/consultant/become-consultant/form1"
          element={<ConsultantForm1 />}
        />
        <Route
          path="/consultant/become-consultant/form2"
          element={<ConsultantForm2 />}
        />
        <Route
          path="/consultant/become-consultant/form3"
          element={<ConsultantForm3 />}
        />
        <Route path="/kyc-form-1" element={<KycForm1 />} />
        <Route path="/kyc-form-2" element={<KycForm2 />} />
        <Route path="/kyc-form-3" element={<KycForm3 />} />
        <Route path="/kyc-form-4" element={<KycForm4 />} />
        <Route path="/kyc-form-5" element={<KycForm5 />} />
        <Route path="/kyc-form-6" element={<KycForm6 />} />
        <Route
          path="/academic-consultation"
          element={<AcademicConsultationForm1 />}
        />
        <Route
          path="/career-consultation"
          element={<CareerConsultationForm2 />}
        />
        <Route path="/oneononeForm6" element={<OneOnOneForm6 />} />
        <Route path="/inperson" element={<InPerson />} />{" "}
        <Route path="/internationalstudy" element={<InternationalStudy />} />
        <Route path="/emotionalwellbeing" element={<EmotionalWellbeing />} />
        <Route path="/addexpertise" element={<AddExpertise />} />
        <Route path="/resourcesform8" element={<ResourcesForm8 />} />
        <Route path="/doubtpucho" element={<DoubtPucho />} />
        <Route path="/communityform2" element={<CommunityForm2 />} />
        <Route path="/community1" element={<Community1 />} />
        <Route path="/resources1" element={<Resources1 />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/trendingcareers" element={<TrendingCareers />} />
        <Route path="/consultant/dashboard" element={<DashboardLayout />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
