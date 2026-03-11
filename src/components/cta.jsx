import React from "react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <div id="cta" className="text-center fade-in">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Let's work together to bring your vision to life. Get in touch with us today 
              and discover how we can help you achieve your goals.
            </p>
            <Link to="/contact" className="btn btn-custom btn-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

