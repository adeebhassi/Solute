// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared-Components/Navbar";
import Index from "./pages/Index";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BookAppointmentPage from "./pages/BookAppointment";

import MobileMenu from "./components/Shared-Components/Mobile_Menu";

import Loader from "./components/Shared-Components/Loader";
import DynamicTitle from "./helpers/DocumentTitle";
import MissionVisionPage from "./pages/About/MissionVision";
import BrandStory from "./pages/About/BrandStory";
import Contact from "./pages/About/Contact";
import Team from "./pages/About/Team";
import BussinessNiche from "./pages/About/BussinessNiche";
import BussinessLocation from "./pages/About/BussinessLocation";
import BrandCredential from "./pages/About/BrandCredential";

// Our PartnerShip Pages

import ImportExportPage from "./pages/OurPartnerShip/ImportExport";
import SubsidaryPage from "./pages/OurPartnerShip/Subsidary";
import FrenchisePage from "./pages/OurPartnerShip/Franchise";
import ConsignmentPage from "./pages/OurPartnerShip/Consignment";
import ExhibitionPage from "./pages/OurPartnerShip/Exhibition";
import BrickPage from "./pages/OurPartnerShip/BrickMortar";
import PartnershipProcess from "./pages/PartnershipProcess";
import EcommPage from "./pages/OurPartnerShip/Ecommerce";

import Cursor from "../src/helpers/Cursor";
import ScrollToTopButton from "./helpers/ScrollToTop";

import PartnershipRegister from "./pages/PartnershipRegister";
import PartnershipRegister1 from "./pages/PartnershipRegistration/PartnershipRegister1";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import FooterArea from "./components/Shared-Components/FooterArea";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <DynamicTitle />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Cursor />
          <Navbar />
          <MobileMenu />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/ecommerce" element={<EcommPage />} />
            <Route path="/brick-mortar" element={<BrickPage />} />
            <Route path="/importexport" element={<ImportExportPage />} />
            <Route path="/consignment" element={<ConsignmentPage />} />
            <Route path="/exhibition" element={<ExhibitionPage />} />
            <Route path="/subsidary" element={<SubsidaryPage />} />
            <Route path="/franchise" element={<FrenchisePage />} />
            <Route path="/mission-vision" element={<MissionVisionPage />} />
            <Route path="/brand-story" element={<BrandStory />} />
            <Route path="/brand-credential" element={<BrandCredential />} />
            <Route path="/bussiness-location" element={<BussinessLocation />} />
            <Route path="/bussiness-niche" element={<BussinessNiche />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/partnership-registration"
              element={<PartnershipRegister />}
            />
            <Route
              path="/partnership-registration1"
              element={<PartnershipRegister1 />}
            />
            <Route
              path="/partnership-process"
              element={<PartnershipProcess />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <ScrollToTopButton />
          <FooterArea />
        </div>
      )}
    </Router>
  );
};

export default App;
