import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, target, button, blank, ...props }) => {
  return button ? (
    <button
      {...props}
      className={`${props.className} px-6 py-3 text-sm font-semibold rounded bg-indigo-600/80 text-white transition-all hover:bg-indigo-600`}>
      {children}
    </button>
  ) : (
    <Link
      {...props}
      target={blank && "_blank"}
      className={`${props.className} px-6 py-3 text-sm font-semibold rounded bg-indigo-600/80 text-white transition-all hover:bg-indigo-600`}
      to={target}>
      {children}
    </Link>
  );
};

export default Button;
