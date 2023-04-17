import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Funfacts from "./funFacts";
import Footer from "./footer";

const page = (
  <div>
    <Header />
    <Funfacts />
    <Footer />
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
