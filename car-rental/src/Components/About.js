import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <>
      <section className="About-section w-90 mx-auto d-flex justify-content-between align-items-center">
        <div className="About-content">
          <h3 className="about-heading">About Us</h3>
          <h1>Welcome To Website</h1>
          <p className="mt-2">
            Since 1992 we have not only committed ourselves to delivering
            exceptional repair and maintenance service to the worldwide
            automotive owners.
          </p>
          <div className="Check-box mt-2">
            <div className="d-flex align-items-center">
              <div className="check-icon">
                <i className="fas fa-check"></i>
              </div>
              <p className="ms-2">We are a trusted name</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="check-icon">
                <i className="fas fa-check"></i>
              </div>
              <p className="ms-2">have a larger stock of vehicles</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="check-icon">
                <i className="fas fa-check"></i>
              </div>
              <p className="ms-2">we deal in have all brands</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="check-icon">
                <i className="fas fa-check"></i>
              </div>
              <p className="ms-2">we are at spain locations</p>
            </div>
          </div>
        </div>
        <div className="About-img">
          <img
            src="https://freepngimg.com/thumb/car/3-2-car-free-download-png.png"
            alt="img"
          />
        </div>
      </section>
    </>
  );
};

export default About;
