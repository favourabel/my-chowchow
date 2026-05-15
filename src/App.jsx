import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Homepage from "./pages/Homepage";
import Companypage from "./pages/Companypage";
import Vendorpage from "./pages/Vendorpage";
import Riderpage from "./pages/Riderpage";
import Productpage from "./pages/Productpage";

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<Companypage />} />
        <Route path="/vendor" element={<Vendorpage />} />
        <Route path="/rider" element={<Riderpage />} />
        <Route path="/product" element={<Productpage />} />
      </Routes>
    </Router>
  );
};

export default App;