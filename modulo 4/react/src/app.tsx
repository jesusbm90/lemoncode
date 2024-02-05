import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { OrganizationProvider } from "./organizationContext";
import { RickAndMortyPage } from "./rickAndMortyPage";
import { SelectionPage } from "./selectionPage";

export const App = () => {
  return (
    <OrganizationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="rickMortyPage" element={<RickAndMortyPage />} />
        </Routes>
      </Router>
    </OrganizationProvider>
  );
};
