import React from "react";
import "./BrandDetailTemplate.scss";
import { CLOSE } from "static/icClose.png";

const BrandDetailTemplate = props => (
  <div className="BrandDetailTemplate">
    <div className="BrandDetailTemplate__header">
      <button>
        <img src={CLOSE} alt="cancel button" />
      </button>
    </div>
    <div className="BrandDetailTemplate__content">
      <div className="BrandDetailTemplate__content__title">
        <div className="BrandDetailTemplate__content__title__left">
          <h1>{props.name}</h1>
          <span>{props.category}</span>
        </div>
        <div className="BrandDetailTemplate__content__title"></div>
      </div>
    </div>
  </div>
);
export default BrandDetailTemplate;
