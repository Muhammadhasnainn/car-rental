import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [SideBar, setSideBar] = useState(false);
  const [showCar, setshowCar] = useState(false);
  const [showCarResp, setshowCarResp] = useState(false);

  document.addEventListener("click", (evt) => {
    const carElement = document.querySelector(".Car");
    const carElmResp = document.querySelector(".Car-resp");
    let targetElement = evt.target;

    do {
      if (targetElement == carElement) {
        setshowCar(true);
        return;
      }
       else if (targetElement == carElmResp) {
        setshowCarResp(true);
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);
    {
      setshowCar(false);
      setshowCarResp(false);
    }
  });

  return (
    <>
      <nav className="Navbar d-flex align-items-center">
        {!SideBar && (
          <i
            className="far fa-bars humburger"
            onClick={() => setSideBar(true)}
          ></i>
        )}
        {SideBar && (
          <i
            className="far fa-times Close"
            onClick={() => setSideBar(false)}
          ></i>
        )}
        <div className="w-90 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center justify-content-between nav-right">
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="Nav-list d-flex justify-content-between align-items-center">
              <p>Home</p>
              <p>About</p>
              <p>Service</p>
              <div className="Car">
                <p
                  onMouseOver={() => setshowCar(true)}
                  onClick={() => setshowCar(true)}
                >
                  Cars <i className="far fa-angle-down ms-2"></i>
                </p>
                {showCar && (
                  <div className="car-dropdown">
                    <Link to="/carlist">Car Listing</Link>
                  </div>
                )}
              </div>
              <p>Contact</p>
            </div>
          </div>
          <div className="Sign-option">
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
        {SideBar && window.matchMedia("(Max-width: 900px").matches && (
          <>
            <div className="nav-resp">
              <p>Home</p>
              <p>About</p>
              <p>Service</p>
              <div className="Car-resp">
                <div
                  className="d-flex justify-content-between align-items-center w-100 bb-1"
                  onClick={() => setshowCarResp(true)}
                >
                  <p>Cars</p>
                  <i className="far fa-angle-down "></i>
                </div>
                {showCarResp && (
                  <div className="car-dropdown">
                    <Link to="/carlist" onClick={() => setshowCar(false)}>
                      Car Listing
                    </Link>
                  </div>
                )}
              </div>
              <p>Contact</p>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
