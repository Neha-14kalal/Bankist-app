import React, { useEffect, useRef, useState } from "react";
import Operations from "./Operations";
import Features from "./Features";
import Testimonials from "./Testimonials";

const Home = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
    };

    try {
      const response = await fetch("http://localhost:5000/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Account opened successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        closeForm();
      } else {
        alert("Failed to open account.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
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
      <div className="head">
        <div className="heading">
          <h1>
            When <span> banking </span> meets <span> minimalist </span>
          </h1>
          <p>A simpler banking experience for a simpler life.</p>
          <h4>Learn more ↓</h4>
        </div>
        <div className="photo">
          <img src="https://bankist-dom.netlify.app/img/hero.png" alt="" />
        </div>
      </div>
      <Features />
      <Operations />
      <Testimonials />
      <hr />
      <div
        className={`scroll-fade-up ${isVisible ? "visible" : ""}`}
        ref={sectionRef}
      >
        <section>
          <div className="uppercontain">
            <h1>
              The best day to join Bankist was one year ago. The second best is
              today!
            </h1>
            <div
              className={`page-container ${showForm ? "blur-background" : ""}`}
            >
              <div
                className={`page-container ${
                  showForm ? "blur-background" : ""
                }`}
              >
                <div className="sectionbutton">
                  <button onClick={() => setShowForm(true)}>
                    Open your free account today!
                  </button>
                </div>

                {showForm && (
                  <div className="openaccount">
                    <button className="cancelbutton" onClick={closeForm}>
                      X
                    </button>
                    <h2>
                      Open your bank account <br />
                      <span className="h2">
                        in just <span>5 minutes.</span>
                      </span>
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <label>First Name</label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <br />
                      <br />

                      <label>Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <br />
                      <br />

                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <br />
                      <br />

                      <button type="submit">Submit</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <hr />
        <footer className="footer">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Carrers</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <img src="https://bankist-dom.netlify.app/img/icon.png" alt="" />
          <p>
            @Copyright by <a href="">Neha Kalal.</a> Use for learning or your
            Portfolio. Don't use to teach. Don't claim as your own products
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
