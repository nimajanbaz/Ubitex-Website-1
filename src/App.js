import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Redirect from "./components/redirect";
import AboutUs from "./pages/aboutUs";
import Terms from "./pages/terms";
import HomePage from "./pages/home";

const App = () => {
  const [color, setColor] = useState();

  return (
    <Router>
      <div className={`font-display text-right ${color}`}>
        <Routes>
          <Route
            path="/about-us"
            element={<AboutUs onBg={(e) => setColor(e)} />}
          />
          <Route path="/terms" element={<Terms onBg={(e) => setColor(e)} />} />
          <Route path="/" element={<HomePage onBg={(e) => setColor(e)} />} />

          <Route
            path="/redirect-to-platform"
            element={
              <Redirect
                onBg={(e) => setColor(e)}
                href={"https://app.ubitex.io"}
              />
            }
          />

          <Route
            path="/redirect-to-markets"
            element={
              <Redirect
                onBg={(e) => setColor(e)}
                href={"https://app.ubitex.io/markets"}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
