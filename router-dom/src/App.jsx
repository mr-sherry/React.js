import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

function App() {
  return (
    <>
      {/* <Router>
        <nav
          style={{
            padding: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
