import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import HeaderListing from "./HeaderListing";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }
        />
        <Route path="/results" element={<HeaderListing />} />
      </Routes>
    </Router>
  );
}

export default App;
