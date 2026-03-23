import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceContent = {
  "web-design": {
    title: "Web Development",
    subtitle: "Modern, responsive websites for growth-focused brands",
    description:
      "From discovery to deployment, we craft visually stunning and user-centric web experiences.",

    packages: [
      {
        name: "Basic Website",
        price: "$130",
        details: [
          "Up to 5 Responsive pages",
          "6 months Free Hosting",
          "1 Year Free Domain .co.zw",
          "3 Professional Emails",
          "Mobile Friendly",
          "Contact Form",
        ],
      },
      {
        name: "Standard Website",
        price: "$180",
        details: [
          "Up to 10 Responsive pages",
          "Mobile Friendly",
          "3 Professional Emails",
          "1 Year Free Domain .co.zw",
          "6 months Free Hosting",
          "Contact Form",
          "Basic SEO",
        ],
      },
      {
        name: "Advanced",
        price: "$300",
        details: [
          "Unlimited pages",
          "1 Year Free Domain .co.zw",
          "Mobile Friendly",
          "10 Professional Emails",
          "1 Year Free Hosting",
          "Contact Form",
          "Advanced SEO",
          "Ongoing designer support",
        ],
      },
    ],
  },
  "web-hosting": {
    title: "Web Hosting",
    subtitle: "Secure, scalable hosting packages with 99.9% uptime",
    description:
      "Choose a hosting plan built for performance, security, and easy maintenance.",
    packages: [
      {
        name: "Basic",
        price: "$15/month",
        details: ["10 GB SSD", "50 GB bandwidth", "1 site", "Standard support"],
      },
      {
        name: "Business",
        price: "$35/month",
        details: [
          "30 GB SSD",
          "200 GB bandwidth",
          "5 sites",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: "$75/month",
        details: [
          "100 GB SSD",
          "Unlimited bandwidth",
          "Unlimited sites",
          "Dedicated support",
        ],
      },
    ],
  },
  "email-hosting": {
    title: "Email Hosting",
    subtitle: "Professional email with advanced security and syncing",
    description:
      "Robust, spam-checked email accounts for teams with practical collaboration tools.",
    packages: [
      {
        name: "Essential",
        price: "$4/user/month",
        details: ["10 GB inbox", "30-day archive", "Basic spam protection"],
      },
      {
        name: "Pro",
        price: "$8/user/month",
        details: [
          "30 GB inbox",
          "Advanced spam and virus protection",
          "Shared calendars",
        ],
      },
      {
        name: "Elite",
        price: "$14/user/month",
        details: [
          "Unlimited inbox",
          "Priority SLA",
          "Dedicated account manager",
        ],
      },
    ],
  },
  "graphics-design": {
    title: "Graphics Design",
    subtitle: "Visual brand experiences that make you unforgettable",
    description:
      "Logo, brand identity, and marketing collateral that resonate and convert.",
    packages: [
      {
        name: "Basic Bundle",
        price: "$50",
        details: [
          "Company Profile Design",
          "Logo Design",
          "Business Card Design",
          "2 Flyer Designs",
          "Letterhead",
        ],
      },
      {
        name: "Standard Bundle",
        price: "$75",
        details: [
          "Company Profile Design",
          "Logo Design",
          "Business Card Design",
          "3 Flyer Designs",
          "Catalog Design",
          "Letterhead",
        ],
      },
      {
        name: "Premium Bundle",
        price: "$90",
        details: [
          "Company Profile Design",
          "Logo Design",
          "Business Card Design",
          "5 Flyer Designs",
          "Catalog Design",
          "Receipt Book Design",
          "Letterhead",
        ],
      },
    ],
  },
  "social-media-management": {
    title: "Social Media Management",
    subtitle: "Data-driven social media growth and brand engagement",
    description:
      "Content strategy, paid social, and community management to grow awareness and conversions.",
    packages: [
      {
        name: "Basic Bundle",
        price: "$60/month",
        details: [
          "3 Flyer Designs",
          "1 Fcaebook Cover",
          "1 Sponsored AD(7days)",
          "Interaction with Clients",
        ],
      },
      {
        name: "Standard Bundle",
        price: "$80/month",
        details: [
          "4 Flyer Designs",
          "1 Fcaebook Cover",
          "2 Sponsored AD(14 days)",
          "Interaction with Clients",
        ],
      },
      {
        name: "Premium Bundle",
        price: "$130/month",
        details: [
          "6 Flyer Designs",
          "3 Sponsored AD(21 days)",
          "Interactions with Clients",
        ],
      },
    ],
  },
  seo: {
    title: "SEO",
    subtitle: "Search engine optimization that drives long-term organic growth",
    description:
      "Technical, content and local SEO programs that help your site rank for high-value keywords.",
    packages: [
      {
        name: "Foundational",
        price: "$650/month",
        details: ["Technical audit", "On-page fixes", "Basic keyword tracking"],
      },
      {
        name: "Professional",
        price: "$1,200/month",
        details: ["Page-level optimization", "Link building", "Local SEO"],
      },
      {
        name: "Enterprise",
        price: "$2,500/month",
        details: [
          "Comprehensive strategy",
          "Authority outreach",
          "Custom reporting",
        ],
      },
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceContent[serviceId];

  if (!service) {
    return (
      <div
        className="container"
        style={{ paddingTop: "120px", minHeight: "70vh" }}
      >
        <h2>Service Not Found</h2>
        <p>
          The requested service is not available. Please choose from our
          services list.
        </p>
        <Link to="/services" className="btn btn-custom">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div
      className="service-detail-page"
      style={{ paddingTop: "120px", paddingBottom: "80px" }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <h1 style={{ fontWeight: 700 }}>{service.title}</h1>
            <p style={{ fontSize: "18px", color: "#777" }}>
              {service.subtitle}
            </p>
            <p style={{ maxWidth: "760px", margin: "auto", marginTop: "18px" }}>
              {service.description}
            </p>
            <Link
              to="/contact"
              className="btn btn-custom btn-lg"
              style={{ marginTop: "20px" }}
            >
              Request A Quote
            </Link>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0a1a3b 0%, #1a2a4b 100%)",
            borderRadius: "20px",
            padding: "60px 20px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2
                style={{ color: "#fff", fontWeight: 700, marginBottom: "10px" }}
              >
                Choose your plan
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            {service.packages.map((pkg, index) => {
              const isPopular = index === 1;
              return (
                <div
                  className="col-md-12 col-lg-4 mb-4"
                  key={pkg.name}
                  style={{ position: "relative", padding: "10px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: isPopular
                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: isPopular
                        ? "1px solid rgba(59, 130, 246, 0.5)"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                      padding: "30px",
                      height: "85%",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.borderColor = isPopular
                        ? "rgba(59, 130, 246, 0.8)"
                        : "rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = isPopular
                        ? "rgba(59, 130, 246, 0.5)"
                        : "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <h4
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {pkg.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        color: isPopular ? "#3b82f6" : "#fff",
                        margin: "12px 0",
                      }}
                    >
                      {pkg.price}
                    </p>
                    <p
                      style={{
                        color: "#b0c4e3",
                        fontSize: "13px",
                        marginBottom: "20px",
                      }}
                    >
                      {index === 0
                        ? "For new users and exploration"
                        : index === 1
                          ? "Most popular choice"
                          : "For large businesses"}
                    </p>

                    <ul
                      className="list-unstyled"
                      style={{
                        marginBottom: "20px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "20px",
                      }}
                    >
                      {pkg.details.map((item) => (
                        <li
                          key={item}
                          style={{
                            marginBottom: "12px",
                            color: "#c9d4ea",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fa fa-check"
                            style={{
                              color: isPopular ? "#3b82f6" : "#10b981",
                              marginRight: "10px",
                              fontSize: "14px",
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      style={{
                        display: "block",
                        background: isPopular
                          ? "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
                          : "#0a1a3b",
                        color: "#fff",
                        border: isPopular
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.2)",
                        padding: "14px 20px",
                        borderRadius: "8px",
                        textAlign: "center",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isPopular) {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.borderColor =
                            "rgba(255, 255, 255, 0.4)";
                        } else {
                          e.currentTarget.style.transform = "scale(1.02)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isPopular) {
                          e.currentTarget.style.background = "#0a1a3b";
                          e.currentTarget.style.borderColor =
                            "rgba(255, 255, 255, 0.2)";
                        } else {
                          e.currentTarget.style.transform = "scale(1)";
                        }
                      }}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-12 text-center">
            <Link to="/services" className="btn btn-outline-secondary">
              Back to All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
