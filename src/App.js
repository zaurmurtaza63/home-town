import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import HowItWorks from "./Components/HowItWorks";
import Dashboard from "./Components/Dashboard";
import Builders from "./Components/Builders";
import HouseList from "./Components/HouseList";

function Layout() {
  const location = useLocation();
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* ✅ Show Header only when NOT on home page */}
      {!isHomePage && <Header />}

      <Routes>
        {/* ✅ Homepage (no header) */}
        <Route
          path="/"
          element={
            <>
              <HeroSection onLearnMore={scrollToHowItWorks} />
              <HouseList/>
              <HowItWorks ref={howItWorksRef} />
            </>
          }
        />

        {/* ✅ Other pages (with header) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/builders" element={<Builders />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
