import React, { useContext, useEffect } from "react";
import {
  Outlet,
} from "react-router";
import './indexDark.css';
import UserContext from "./context/UserContext";
// import './index.css';

import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

function App() {
  const { themeBool } = useContext(UserContext);

  // const styles = themeBool ? stylesDark : stylesLight;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
