import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesDark from "./HomeDark.module.css";
import stylesLight from "./Home.module.css";
import React, { useContext } from "react";
import UserContext from "../../src/Context/UserContext";


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
  const { themeBool } = useContext(UserContext);
  const styles = themeBool ? stylesDark : stylesLight;
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
