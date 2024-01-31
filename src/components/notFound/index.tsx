import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "src/routes/routes";
import literals from "@assets/literals/eng.json";
import "./_style.scss";

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <p>{literals.notFound}</p>
      <Link to={`/${Routes.index}`}>{literals.backMain}</Link>
    </div>
  );
};

export default PageNotFound;
