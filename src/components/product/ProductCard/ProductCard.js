import React from "react";
import "./ProductCard.scss";

const ProductCard = props => (
  <div className="ProductCard">
    <img src={props.logoUrl} alt="logo" />
    <h3>{props.name}</h3>
    <span>{props.category}</span>
  </div>
);
export default ProductCard;
