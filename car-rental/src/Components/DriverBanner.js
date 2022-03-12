import React from "react";
import "../CSS/DriverBanner.css";

const DriverBanner = () => {
  return (
    <>
      <div className="Banner d-flex justify-content-between align-items-center">
        <div className="Banner-Content w-90 mx-auto d-flex justify-content-between align-items-center">
          <div className="banner-img">
            <img
              src="https://freepngimg.com/thumb/audi/16-white-audi-png-car-image.png"
              alt=""
            />
          </div>
          <div className="banner-text">
            <h1>Do You Want To Earn With Us? So Don't Be Late.</h1>
            <button className="Driver-btn">BECOME A DRIVER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverBanner;
