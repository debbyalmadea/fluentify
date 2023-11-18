/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ListUncheckedFill = ({ color = "#111111", className }) => {
  return (
    <svg
      className={`list-unchecked-fill ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22.5 8C22.5 9.65685 21.1569 11 19.5 11C18.1887 11 17.0738 10.1586 16.6659 8.9863C16.6119 8.99531 16.5565 9 16.5 9H4.5C3.94772 9 3.5 8.55228 3.5 8C3.5 7.44772 3.94772 7 4.5 7H16.5C16.5565 7 16.6119 7.00469 16.6659 7.0137C17.0738 5.84136 18.1887 5 19.5 5C21.1569 5 22.5 6.34315 22.5 8Z"
        fill={color}
      />
      <path
        className="path"
        d="M9.3341 16.9863C8.92615 18.1586 7.81133 19 6.5 19C4.84315 19 3.5 17.6569 3.5 16C3.5 14.3431 4.84315 13 6.5 13C7.81133 13 8.92615 13.8414 9.3341 15.0137C9.38806 15.0047 9.44348 15 9.5 15H20.5C21.0523 15 21.5 15.4477 21.5 16C21.5 16.5523 21.0523 17 20.5 17H9.5C9.44348 17 9.38806 16.9953 9.3341 16.9863Z"
        fill={color}
      />
    </svg>
  );
};

ListUncheckedFill.propTypes = {
  color: PropTypes.string,
};
