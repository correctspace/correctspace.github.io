import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "./css/styles.css";
import "./css/Style2.css";
import './css/footer.css';

import Header from './Pages/Header';
import Data from './Pages/Data';

import Services from './Pages/Services';
import DevopsAAS from './Pages/DevopsAAS';
import CloudMS from './Pages/CloudMS';
import CloudCS from './Pages/CloudCS';
import PublicCloudServices from './Pages/PublicCloudServices';
import PrivateCloudServices from './Pages/PrivateCloudServices';
import HybridCloudServices from './Pages/HybridCloudServices';
import DisasterRecoveryServices from './Pages/DisasterRecoveryServices';

import Pricing from './Pages/Pricing';
import HelpFaqs from './Pages/HelpFaqs';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Footer';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Data />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="service/devops-as-a-service" element={<DevopsAAS />} />
          <Route path="service/cloud-managed-services" element={<CloudMS />} />
          <Route path="service/cloud-computing-services" element={<CloudCS />} />
          <Route path="service/public-cloud-services" element={<PublicCloudServices />} />
          <Route path="service/private-cloud-services" element={<PrivateCloudServices />} />
          <Route path="service/hybrid-cloud-services" element={<HybridCloudServices />} />
          <Route path="service/disaster-recovery-services" element={<DisasterRecoveryServices />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="help-faqs" element={<HelpFaqs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
