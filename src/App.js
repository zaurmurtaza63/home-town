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
import { AuthModalProvider } from "./context/AuthModalContext";

function Layout() {
  const location = useLocation();
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* ✅ Header should always be visible */}
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection onLearnMore={scrollToHowItWorks} />
              <HouseList />
              <HowItWorks ref={howItWorksRef} />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/builders" element={<Builders />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthModalProvider>
        <Layout />
      </AuthModalProvider>
    </Router>
  );
}

export default App;
