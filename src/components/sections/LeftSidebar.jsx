import React from "react";

function LeftSidebar(props) {
  const { name } = props;
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/500"
        className="card-img-top"
        alt="User thumbnails"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Setting</li>
        <li className="list-group-item">Favorites</li>
        <li className="list-group-item">Cart</li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
