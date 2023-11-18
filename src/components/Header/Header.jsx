/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import { ChevronLeftRegular } from "../../icons/ChevronLeftRegular";
import "./style.css";
import { Link } from "react-router-dom";

export const Header = ({ className }) => {
  return (
    <div className={`header ${className}`}>
      <div className="navigation">
        <Link to={".."}>
          <ChevronLeftRegular className="chevron-left-regular" color="white" />
        </Link>
        <div className="text-wrapper">
          <p>Skill Builder</p>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
