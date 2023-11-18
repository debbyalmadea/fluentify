/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VuesaxLinearDiagram = ({ color = "#2563EB", className }) => {
  return (
    <svg
      className={`vuesax-linear-diagram-4 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.625 2V19C2.625 20.66 3.965 22 5.625 22H22.625"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M5.625 17L10.215 11.64C10.975 10.76 12.325 10.7 13.145 11.53L14.095 12.48C14.915 13.3 16.265 13.25 17.025 12.37L21.625 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
};

VuesaxLinearDiagram.propTypes = {
  color: PropTypes.string,
};
