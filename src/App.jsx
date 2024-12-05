import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ApiDocs from "./ApiDocs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login screen is the default route */}
        <Route path="/" element={<Login />} />
        {/* Protected route to the ApiDocs */}
        <Route path="/apiDocs" element={<ApiDocs />} />
      </Routes>
    </Router>
  );
}

export default App;
