import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Blinkstar Designs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

