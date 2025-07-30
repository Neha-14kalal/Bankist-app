import React, { useContext, useEffect, useRef, useState } from "react";
import { Maincont } from "../App";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="testimonials">
        <div
          className={`scroll-fade-up ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          <hr />
          <div id="testimonials" className="headline">
            <h3>Not sure yet?</h3>
            <h1>
              Millions of Bankists are already making their lifes simpler.
            </h1>
          </div>
          <div className="slider">
            <div id="carouselExampleAutoplaying" className="carousel slide">
              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h3>Best financial decision ever!</h3>
                  <p className="d-block w-100">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium quas quisquam non? Quas voluptate nulla minima
                    deleniti optio ullam nesciunt, numquam corporis et
                    asperiores laboriosam sunt, praesentium suscipit blanditiis.
                    Necessitatibus id alias reiciendis, perferendis facere
                    pariatur dolore veniam autem esse non voluptatem saepe
                    provident nihil molestiae.
                  </p>
                  <div className="persondata">
                    <img
                      src="https://bankist-dom.netlify.app/img/user-1.jpg"
                      alt="Aarav Lynns"
                    />
                    <p>
                      <b>Aarav Lynn</b>
                      <p>San Francisco, USA</p>
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <h3>The last step to becoming a complete minimalist</h3>
                  <p className="d-block w-100">
                    Quisquam itaque deserunt ullam, quia ea repellendus
                    provident, ducimus neque ipsam modi voluptatibus doloremque,
                    corrupti laborum. Incidunt numquam perferendis veritatis
                    neque repellendus. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Illo deserunt exercitationem deleniti.
                  </p>
                  <div className="persondata">
                    <img
                      src="https://bankist-dom.netlify.app/img/user-2.jpg"
                      alt="Miyah Miles"
                    />
                    <p>
                      <b>Miyah Miles</b>
                      <p>London, UK</p>
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <h3>Finally free from old-school bankst</h3>
                  <p className="d-block w-100">
                    Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                    incidunt commodi architecto numquam omnis nulla autem,
                    necessitatibus blanditiis modi similique quidem. Odio
                    aliquam culpa dicta beatae quod maiores ipsa minus
                    consequatur error sunt, deleniti saepe aliquid quos
                    inventore sequi. Necessitatibus id alias reiciendis,
                    perferendis facere.
                  </p>
                  <div className="persondata">
                    <img
                      src="https://bankist-dom.netlify.app/img/user-3.jpg"
                      alt="Francisco Gomes"
                    />
                    <p>
                      <b>Francisco Gomes</b>
                      <p>Lisbon, Portugal</p>
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
