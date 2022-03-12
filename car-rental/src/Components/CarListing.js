import React, { useContext } from "react";
import { CarsContext } from "../Context/CarsContext";
import "../CSS/CarListing.css";
import BookBar from "./BookBar";
import OfferCard from "./OfferCard";

const CarListing = () => {
  const cars = useContext(CarsContext);

  return (
    <>
      <section className="CarListing-section">
        <div className="carlist-header">
          <h1>CAR LISTING</h1>
        </div>
        <div className="Car-List d-flex justify-content-between w-90 mt-5">
          <div className="book-box">
            <BookBar />
          </div>
          <div className="Car-cards">
            {cars.map((element, id) => {
              return (
                <OfferCard
                  key={id}
                  id={element.id}
                  img={element.img}
                  name={element.name}
                  price={element.price}
                  modal={element.model}
                  speed={element.speed}
                  type={element.type}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarListing;
