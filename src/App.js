import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contacts" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
