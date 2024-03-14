import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fruit from "./pages/Fruit";
import Vegetable from "./pages/Vegetable";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Umbi from "./pages/Umbi";
import Buy from "./pages/Buy";
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buah" element={<Fruit />} />
            <Route path="/sayur" element={<Vegetable />} />
            <Route path="/umbi" element={<Umbi />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/buy/:id" element={<Buy />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
