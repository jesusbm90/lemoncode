import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./averageComponent";
import { TotalScoreComponent } from "./totalScoreComponent";
import logo from "./content/logo_2.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hola mundo</h1>
    <AverageComponent />
    <TotalScoreComponent />
    <img src={logo} style={{ width: 150 }} />
  </div>
);
