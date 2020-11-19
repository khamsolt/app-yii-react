import React from "react";

function ProductCard(props) {
  const { id, name, price, onBye } = props;

  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/300x150"
        class="card-img-top"
        alt="Product Thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title"><strong>$</strong> {price}</h5>
        <p className="card-text">{name}</p>
        <button className="btn btn-primary" onClick={onBye}>Buy</button>
      </div>
    </div>
  );
}

export default ProductCard;
