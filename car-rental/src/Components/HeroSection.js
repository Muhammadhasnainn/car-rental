import React, { useState } from "react";
import "../CSS/HeroSection.css";
import BookBar from "./BookBar";

const HeroSection = () => {

  return (
    <>
      <section className="HeroSection">
        <div
          className="image"
          style={{
            background: `url(${"https://images.unsplash.com/photo-1598551292182-1df7b0c7504c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
          }}
        ></div>
        <div className="HeroSection-content">
          <h1>Reserved Now & Get 50% Off</h1>
          <button className="reserve-btn">Reserve Now!</button>
        </div>
        <div className="Search-Car">
          <BookBar/>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
