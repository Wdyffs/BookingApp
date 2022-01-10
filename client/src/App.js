import React from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { Movies } from "./components/Main/Movies/Movies";
import { Footer } from "./components/Footer/Footer";
import { Theatres } from "./components/Main/Theatres/Theatres";
import { LoginPage } from "./components/Main/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/theatres" element={<Theatres />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="*"
              element={<h1 style={{ color: "red" }}>Not found</h1>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
