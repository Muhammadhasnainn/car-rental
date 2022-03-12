import React from "react";
import { Link } from "react-router-dom";

const OfferCard = (props) => {
  return (
    <>
      <Link to={"/booking/" + props.id}>
        <div className="offer-card">
          <div className="offer-img">
            <img src={props.img} alt="" />
          </div>
          <div className="offer-description">
            <h1>{props.name}</h1>
            <p className="price">
              {props.price} <span className="highlight">/ Day</span>
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap car-details">
              <div className="d-flex justify-content-center align-items-center">
                <i className="fas fa-car"></i>
                <p className="ms-2">{props.modal}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center ms-2">
                <i className="fas fa-cogs"></i>
                <p className="ms-2">{props.type}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center ms-2">
                <i className="fas fa-tachometer-alt-fast"></i>
                <p className="ms-2">{props.speed}</p>
              </div>
            </div>
            <div className="offer-btns d-flex w-100">
              <button className="Rent-btn">Rent Car</button>
              <button className="Details-btn">Details</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default OfferCard;
