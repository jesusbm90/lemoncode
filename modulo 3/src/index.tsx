import React from "react";
import { createRoot } from "react-dom/client";
import { HolaMundo } from "./helloWorld";
import { SASSColor } from "./textWithSass";
import logo from "./content/logo_2.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Jesús Barbero Mora</h1>
    <HolaMundo />
    <SASSColor />
    <img src={logo} style={{ width: 150 }} />
  </div>
);
