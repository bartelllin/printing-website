import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Navigate} from "react-router-dom";
import './App.css';
import Home from "./components/pages/home";
import AboutUs from "./components/pages/AboutUs";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import BusinessCard from "./components/pages/subpage/business-card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/business-card" component={BusinessCard} />
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
