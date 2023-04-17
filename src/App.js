import React from "react";
import "./index.css";
import "./style.css";
import Header from "./components/Header";
import Funfacts from "./components/FunFacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Funfacts />
      <Footer />
    </div>
  );
}

export default App;
