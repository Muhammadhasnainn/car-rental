import React, { useContext, useEffect, useState } from "react";
import "../CSS/CarBooking.css";
import { useParams } from "react-router-dom";
import { CarsContext } from "../Context/CarsContext";
import loadingImg from "../images/Loading.gif";

const CarBooking = () => {
  const cars = useContext(CarsContext);
  let { id } = useParams();
  const [CarDetails, setCarDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let Filtered = cars.filter((element) => {
      return element.id == id;
    });
    setCarDetails(Filtered);
    setLoading(false);

    window.scrollTo(0, 0)
  }, [cars]);

  return (
    <>
      {!loading ? (
        CarDetails.map((element) => {
          return (
            <>
              <div className="CarBooking">
                <div className="carbook-header">
                  <h1>CAR BOOKING</h1>
                </div>

                <div className="CarDetails w-90 mt-5 d-flex justify-content-between">
                  <div
                    className="car-img"
                    style={{
                      background: `url(${element.img})`,
                    }}
                  ></div>
                  <div className="car-text">
                    <h1>{element.name}</h1>
                    <div className="d-flex align-items-center mt-2">
                      <p className="price">
                        {element.price} <span className="highlight">/ Day</span>
                      </p>
                      <div className="d-flex align-items-center rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <p>(123 ratings)</p>
                      </div>
                    </div>
                    <p className="details-para">{element.text}</p>
                    <div className="car-features">
                      <div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.model}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.speed}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.type}</p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.model}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.speed}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.type}</p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.model}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.speed}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-car"></i>
                          <p>{element.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Booking-payment w-90 d-flex justify-content-between">
                  <form action="" className="Booking-form">
                    <h1>Personal Information</h1>
                    <div className="form-grid">
                      <input type="text" placeholder="Your Full Name" />
                      <input type="text" placeholder="Your Last Name" />
                      <input type="text" placeholder="Your Email Address" />
                      <input type="text" placeholder="Your Phone Number" />
                    </div>
                    <h1 className="mt-4">Booking Details</h1>
                    <div className="form-grid">
                      <input type="text" placeholder="From Address" />
                      <input type="text" placeholder="To Address" />
                      <input type="text" placeholder="Journey Date" />
                      <input type="text" placeholder="Journey Time" />
                    </div>
                    <div className="w-100 mt-3">
                      <textarea name="" id="" className="w-100"></textarea>
                    </div>
                  </form>
                  <div className="Payment-method">
                    <h1>Payment Method</h1>
                    <div>
                      <div className="payment-option d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                        ></input>
                        <p>Direct Bank Transfer</p>
                      </div>
                      <p className="payment-text">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference.order won’t
                        be shipped until the funds have cleared.
                      </p>
                    </div>
                    <div className="payment-option d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      ></input>
                      <p>Cheque Payment</p>
                    </div>
                    <div className="payment-option d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      ></input>
                      <p>Credit Card</p>
                      <div className="payment-cards"></div>
                    </div>
                    <div className="payment-option d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      ></input>
                      <p>Paypal</p>
                    </div>
                    <button>Reserve Now!</button>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <img src={loadingImg} />
        </div>
      )}
    </>
  );
};

export default CarBooking;
