import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import NotFound from "./pages/404";
import Redirect from "./components/redirect";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutUs from "./pages/aboutUs";
import Terms from "./pages/terms";
import Fees from "./pages/fees";
import HomePage from "./pages/home";
import Application from "./pages/app";
import HelpCenter from "./pages/helpCenter";
import HelpCenterItem from "./pages/helpCenter/helpCenterItem";
import VideoGuide from "./pages/helpCenter/components/videoGuideFull";
import Faq from "./pages/helpCenter/faq";
import CommingSoon from "./pages/commingSoon";
import LevragedToken from "./pages/levragedTokens";
import Markets from "./pages/markets";

const App = () => {
  return (
    <HttpsRedirect>
      <Router>
        <Navbar />
        <div className="font-display text-right xl:px-10 lg:px-12 md:px-12 sm:px-8 px-4">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/fees" element={<CommingSoon />} />
            <Route path="/fees/dev" element={<Fees />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/download" element={<Application />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/leveraged-tokens" element={<LevragedToken />} />
            <Route path="/support-center" element={<HelpCenter />} />
            <Route path="/support-center/faq" element={<Faq />} />
            <Route path="/support-center/guide" element={<VideoGuide />} />
            <Route
              path="/support-center/guide/:slug"
              element={<HelpCenterItem />}
            />

            <Route
              path="/redirect-to-platform"
              element={<Redirect href={"https://app.ubitex.io"} />}
            />
            <Route
              path="/redirect-to-login"
              element={<Redirect href={"https://app.ubitex.io/login"} />}
            />
            <Route
              path="/redirect-to-convert"
              element={<Redirect href={"https://app.ubitex.io/convert"} />}
            />
            <Route
              path="/redirect-to-markets"
              element={<Redirect href={"https://app.ubitex.io/markets"} />}
            />
            <Route
              path="/redirect-to-blog"
              element={<Redirect href={"https://ubitex.io/blog"} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </HttpsRedirect>
  );
};

export default App;
