import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FetchUsers from "./FetchUsers";
import Inventory from "./Inventory";
import Error from "./Error";
import './index.css'

function App() {
  return (
    <section className="home">
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<FetchUsers />} />

          <Route path="/contact" element={<Inventory/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </section>
  );
}

export default App;