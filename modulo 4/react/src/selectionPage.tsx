import React from "react";
import { Link } from "react-router-dom";

export const SelectionPage = () => {
  return (
    <>
      <p>Choose your application</p>
      <div>
        <Link to="/rickMortyPage">Rick & Morty</Link>
      </div>
      <div>
        <Link to="/list">Organization List Members</Link>
      </div>
    </>
  );
};
