import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "./Components/Header/Header2";
import Menu from "./Components/Header/Menu";
import CheckboxSex from "./Components/Box/CheckboxSex";
import Line from "./Components/Footer/line";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/index";


function App() {
  return (
    <div className="App">
      <Header2 />
      <CheckboxSex />
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
