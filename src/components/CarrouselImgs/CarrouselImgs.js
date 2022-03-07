import React from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

export const CarrouselImgs = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade overflow-hidden h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src={img1}
              className="d-block"
              alt="img1"
              style={{ height: "100vh" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={img2}
              className="d-block "
              alt="img2"
              style={{ height: "100vh" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={img3}
              className="d-block"
              alt="img3"
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
