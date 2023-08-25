import React from "react";
import { createRoot } from "react-dom/client";

import "./styles";

// pages
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
