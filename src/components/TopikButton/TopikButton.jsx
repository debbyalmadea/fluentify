/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import "./style.css";

export const TopikButton = ({
  state,
  className,
  text = "Shopping",
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`topik-button ${state} ${className}`}>
      <div className="shopping">{text}</div>
    </button>
  );
};

TopikButton.propTypes = {
  state: PropTypes.oneOf(["selected", "default"]),
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
