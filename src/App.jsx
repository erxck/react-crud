import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "./components/template/Logo";
import RoutesPage from "./components/route/RoutesPage";
import Footer from "./components/template/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full grid grid-cols-slim grid-rows-slim grid-areas-slim sm:grid-cols-sm sm:grid-rows-sm sm:grid-areas-sm md:grid-cols-md md:grid-rows-md md:grid-areas-md bg-gray-200">
        <Logo />
        <RoutesPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
