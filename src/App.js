import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";

import RestaurantMenu from "./Components/RestaurantMenu";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
