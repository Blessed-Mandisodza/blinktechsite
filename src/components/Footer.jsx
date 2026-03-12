import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer sections data
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Services", path: "/services" },
        // { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Design", path: "/services/web-design" },
        { name: "Web Hosting", path: "/services/web-hosting" },
        { name: "Email Hosting", path: "/services/email-hosting" },
        { name: "SEO", path: "/services/seo" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Support", path: "/support" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: "fa fa-facebook",
      url: "https://www.facebook.com/profile.php?id=61584424251054",
      label: "Facebook",
    },
    // { icon: "fa fa-twitter", url: "https://twitter.com", label: "Twitter" },
    // { icon: "fa fa-linkedin", url: "https://linkedin.com", label: "LinkedIn" },
    {
      icon: "fa fa-instagram",
      url: "https://www.instagram.com/blinktech_creatives?igsh=bzA0NHFpcGc5NnJi&utm_source=qr",
      label: "Instagram",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.footer
      id="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div className="row">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="col-md-3 col-sm-6">
            <h5>Blinkstar Creatives</h5>
            <p className="company-description">
              We create stunning digital experiences that help businesses grow
              and succeed in the modern world.
            </p>
            <div className="contact-info">
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i> N/A
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i> +263 78 293
                1905
              </p>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                blinktechcreatives@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="col-md-3 col-sm-6"
            >
              <h5>{section.title}</h5>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="footer-divider" />

        {/* Bottom Footer */}
        <motion.div variants={itemVariants} className="row footer-bottom">
          <div className="col-md-6">
            <p className="copyright">
              &copy; {currentYear} Blinkstar Creatives. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.a
        href="#"
        className="back-to-top"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </motion.a>
    </motion.footer>
  );
};
