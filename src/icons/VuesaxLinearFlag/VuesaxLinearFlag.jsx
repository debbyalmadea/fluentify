/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import * as PropTypes from "prop-types";
export const VuesaxLinearFlag = ({ className }) => {
  return (
    <svg
      className={`vuesax-linear-flag-2-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.375 1.6665V18.3332"
        stroke="#2563EB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M5.7915 3.3335L12.5415 6.25016C15.2915 7.41683 15.2915 9.41683 12.7082 10.7502L5.7915 14.1668"
        fill="#2563EB"
      />
      <path
        className="path"
        d="M5.7915 3.3335L12.5415 6.25016C15.2915 7.41683 15.2915 9.41683 12.7082 10.7502L5.7915 14.1668"
        stroke="#2563EB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
};

VuesaxLinearFlag.defaultProps = {
  className: "",
};

VuesaxLinearFlag.propTypes = {
  className: PropTypes.string,
};
