import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import CarBooking from "./Components/CarBooking";
import CarListing from "./Components/CarListing";
import DriverBanner from "./Components/DriverBanner";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HotOffers from "./Components/HotOffers";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import data from "./Data/Carsdata.json";
import { useState, useEffect } from "react";
import { CarsContext } from "./Context/CarsContext";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const Data = await data;
      setCars(Data);
    };
    FetchData();
    console.log(cars);
  }, []);

  return (
    <>
      <Navbar />
      <CarsContext.Provider value={cars}>
        <Routes>
          <Route
            path="/"
            element={[
              <HeroSection />,
              <About />,
              <HotOffers />,
              <Testimonial />,
            ]}
          />
          <Route path="/carlist" element={[<CarListing />]} />

          <Route path="/booking/:id" element={[<CarBooking />]} />
        </Routes>
      </CarsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
