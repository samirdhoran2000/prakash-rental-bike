"use client";

import React, { useState } from "react";
import SingleCard from "./SingleCard";
import "./card.css";

const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const BikeData = [
    {
      bikeId: 1,
      imgSrc: "/kawasaki3.jpg",
      bikeName: "kawasaki ninja h2 1",
      category: "bike",
      ammount: 499,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      bikeId: 2,
      imgSrc: "/adventure1.jpg",
      bikeName: "kawasaki ninja h2 2",
      category: "bike",
      ammount: 599,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      bikeId: 3,
      imgSrc: "/kawasaki1.jpg",
      bikeName: "kawasaki ninja h2 3",
      category: "bike",
      ammount: 399,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const category = ["bike", "scooter"];
  return (
    <div className="card-main-container">
      <div className="category-main-container">
        <div className="category-sub-container">
          {category.map((cat) => {
            return (
              <button
                key={cat}
                className="category-btn"
                onClick={() => {
                  handleCategoryClick(cat);
                }}
                style={{
                  backgroundColor:
                    selectedCategory === cat ? "#ffc9ae" : "antiquewhite",
                  border:
                    selectedCategory === cat ? " 2px solid black" : "none",
                  textTransform: "capitalize",
                  boxSizing: "border-box",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <div className="card-sub-main-container">
        <div className="card-sub-container">
          {BikeData.map((item) => {
            return <SingleCard key={item.bikeId} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
