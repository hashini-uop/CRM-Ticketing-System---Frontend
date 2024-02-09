import React from "react";
import img1 from "../../assests/img6.jpg";
import img2 from "../../assests/img7.jpg";
import img3 from "../../assests/img3.jpg";
import img4 from "../../assests/img4.jpg";
import img5 from "../../assests/img5.jpg";
import "./home.css";
import { Button, Container, Row, Col } from "react-bootstrap";

import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img className="wallpaper" src={img1} />
          <Carousel.Caption className="caption"> Call Us</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="wallpaper" src={img2} />
          <Carousel.Caption className="caption"> Mail Us </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="wallpaper" src={img5} />
          <Carousel.Caption className="caption"> Text Us </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="wallpaper" src={img4} />
          <Carousel.Caption className="caption"> Letter Us </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
