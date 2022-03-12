import React, { useContext, useEffect, useState } from "react";
import "../CSS/HotOffer.css";
import OfferCard from "./OfferCard";
import { useParams } from "react-router-dom";
import { CarsContext } from "../Context/CarsContext";

const HotOffers = () => {
  const cars = useContext(CarsContext);
  const [Hotoffer, setHotOffer] = useState([]);

  useEffect(() => {
    setHotOffer(cars.slice(0, 3));
  }, [cars]);

  return (
    <>
      <section className="Hot-Offers w-90 mx-auto">
        <h1 className="text-center main-heading">Hot Offers</h1>
        <div className="Offer-cards w-100">
          {Hotoffer.map((element, id) => {
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
      </section>
    </>
  );
};

export default HotOffers;
