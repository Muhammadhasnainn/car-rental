import React from "react";
import "../CSS/Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="Testimonial-section w-90 mx-auto">
        <h1 className="text-center">TESTIMONIALS</h1>
        <div className="Testimonial-grid w-100 mt-3">
          <div className="Testimonial-card">
            <div className="header d-flex align-items-center">
              <div className="avatar"></div>
              <div className="ms-3">
                <h3>JOHN DOE</h3>
                <p>Regular Client</p>
              </div>
            </div>
            <div className="review">
              <p>
                I found your service to be a 5-star experience. The driver was
                waiting at the arrivals hall for us. All the people we
                communicated with were pleasant and cheerful.
              </p>
            </div>
            <div className="date">
              <p>Mar 24, 2020</p>
            </div>
          </div>
          <div className="Testimonial-card">
            <div className="header d-flex align-items-center">
              <div
                className="avatar"
                style={{
                  background: `url(${"https://livedemo00.template-help.com/wt_prod-20845/images/testimonials-2-74x74.jpg"})`,
                }}
              ></div>
              <div className="ms-3">
                <h3>KANE WILLIAMS</h3>
                <p>Regular Client</p>
              </div>
            </div>
            <div className="review">
              <p>
                Everything went perfectly! Incredibly punctual, friendly
                drivers, and the best service!
              </p>
            </div>
            <div className="date">
              <p>Mar 24, 2020</p>
            </div>
          </div>
          <div className="Testimonial-card">
            <div className="header d-flex align-items-center">
              <div className="avatar"></div>
              <div className="ms-3">
                <h3>KANE WILLIAMS</h3>
                <p>Regular Client</p>
              </div>
            </div>
            <div className="review">
              <p>
                I found your service to be a 5-star experience. The driver was
                waiting at the arrivals hall for us. All the people we
                communicated with were pleasant and cheerful.
              </p>
            </div>
            <div className="date">
              <p>Mar 24, 2020</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
