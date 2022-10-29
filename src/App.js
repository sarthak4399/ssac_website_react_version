import React from "react";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/NavBar";
import Testimonial from "./Component/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonial />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
