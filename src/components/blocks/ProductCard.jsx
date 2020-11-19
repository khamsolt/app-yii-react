import React from "react";

function ProductCard(props) {
  const { id, name, price, add } = props;

  const onClick = (event) => {
    add(id);
  };

  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/300x150"
        className="card-img-top"
        alt="Product Thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">
          <strong>$</strong> {price}
        </h5>
        <p className="card-text">{name}</p>
        <button className="btn btn-success btn-block" onClick={onClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
