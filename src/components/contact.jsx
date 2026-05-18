import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { motion } from "framer-motion";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();
  const contactData = props.data || {};
  const phoneHref = contactData.phone
    ? `tel:${contactData.phone.replace(/\s+/g, "")}`
    : null;
  const emailHref = contactData.email ? `mailto:${contactData.email}` : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      console.error("EmailJS is not configured. Check your environment variables.");
      setSubmitStatus("config-error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        emailServiceId,
        emailTemplateId,
        formRef.current,
        emailPublicKey,
      )
      .then(
        () => {
          setSubmitStatus("success");
          clearState();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        () => {
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const formVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const contactInfoVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  const socialVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 20px 40px rgba(74, 144, 226, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
    disabled: {
      opacity: 0.7,
      scale: 1,
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const statusVariants = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <motion.div className="section-title" variants={itemVariants}>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </motion.div>

              {submitStatus && (
                <motion.div
                  className={`alert ${submitStatus === "success" ? "alert-success" : "alert-danger"}`}
                  variants={statusVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  {submitStatus === "success"
                    ? "Message sent successfully! We'll get back to you soon."
                    : submitStatus === "config-error"
                      ? "The contact form is not configured yet. Please add the EmailJS environment variables."
                      : "Oops! Something went wrong. Please try again."}
                </motion.div>
              )}

              <motion.form
                ref={formRef}
                name="sentMessage"
                validate
                onSubmit={handleSubmit}
                variants={formVariants}
              >
                <div className="row">
                  <div className="col-md-6">
                    <motion.div
                      className="form-group"
                      whileFocus="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      <p className="help-block text-danger"></p>
                    </motion.div>
                  </div>
                  <div className="col-md-6">
                    <motion.div
                      className="form-group"
                      whileFocus="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      <p className="help-block text-danger"></p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="form-group"
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </motion.div>

                <div id="success"></div>

                <motion.button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  variants={buttonVariants}
                  whileHover={!isSubmitting ? "hover" : "disabled"}
                  whileTap={!isSubmitting ? "tap" : "disabled"}
                  disabled={isSubmitting}
                  style={{
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    <span>
                      <i className="fa fa-spinner fa-spin"></i> Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>

          <motion.div
            className="col-md-3 col-md-offset-1 contact-info"
            variants={contactInfoVariants}
          >
            <div className="contact-item">
              <h3>Contact Info</h3>
              {contactData.address && (
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {contactData.address}
                </motion.p>
              )}
            </div>

            <div className="contact-item">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                {phoneHref ? (
                  <a href={phoneHref}>{contactData.phone}</a>
                ) : (
                  "loading"
                )}
              </motion.p>
            </div>

            <div className="contact-item">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                {emailHref ? (
                  <a href={emailHref}>{contactData.email}</a>
                ) : (
                  "loading"
                )}
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="col-md-12" variants={socialVariants}>
            <div className="row">
              <div className="social">
                <ul>
                  <motion.li
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={contactData.facebook || "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href={contactData.instagram || "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
