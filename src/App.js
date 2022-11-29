import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Redirect from "./components/redirect";
import AboutUs from "./pages/aboutUs";
import Terms from "./pages/terms";
import HomePage from "./pages/home";

const App = () => {
  return (
    <Router>
      <div className={`font-display text-right`}>
        <Routes>
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<HomePage />} />

          <Route
            path="/redirect-to-platform"
            element={
              <Redirect
                href={"https://app.ubitex.io"}
              />
            }
          />

          <Route
            path="/redirect-to-markets"
            element={
              <Redirect
                href={"https://app.ubitex.io/markets"}
              />
            }
          />

          <Route
            path="/redirect-to-blog"
            element={
              <Redirect
                href={"https://ubitex.io/blog"}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
