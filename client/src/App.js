import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { MainPage } from "./components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
