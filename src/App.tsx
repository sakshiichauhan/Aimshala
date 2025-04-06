import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ConsultantForm1 from "./pages/Consultant/BecomeConsultant/ConsultantForm1";
import ConsultantForm2 from "./pages/Consultant/BecomeConsultant/ConsultantForm2";
import ConsultantForm3 from "./pages/Consultant/BecomeConsultant/ConsultantForm3";
import KycForm1 from "./pages/Consultant/consultantEkyc/KycForm1"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ConsultantForm1 />} />

        <Route
          path="/consultant/become-consultant/form2"
          element={<ConsultantForm2 />}
        />
        <Route
          path="/consultant/become-consultant/form3"
          element={<ConsultantForm3 />}
        />
     
      <Route
          path="/consultant/consultant-ekyc/form1"
          element={<KycForm1 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
