import React from "react";
import "./BrandCard.scss";

const BrandCard = props => (
  <div className="BrandCard">
    <img src={props.logoUrl} alt="logo" />
    <h3>{props.name}</h3>
    <span>{props.category}</span>
  </div>
);
export default BrandCard;
