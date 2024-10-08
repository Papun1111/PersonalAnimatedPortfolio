import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Navbar,
  Contact,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Tech></Tech>
        <Works></Works>
        <div className="relative z-0">
          <Contact></Contact>
        </div>
        <Footer></Footer>
        <StarsCanvas></StarsCanvas>
      </div>
    </BrowserRouter>
  );
};

export default App;
