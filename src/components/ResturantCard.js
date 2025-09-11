import React from "react";
import { IMG_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return (
    <div className="restaurant-card">
      <div className="image-container">
        <img
          src={`${IMG_URL}/${resData.info.cloudinaryImageId}`}
          alt={name}
          className="restaurant-image"
        />
        <div className="quick-view">Quick View</div>
      </div>
      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>

        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>

        <div className="restaurant-details">
          <span
            className={`rating-badge ${
              avgRating >= 4.4
                ? "rating-good"
                : avgRating >= 3.8
                ? "rating-average"
                : "rating-bad"
            }`}
          >
            {avgRating} ★
          </span>
          <span className="divider">|</span>
          <span className="info">{sla.slaString}</span>
          <span className="divider">|</span>
          <span className="info">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-wrapper">
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
