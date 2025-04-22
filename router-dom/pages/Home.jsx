import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" // Replace with your chosen HD mobile phone image URL
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Experience the latest in mobile technology.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" // Replace with your chosen HD eSIM image URL
          alt="Second slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Seamless connectivity with eSIM technology.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" // Replace with another HD image URL
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Stay connected with cutting-edge features.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
