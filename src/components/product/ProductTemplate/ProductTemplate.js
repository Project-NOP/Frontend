import React from "react";
import "./ProductTemplate.scss";
import ProductCard from "../ProductCard";

const ProductTemplate = props => (
  <div className="ProductTemplate">
    <span className="ProductTemplate__title">어느 상품들을 살펴볼까요?</span>
    <div className="ProductTemplate__content">
      {props.data.map(brand => {
        return (
          <ProductCard
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
export default ProductTemplate;
