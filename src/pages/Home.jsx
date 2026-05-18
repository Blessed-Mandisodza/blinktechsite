import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { About } from "../components/about";
import { Features } from "../components/features";
import { FAQ } from "../components/faq";
import { Header } from "../components/header";
import { Services } from "../components/services";
import { CTA } from "../components/cta";
import JsonData from "../data/data.json";

const spotlightCards = [
  {
    icon: "fa fa-laptop",
    title: "Web Presence",
    text: "Launch a fast, credible website with hosting and email that supports real business growth.",
  },
  {
    icon: "fa fa-paint-brush",
    title: "Brand Clarity",
    text: "Create a polished visual identity that helps customers trust your business at first glance.",
  },
  {
    icon: "fa fa-line-chart",
    title: "Growth Support",
    text: "Use SEO, social media, and practical strategy to keep your business visible after launch.",
  },
];

const Home = () => {
  const landingPageData = JsonData;

  useEffect(() => {
    window.scrollTo(0, 0);

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
      observer.disconnect();
    };
  }, []);

  const phone = landingPageData.Contact?.phone;
  const email = landingPageData.Contact?.email;
  const phoneHref = phone ? `tel:${phone.replace(/\s+/g, "")}` : null;
  const emailHref = email ? `mailto:${email}` : null;
  const whatsappNumber = phone ? phone.replace(/\D/g, "") : null;
  const whatsappMessage = encodeURIComponent(
    "Hello BlinkTech Creatives, I would like to know more about your services.",
  );
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : null;

  return (
    <div>
      <Header data={landingPageData.Header} />
      <section className="home-spotlight">
        <div className="container">
          <div className="section-title text-center fade-in">
            <h2>Built for Businesses That Want to Look Serious Online</h2>
            <p>
              BlinkTech Creatives helps brands move from scattered online
              presence to a cleaner, stronger digital system that customers can
              trust.
            </p>
          </div>

          <div className="row">
            {spotlightCards.map((card) => (
              <div className="col-md-4 fade-in" key={card.title}>
                <div className="home-spotlight-card">
                  <i className={card.icon} aria-hidden="true"></i>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          {(phoneHref || emailHref) && (
            <div className="home-contact-strip fade-in">
              <span className="home-contact-label">Talk to BlinkTech</span>
              <div className="home-contact-links">
                {phoneHref && (
                  <a href={phoneHref} className="home-contact-link">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    {phone}
                  </a>
                )}
                {emailHref && (
                  <a href={emailHref} className="home-contact-link">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    {email}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <FAQ data={landingPageData.FAQ} />
      <CTA />
      {whatsappHref && (
        <motion.a
          href={whatsappHref}
          className="whatsapp-home-button"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with BlinkTech Creatives on WhatsApp"
          aria-label="Chat with BlinkTech Creatives on WhatsApp"
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
            boxShadow: [
              "0 16px 32px rgba(92, 169, 251, 0.24)",
              "0 20px 38px rgba(92, 169, 251, 0.38)",
              "0 16px 32px rgba(92, 169, 251, 0.24)",
            ],
          }}
          transition={{
            opacity: { duration: 0.4, ease: "easeOut" },
            y: {
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.04, y: -6 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="whatsapp-home-icon">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </span>
        </motion.a>
      )}
    </div>
  );
};

export default Home;
