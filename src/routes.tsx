import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default AppRoutes;
