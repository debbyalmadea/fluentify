/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";

export const ChevronDownRegular1 = ({ color = "#7C8B9D", className }) => {
  return (
    <svg
      className={`chevron-down-regular-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18 10L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929L6 10"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ChevronDownRegular1.propTypes = {
  color: PropTypes.string,
};
