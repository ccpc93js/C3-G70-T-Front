import React, { useState } from "react";
import { CarouselItem, Carousel } from "reactstrap";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

export const CarrouselImgs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: img1,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: img2,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: img3,
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ height: "100vh" }} />
      </CarouselItem>
    );
  });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel slide carousel-fade overflow-hidden h-100"
      style={{ height: "100vh" }}
    >
      {slides}
    </Carousel>
  );
};
