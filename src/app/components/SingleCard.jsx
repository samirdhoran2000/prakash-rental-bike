import React from 'react';
import Image from "next/image";

import "./card.css";

const SingleCard = ({ bikeId, imgSrc,bikeName, category, ammount, desc}) => {
  return (

        <div className="basic-container">
          <Image
            src={imgSrc}
            width={390}
            height={200}
            alt={`Image of ${bikeName}`} />
          <div className="desc-container">
            <div>
              <h2>{bikeName}</h2>
              {/* <button>Available</button> */}
            </div>
            <div>
              <button>Available</button>
                  <h2 style={{
                      fontWeight: 500,
                      fontSize:"18px"
              }}>{ammount}/Day</h2>
            </div>
            <p>{desc}</p>

            <button>View</button>
          </div>
        </div>
     
  );
}

export default SingleCard;