import React from "react";
import "./BrandTemplate.scss";
import BrandCard from "../BrandCard";

const BrandTemplate = props => (
  <div className="BrandTemplate">
    <span className="BrandTemplate__title">어느 브랜드를 실펴볼까요?</span>
    <div className="BrandTemplate__content">
      {props.data.map(brand => {
        return (
          <BrandCard
            {...{
              logoUrl: brand.logoUrl,
              name: brand.name,
              category: brand.category
            }}
          />
        );
      })}
    </div>
  </div>
);
export default BrandTemplate;
