import React, { useState, useEffect } from "react";
import { About } from "../components/about";
import JsonData from "../data/data.json";

const AboutPage = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setLandingPageData(JsonData);

    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div id="about-hero">
        <div className="hero-content">
          <h1>About Our Company</h1>
          <p>
            Learn more about our mission, values, and what drives us forward
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <About data={landingPageData.About} />
    </div>
  );
};

export default AboutPage;
