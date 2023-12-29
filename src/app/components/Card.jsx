"use client";

import React, { useState } from "react";
import SingleCard from "./SingleCard";
import "./card.css";
const BikeData = [
  {
    bikeId: 1,
    imgSrc: "/kawasaki3.jpg",
    bikeName: "kawasaki ninja h2 1",
    category: "scooter",
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
  {
    bikeId: 4,
    imgSrc: "/kawasaki3.jpg",
    bikeName: "kawasaki ninja h2 1",
    category: "scooter",
    ammount: 499,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    bikeId: 5,
    imgSrc: "/adventure1.jpg",
    bikeName: "kawasaki ninja h2 2",
    category: "bike",
    ammount: 599,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    bikeId: 6,
    imgSrc: "/kawasaki1.jpg",
    bikeName: "kawasaki ninja h2 3",
    category: "bike",
    ammount: 399,
    desc: "Roshan Sawale",
  },
];
const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [bikeData, setBikeData] = useState(BikeData);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
   
    const vehData = BikeData.filter((item) => {
      if (category==='all') {
        return item;
      }
      return item.category === category;
    });

    setBikeData(vehData);
  };

  const category = ["all", "bike", "scooter"];
  return (
    <div className="card-main-container">
      <div className="category-main-container">
        <div
          style={{
            background: "#fffbf3",
            padding: "10px",
            width: "600px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
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
      </div>
      <div className="card-sub-main-container">
        <div className="card-sub-container">
          {bikeData.map((item) => {
            return <SingleCard key={item.bikeId} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
