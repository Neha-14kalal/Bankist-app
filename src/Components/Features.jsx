import React, { useEffect, useRef, useState } from "react";

const Features = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClear(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="features">
      <div
        className={`scroll-fade-up ${isVisible ? "visible" : ""}`}
        ref={sectionRef}
      >
        <hr />
        <div id="features" className="headline">
          <h3>Features</h3>
          <h1>Everything you need in a modern bank and more.</h1>
        </div>

        <div className="content">
          <img
            src="https://bankist-dom.netlify.app/img/digital.jpg"
            alt=""
            className={`blur-image ${isClear ? "clear" : ""}`}
          />
          <p>
            <h3 className="edit">100% digital bank</h3> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Unde alias sint quos? Accusantium
            a fugiat porro reiciendis saepe quibusdam debitis ducimus.
          </p>
        </div>

        <div className="content1">
          <p>
            <h3 className="edit">Watch your money grow</h3> Nesciunt quos autem
            dolorum voluptates cum dolores dicta fuga inventore ab? Nulla
            incidunt eius numquam sequi iste pariatur quibusdam!
          </p>
          <img
            src="https://bankist-dom.netlify.app/img/grow.jpg"
            alt=""
            className={`blur-image ${isClear ? "clear" : ""}`}
          />
        </div>

        <div className="content">
          <img
            className={`blur-image ${isClear ? "clear" : ""}`}
            src="https://bankist-dom.netlify.app/img/card.jpg"
            alt=""
            id="contentimg"
          />
          <p className="contentpara">
            <h3 className="edit">Free debit card included</h3> Quasi, fugit in
            cumque cupiditate reprehenderit debitis animi enim eveniet
            consequatur odit quam quos possimus assumenda dicta fuga inventore
            ab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
