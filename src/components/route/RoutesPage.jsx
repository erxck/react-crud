import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import UserCrud from "../pages/UserCrud";

export default function RoutesPage() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
