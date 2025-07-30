import React, { useEffect, useRef, useState } from "react";

const Operations = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const [clickedButton, setClickedButton] = useState(null); // stays active
  const [animatingButton, setAnimatingButton] = useState(null); // for animation
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (sectionNumber) => {
    setVisibleSection(sectionNumber); // your section logic
    setClickedButton(sectionNumber); // mark this one as active
    setAnimatingButton(sectionNumber); // trigger animation

    // Remove animation class after animation ends (0.5s)
    setTimeout(() => {
      setAnimatingButton(null);
    }, 500);
  };

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

  return (
    <>
      <div className="operation">
        <div
          className={`scroll-fade-up ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          <hr />
          <div id="operations" className="headline">
            <h3>Operations</h3>
            <h1>Everything as simple as possible, but no simpler.</h1>
          </div>

          {/* Buttons to toggle sections */}
          <div className="data">
            <button
              onClick={() => handleClick(1)}
              className={`button1 ${clickedButton === 1 ? "active" : ""} ${
                animatingButton === 1 ? "animate" : ""
              }`}
            >
              <span className="span1">01 </span> Instant Transfer
            </button>
            <button
              onClick={() => handleClick(2)}
              className={`button2 ${clickedButton === 2 ? "active" : ""} ${
                animatingButton === 2 ? "animate" : ""
              }`}
            >
              <span className="span1">02 </span> Instant Loans
            </button>
            <button
              onClick={() => handleClick(3)}
              className={`button3 ${clickedButton === 3 ? "active" : ""} ${
                animatingButton === 3 ? "animate" : ""
              }`}
            >
              <span className="span1">03 </span> Instant Closing
            </button>
          </div>

          {/* Section 1 */}
          {visibleSection === 1 && (
            <div className="theory">
              <h3>Transfer money to anyone, instantly! No fees, no BS.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}

          {/* Section 2 */}
          {visibleSection === 2 && (
            <div className="theory">
              <h3>
                Buy a home or make your dreams come true, with instant loans.
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          )}

          {/* Section 3 */}
          {visibleSection === 3 && (
            <div className="theory">
              <h3>
                No longer need your account? No problem! Close it instantly.
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Operations;
