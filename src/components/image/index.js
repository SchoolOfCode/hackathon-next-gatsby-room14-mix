import React from "react";
import * as css from "./image.module.css";

const Image = ({ src, alt }) => {
  return <img className={css.img} src={src} alt={alt} />;
};

export default Image;
