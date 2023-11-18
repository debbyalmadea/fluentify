/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlaceholderFill5 = ({ color = "white", className }) => {
  return (
    <svg
      className={`placeholder-fill-5 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.325 2.34534C10.5143 1.83866 9.48568 1.83866 8.675 2.34534L3.675 5.47034C2.94405 5.92718 2.5 6.72836 2.5 7.59033V12.4095C2.5 13.2715 2.94405 14.0727 3.675 14.5295L8.675 17.6545C9.48568 18.1612 10.5143 18.1612 11.325 17.6545L16.325 14.5295C17.056 14.0727 17.5 13.2715 17.5 12.4095V7.59033C17.5 6.72836 17.056 5.92718 16.325 5.47034L11.325 2.34534Z"
        fill={color}
      />
    </svg>
  );
};

PlaceholderFill5.propTypes = {
  color: PropTypes.string,
};
