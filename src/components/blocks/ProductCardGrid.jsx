import React from "react";
import ProductCard from "./ProductCard";

function ProductCardGrid(props) {
  const { products = [], onAddHandler } = props;

  if (products.length === 0) {
    return null;
  }

  return products.map((element, index) => {
    return (
      <div key={element.id} className="col-lg-3 my-1">
        <ProductCard
          id={element.id}
          add={onAddHandler}
          name={element.name}
          price={parseFloat(element.price).toFixed(2)}
        />
      </div>
    );
  });
}

export default ProductCardGrid;
