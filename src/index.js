import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import CheesesList from "./pages/CheesesList";
import CheeseDetail from "./pages/CheeseDetail";
import CheeseCreate from "./pages/CheeseCreate";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CheesesList />} />
        <Route path="/cheeses/:id" element={<CheeseDetail />} />
        <Route path="/cheeses/create" element={<CheeseCreate />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
