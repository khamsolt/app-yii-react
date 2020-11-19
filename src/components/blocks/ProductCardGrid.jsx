import React from "react";
import ProductCard from "./ProductCard";

export default function (props) {
  const { products = [] } = props;

  if (products.length === 0) {
    return null;
  }

  return products.map((element, index) => {
    return (
      <div className="col-lg-3 my-1">
        <ProductCard id={element.id} name={element.name} price={parseFloat(element.price).toFixed(2)} />
      </div>
    );
  });
}
