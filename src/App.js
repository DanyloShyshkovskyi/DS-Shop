import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "./Components/Header/Header2";
import CheckboxSex from "./Components/Box/CheckboxSex";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/index";
import {Provider} from 'react-redux';
import store from './Store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header2 />
      <CheckboxSex />
      <AboutUs/>
      <Footer/> 
    </div>
    </Provider>
  );
}

export default App;
