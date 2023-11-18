/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlaceholderFill1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`placeholder-fill-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.09 2.81453C13.1172 2.20652 11.8828 2.20652 10.91 2.81453L4.91 6.56453C4.03286 7.11274 3.5 8.07415 3.5 9.10852V14.8915C3.5 15.9259 4.03286 16.8873 4.91 17.4355L10.91 21.1855C11.8828 21.7935 13.1172 21.7935 14.09 21.1855L20.09 17.4355C20.9671 16.8873 21.5 15.9259 21.5 14.8915V9.10852C21.5 8.07415 20.9671 7.11274 20.09 6.56453L14.09 2.81453Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

PlaceholderFill1.propTypes = {
  color: PropTypes.string,
};
