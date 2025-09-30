import React  from "react"

import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./componants/header/index";
import Footer from "./componants/footer";
import Compact from "./pages/compact";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/compact" element={<Compact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
