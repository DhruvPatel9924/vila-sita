import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Process from "./components/Process";
import "./App.css"; // Make sure to import your CSS

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate the "studio to structure" effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div className="loading-screen">Studio to Structure</div>
      ) : (
        <>
          <Navbar />
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/process" element={<Process />} />
              {/* add other routes as needed */}
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
