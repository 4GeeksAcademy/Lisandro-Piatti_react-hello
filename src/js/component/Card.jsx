import React from "react";

export const Card = ({ title, image, description }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem" }}
    >
      <img
        src={image}
        className="card-img-top"
        style={{ maxHeight: "320px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href="#"
          className="btn btn-primary"
        >
          Find Out More!
        </a>
      </div>
    </div>
  );
};
