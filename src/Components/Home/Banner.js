/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const style = {
    position: "relative",
    top: "16vh",

    overflow: "hidden",
  };

  return (
    <div style={style}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/hero4.jpg" alt="hero" />
        </div>
        <div>
          <img loading="lazy" src="/images/hero5.jpg" alt="hero" />
        </div>
        <div>
          <img loading="lazy" src="/images/hero6.jpg" alt="hero" />
        </div>
        <div>
          <img loading="lazy" src="/images/hero7.jpg" alt="hero" />
        </div>
        <div>
          <img loading="lazy" src="/images/hero8.jpg" alt="hero" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
