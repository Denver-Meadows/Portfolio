import React from "react";
import photo from "../imgs/inventory-plus.jpg";

const SingleProject = () => {
  return (
    <div className="single-project">
      <div className="single-project-container">
        <img
          className="single-project-container-image"
          src={photo}
          alt="inventory-plus screenshot"
        />
        <div className="single-project-container-details">
          <h2>Inventory+ App</h2>
          <p>
            Inventory+ is a fullstack application that utilizes the MERN stack.
            This app is optimized for desktop but is compatiable with tablets
            and smart phones as well. Inventory+ allows clients to track
            inventory, customer and supplier data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
