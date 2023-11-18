/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronRightRegular4 = ({ color = "#F9FBFD", className }) => {
  return (
    <svg
      className={`chevron-right-regular-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.83325 5L13.244 9.41074C13.5694 9.73618 13.5694 10.2638 13.244 10.5893L8.83325 15"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ChevronRightRegular4.propTypes = {
  color: PropTypes.string,
};
