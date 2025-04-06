import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import ConsultantForm1 from './pages/Consultant/BecomeConsultant/ConsultantForm1';
import ConsultantForm2 from './pages/Consultant/BecomeConsultant/ConsultantForm2';
import ConsultantForm3 from './pages/Consultant/BecomeConsultant/ConsultantForm3';
import KycForm1 from './pages/Consultant/consultantEkyc/KycForm1';
import KycForm2 from './pages/Consultant/consultantEkyc/KycForm2';
import KycForm3 from './pages/Consultant/consultantEkyc/KycForm3';
import KycForm4 from './pages/Consultant/consultantEkyc/KycForm4';
import KycForm5 from './pages/Consultant/consultantEkyc/KycForm5';
import KycForm6 from './pages/Consultant/consultantEkyc/KycForm6';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ConsultantForm1 />} />
        <Route path="/consultant/become-consultant/form2" element={<ConsultantForm2 />} />
        <Route path="/consultant/become-consultant/form3" element={<ConsultantForm3 />} />
        <Route path="/kyc-form-1" element={<KycForm1 />} />
        <Route path="/kyc-form-2" element={<KycForm2 />} />
        <Route path="/kyc-form-3" element={<KycForm3 />} />
        <Route path="/kyc-form-4" element={<KycForm4 />} />
        <Route path="/kyc-form-5" element={<KycForm5 />} />
        <Route path="/kyc-form-6" element={<KycForm6 />} />
      </Routes>
    </Router>
  );
}

export default App;
