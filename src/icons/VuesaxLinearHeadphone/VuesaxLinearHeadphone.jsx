/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";

export const VuesaxLinearHeadphone = ({ color = "white", className }) => {
  return (
    <svg
      className={`vuesax-linear-headphone ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.95 5.57005 21.95C3.62005 21.95 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.59999 6.33005 2.04999 11.95 2.04999C17.57 2.04999 22 6.59999 22 12.11V18.27C22 20.22 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.22 14.86 18.27V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

VuesaxLinearHeadphone.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
