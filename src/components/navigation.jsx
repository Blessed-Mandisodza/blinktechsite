// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export const Navigation = (props) => {
//   const location = useLocation();

//   const isActive = (path) => {
//     if (path === "/" && location.pathname === "/") return true;
//     if (path !== "/" && location.pathname.startsWith(path)) return true;
//     return false;
//   };

//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <Link className="navbar-brand" to="/">
//             <img
//               src="img/bt logo.png"
//               alt="Logo"
//               style={{ width: "225px", height: "auto" }}
//             />
//           </Link>
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li className={isActive("/") ? "active" : ""}>
//               <Link to="/">Home</Link>
//             </li>
//             <li className={isActive("/about") ? "active" : ""}>
//               <Link to="/about">About</Link>
//             </li>
//             <li className={isActive("/services") ? "active" : ""}>
//               <Link to="/services">Services</Link>
//             </li>
//             {/* <li className={isActive("/gallery") ? "active" : ""}>
//               <Link to="/gallery">Gallery</Link>
//             </li>
//             <li className={isActive("/testimonials") ? "active" : ""}>
//               <Link to="/testimonials">Testimonials</Link>
//             </li>
//             <li className={isActive("/faq") ? "active" : ""}>
//               <Link to="/faq">FAQ</Link>
//             </li> */}
//             <li className={isActive("/contact") ? "active" : ""}>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = (props) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Function to close mobile menu
  const closeMenu = () => {
    const navbarCollapse = document.getElementById(
      "bs-example-navbar-collapse-1",
    );
    const toggleButton = document.querySelector(".navbar-toggle");

    if (navbarCollapse && navbarCollapse.classList.contains("in")) {
      navbarCollapse.classList.remove("in");
      // Also collapse the toggle button if needed
      if (
        toggleButton &&
        toggleButton.classList.contains("collapsed") === false
      ) {
        toggleButton.classList.add("collapsed");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarCollapse = document.getElementById(
        "bs-example-navbar-collapse-1",
      );
      const toggleButton = document.querySelector(".navbar-toggle");

      // Check if menu is open
      if (navbarCollapse && navbarCollapse.classList.contains("in")) {
        // If click is not on the menu and not on the toggle button
        if (
          !navbarCollapse.contains(event.target) &&
          !toggleButton.contains(event.target)
        ) {
          closeMenu();
        }
      }
    };

    // Close menu on route change
    const handleRouteChange = () => {
      closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img
              src="/img/bt%20logo.png"
              alt="Logo"
              style={{ width: "225px", height: "auto" }}
            />
          </Link>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className={isActive("/") ? "active" : ""}>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={isActive("/about") ? "active" : ""}>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={isActive("/services") ? "active" : ""}>
              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className={isActive("/contact") ? "active" : ""}>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
