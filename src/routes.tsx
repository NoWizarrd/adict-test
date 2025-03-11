import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/speakers" element={<SpeakersPage />} />
    <Route path="/registration" element={<RegistrationPage />} />
  </Routes>
);

export default AppRoutes;
