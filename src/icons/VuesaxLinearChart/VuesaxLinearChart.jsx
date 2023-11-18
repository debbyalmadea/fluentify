/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VuesaxLinearChart = ({ color, strokeColor, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M2.375 22H22.375"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.125 4V22H14.625V4C14.625 2.9 14.175 2 12.825 2H11.925C10.575 2 10.125 2.9 10.125 4Z"
        fill={color}
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.375 10V22H7.375V10C7.375 8.9 6.975 8 5.775 8H4.975C3.775 8 3.375 8.9 3.375 10Z"
        fill={color}
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.375 15V22H21.375V15C21.375 13.9 20.975 13 19.775 13H18.975C17.775 13 17.375 13.9 17.375 15Z"
        fill={color}
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

VuesaxLinearChart.propTypes = {
  color: PropTypes.string,
};
