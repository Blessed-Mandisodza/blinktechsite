import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ paddingTop: "150px", textAlign: "center", minHeight: "60vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 style={{ fontSize: "120px", fontWeight: "bold", color: "#608dfd", marginBottom: "20px" }}>
              404
            </h1>
            <h2>Page Not Found</h2>
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>
              Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-custom btn-lg">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

