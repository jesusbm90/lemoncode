import React from "react";
import classes from "./mystyles.scss";

export const SASSColor: React.FC = () => {
  return (
    <div>
      <span className={classes.redBackground}>Hola mundo con SASS</span>
    </div>
  );
};
