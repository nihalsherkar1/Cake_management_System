import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BootstrapCarousel.css";

export class BootstrapCarousel extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid" style={{ marginTop: "0px" }}>
          <Carousel>
            <Carousel.Item style={{ height: "100%" }}>
              <img
                style={{ height: "650px", opacity: "0.7" }}
                className="d-block w-100"
                src="..\image\cake1.jpg"
              />

              <Carousel.Caption>
                <h4 style={{ color: "black" }} className="text-white">
                  Birthday Cakes
                </h4>
                <h5 style={{ color: "black" }} className="text-white">
                  We are not just bakers. In fact, we are just like you, a bunch
                  of food lovers fascinated with sweet indulgence, who dreamt of
                  creating an appetizing fairy land of divine delicacies that
                  relishes the utmost desires.
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>
              <img
                style={{ height: "650px", opacity: "0.7" }}
                className="d-block w-100"
                src="https://ribbonsandballoons.com/frontassets/images/slider/1.jpg"
              />
              <Carousel.Caption>
                <h4 style={{ color: "black" }} className="text-white">
                  Wedding Cakes
                </h4>
                <h5 style={{ color: "black" }} className="text-white">
                  Treat your loved ones to some of the best cakes on the
                  internet. From classic black-forest to Spider-Man designs to
                  stunning three-tiered cakes, look no further than Online
                  Delivery for hundreds of mouth-watering cakes in many exotic
                  flavours, shapes, and designs.
                </h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "100%" }}>
              <img
                style={{ height: "650px", opacity: "0.7" }}
                className="d-block w-100"
                src="http://rovel.in/Admin/Slider/slider-1.jpg"
              />
              <Carousel.Caption>
                <h4 style={{ color: "black" }} className="text-white">
                  Delicious Pastries
                </h4>
                <h5 style={{ color: "black" }} className="text-white">
                  Eating cake every day is totally acceptable and justifiable.
                  After all, it’s somebody birthday somewhere in the world.
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
