import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Redirect from "./components/redirect";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutUs from "./pages/aboutUs";
import Terms from "./pages/terms";
import Fees from "./pages/fees";
import HomePage from "./pages/homePage";
import Application from "./pages/app";
import HelpCenter from "./pages/helpCenter";
import HelpCenterItem from "./pages/helpCenter/helpCenterItem";
import VideoGuide from "./pages/helpCenter/components/videoGuideFull";
import Faq from "./pages/helpCenter/faq";
import LeveragedToken from "./pages/levragedTokens";
import Markets from "./pages/markets";
import BlogHomePage from "./pages/blog";
import SinglePost from "./pages/blog/pages/singlePost";
import SingleCategory from "./pages/blog/pages/singleCategory";
import AllPosts from "./pages/blog/pages/allPosts";
import Search from "./pages/blog/pages/search";
import CreatorPage from "./pages/blog/pages/writer";
import Tags from "./pages/blog/pages/tags";
import Pairs from "./pages/pairs";
import QrCode from "./components/qrcode";

const App = () => {
  return (
      <Router>
        <Navbar />
        <div className="font-display text-right xl:px-10 lg:px-12 md:px-12 sm:px-8 px-4">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/qrcodegenerator" element={<QrCode />} />
            <Route path="/download" element={<Application />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/pairs/:slug" element={<Pairs />} />
            <Route path="/leveraged-tokens" element={<LeveragedToken />} />

            <Route path="/blog" element={<BlogHomePage />} />
            <Route path="/blog/search" element={<Search />} />
            <Route path="/blog/tags/:tag" element={<Tags />} />
            <Route path="/blog/writers/:slug" element={<CreatorPage />} />
            <Route path="/blog/posts" element={<AllPosts />} />
            <Route path="/blog/posts/:slug" element={<SinglePost />} />
            <Route path="/blog/category/:slug" element={<SingleCategory />} />
            {/* <Route path="/blog/tags/:tags" element={<Tagsdata />} /> */}

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
          </Routes>
        </div>
        <Footer />
      </Router>
  );
};

export default App;
