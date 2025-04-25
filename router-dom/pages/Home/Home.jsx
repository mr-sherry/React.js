import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    alt: "First slide",
    label: "First Slide Label",
    caption: "Experience the latest in mobile technology.",
  },
  {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    alt: "Second slide",
    label: "Second Slide Label",
    caption: "Seamless connectivity with eSIM technology.",
  },
  {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000",
    alt: "Third slide",
    label: "Third Slide Label",
    caption: "Stay connected with cutting-edge features.",
  },
];

function Home() {
  return (
    <Carousel>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            className={`d-block w-100 ${styles.image}`}
            src={slide.src}
            alt={slide.alt}
          />
          <Carousel.Caption className={styles.caption}>
            <h3>{slide.label}</h3>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Home;
