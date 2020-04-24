import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageGallary = props => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { images, fallbackImage, fallbackTitle } = props;

  return (
    <>
      {images.length > 0 && (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.image}
                alt={image.caption}
              />
              <Carousel.Caption>
                <h3>{image.caption}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {images.length === 0 && (
        <img
          className="img-fluid mb-2 mt-2"
          src={fallbackImage}
          alt={fallbackTitle}
        />
      )}
    </>
  );
};

export default ImageGallary;
