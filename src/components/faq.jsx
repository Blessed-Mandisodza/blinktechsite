import React, { useState } from "react";

export const FAQ = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="text-center">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our services</p>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`faq-${i}`} className="faq-item fade-in">
                    <div
                      className={`faq-question ${activeIndex === i ? "active" : ""}`}
                      onClick={() => toggleFAQ(i)}
                    >
                      <h4>{d.question}</h4>
                      <span className="faq-icon">
                        {activeIndex === i ? "−" : "+"}
                      </span>
                    </div>
                    {activeIndex === i && (
                      <div className="faq-answer">
                        <p>{d.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

