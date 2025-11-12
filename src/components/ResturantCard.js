import React from "react";
import { IMG_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  const ratingClasses =
    avgRating >= 4.4
      ? "bg-green-500 text-white"
      : avgRating >= 3.8
      ? "bg-yellow-400 text-gray-800"
      : "bg-gray-300 text-gray-800";

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <img
          src={`${IMG_URL}/${resData.info.cloudinaryImageId}`}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">Quick View</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>

        <p className="text-sm text-gray-600 mb-3">{cuisines.join(", ")}</p>

        <div className="flex items-center text-sm gap-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${ratingClasses}`}>{avgRating} ★</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{sla.slaString}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{costForTwo}</span>
        </div>
      </div>
    </article>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Promoted</span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
