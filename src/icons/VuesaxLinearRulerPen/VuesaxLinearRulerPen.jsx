/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";

export const VuesaxLinearRulerPen = ({ color = "#292D32", className }) => {
  return (
    <svg
      className={`vuesax-linear-ruler-pen-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.4702 19V5C21.4702 3 20.4702 2 18.4702 2H14.4702C12.4702 2 11.4702 3 11.4702 5V19C11.4702 21 12.4702 22 14.4702 22H18.4702C20.4702 22 21.4702 21 21.4702 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.4702 6H16.4702"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.4702 18H15.4702"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.4702 13.9502L16.4702 14.0002"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.4702 10H14.4702"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M5.48978 2C3.85978 2 2.52979 3.33 2.52979 4.95V17.91C2.52979 18.36 2.71979 19.04 2.94979 19.43L3.76979 20.79C4.70979 22.36 6.25979 22.36 7.19979 20.79L8.01979 19.43C8.24979 19.04 8.43979 18.36 8.43979 17.91V4.95C8.43979 3.33 7.10978 2 5.48978 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M8.43979 7H2.52979"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

VuesaxLinearRulerPen.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
