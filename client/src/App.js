import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { MainPage } from "./components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/auth/*" element={<AuthPage />} />
          <Route
            path="*"
            element={<h1 style={{ color: "red" }}>Not found</h1>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
