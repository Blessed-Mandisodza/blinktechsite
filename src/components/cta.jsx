import React from "react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <div id="cta" className="text-center fade-in">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2>Ready to build something your customers trust?</h2>
            <p>
              Whether you need a new website, stronger branding, or dependable
              hosting, BlinkTech Creatives can help you launch with confidence.
            </p>
            <Link to="/contact" className="btn btn-custom btn-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

