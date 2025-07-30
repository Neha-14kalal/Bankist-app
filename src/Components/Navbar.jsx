import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Show/hide form
  const closeForm = () => setShowForm(false);
  const openForm = () => setShowForm(true);

  // Handle form submission
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
    let timer;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0 && !showNavbar) {
        setShowNavbar(true);
        timer = setTimeout(() => {
          setSlideIn(true);
        }, 3000);
      } else if (scrollY === 0) {
        setSlideIn(false);
        setShowNavbar(false);
        clearTimeout(timer);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [showNavbar]);

  return (
    <div className={`navbar ${slideIn ? "slide-in" : ""}`}>
      <div className="logo">
        <NavLink to={"/"}>
          <img src="https://bankist-dom.netlify.app/img/logo.png" alt="logo" />
        </NavLink>
      </div>

      <div className="list">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#operations">Operations</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <div className={`page-container ${showForm ? "blur-background" : ""}`}>
          <div className="button">
            <button onClick={openForm}>Open Account</button>
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
  );
};

export default Navbar;
