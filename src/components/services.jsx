import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Services = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Service data with individual page links
  const servicesData = [
    {
      icon: "fa fa-code",
      name: "Web Design",
      text: "Custom, responsive websites that captivate your audience and reflect your brand identity with modern UI/UX.",
      link: "/services/web-design",
    },
    {
      icon: "fa fa-server",
      name: "Web Hosting",
      text: "Reliable, high-performance hosting solutions with 99.9% uptime guarantee and 24/7 technical support.",
      link: "/services/web-hosting",
    },
    {
      icon: "fa fa-envelope",
      name: "Email Hosting",
      text: "Professional email hosting with advanced security features, generous storage, and seamless integration.",
      link: "/services/email-hosting",
    },
    {
      icon: "fa fa-paint-brush",
      name: "Graphics Design",
      text: "Stunning visual identities, from logos to marketing materials, that make your brand stand out.",
      link: "/services/graphics-design",
    },
    {
      icon: "fa fa-bullseye",
      name: "Social Media Management",
      text: "Strategy, content, and community management for growth on social platforms with measurable ROI.",
      link: "/services/social-media-management",
    },
    {
      icon: "fa fa-bullhorn",
      name: "SEO",
      text: "Strategic campaigns that boost your online presence, engage your target audience, and drive conversions.",
      // link: "/services/seo",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const headerPVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      x: -200,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Hero section variants - matching homepage style
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const heroTitleVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const heroTextVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <>
      {/* Hero Section - Only shows on services page (not homepage) */}
      {!isHomePage && (
        <motion.section
          className="services-hero"
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          style={{
            background: `linear-gradient(
              135deg,
              rgba(10, 26, 59, 0.98) 0%,
              rgba(10, 26, 59, 0.85) 100%
            ), url("/img/banner.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            padding: "140px 0",
            color: "white",
            marginBottom: "50px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background pattern matching homepage */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.05) 0%, transparent 30%)",
              zIndex: 1,
            }}
          />

          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="row">
              <div className="col-md-12 text-center">
                <motion.h1
                  variants={heroTitleVariants}
                  style={{
                    fontSize: "60px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  OUR SERVICES
                </motion.h1>

                <motion.div
                  variants={heroTextVariants}
                  style={{
                    width: "100px",
                    height: "2px",
                    background: "#f5f5f5",
                    margin: "25px auto",
                  }}
                />

                <motion.p
                  variants={heroTextVariants}
                  style={{
                    fontSize: "18px",
                    maxWidth: "700px",
                    margin: "0 auto 35px",
                    color: "#ccc",
                    lineHeight: "1.8",
                  }}
                >
                  Explore our comprehensive range of professional services
                  designed to elevate your digital presence. From custom web
                  development to strategic marketing, we provide end-to-end
                  solutions tailored to your business needs.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Main Services Section */}
      <motion.div
        id="services"
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          {/* Only show title on homepage, hide on services page since we have hero */}
          {isHomePage && (
            <motion.div
              className="section-title"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={headerVariants}>Our Services</motion.h2>
              <motion.p variants={headerPVariants}>
                Comprehensive solutions to elevate your brand and drive your
                business forward
              </motion.p>
            </motion.div>
          )}

          <motion.div
            className="row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {servicesData.map((service, i) => (
              <motion.div
                key={`${service.name}-${i}`}
                className="col-md-4"
                variants={cardVariants}
                whileHover="hover"
                custom={i}
              >
                <motion.div className="service-desc">
                  <motion.i
                    className={service.icon}
                    aria-hidden="true"
                    variants={iconVariants}
                    whileHover="hover"
                  ></motion.i>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    {service.text}
                  </motion.p>

                  {/* Get Started Link - Only shows on services page (not homepage) */}
                  {!isHomePage && (
                    <motion.div
                      variants={linkVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover="hover"
                      style={{ marginTop: "20px" }}
                    >
                      <motion.div
                        animate={{
                          textShadow: [
                            "0 0 2px rgba(10, 26, 59, 0.3)",
                            "0 0 8px rgba(10, 26, 59, 0.6)",
                            "0 0 2px rgba(10, 26, 59, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        style={{
                          display: "inline-block",
                        }}
                      >
                        <Link
                          to={service.link}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            color: "#ffffff",
                            textDecoration: "none",
                            fontWeight: "600",
                            fontSize: "15px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            transition: "all 0.3s ease",
                            borderBottom: "2px solid transparent",
                            paddingBottom: "4px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderBottomColor = "#0A1A3B";
                            e.currentTarget.style.color = "#0A1A3B";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderBottomColor =
                              "transparent";
                            e.currentTarget.style.color = "#ffffff";
                          }}
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}

                  <motion.div
                    className="shine"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="row"
            style={{ marginTop: "50px" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="col-md-12"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/contact" className="btn btn-custom btn-lg">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
