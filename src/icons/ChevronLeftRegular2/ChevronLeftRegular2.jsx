/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronLeftRegular2 = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`chevron-left-regular-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.6665 5L7.2558 9.41074C6.93036 9.73618 6.93036 10.2638 7.2558 10.5893L11.6665 15"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ChevronLeftRegular2.propTypes = {
  color: PropTypes.string,
};
