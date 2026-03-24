import React, { useState, useEffect } from "react";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const ContactPage = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setLandingPageData(JsonData);
  }, []);

  return (
    <div style={{ paddingTop: "100px" }}>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default ContactPage;
