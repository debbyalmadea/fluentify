/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { PlaceholderFill5 } from "../../icons/PlaceholderFill5";
import "./style.css";

export const Button = ({
  firstIcon = false,
  trilingIcon = false,
  realText = false,
  hierachy,
  type,
  size,
  className,
  divClassName,
  onClick,
  text = "Teks",
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${type} ${size} ${hierachy} ${className}`}
    >
      {["default", "outline"].includes(type) && (
        <div
          className={`teks ${
            hierachy === "primary" ||
            (hierachy === "secondary" && size === "small")
              ? divClassName
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {type === "icon-only" && (
        <PlaceholderFill5
          className="placeholder-fill"
          color={hierachy === "secondary" ? "#2563EB" : "white"}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  firstIcon: PropTypes.bool,
  trilingIcon: PropTypes.bool,
  realText: PropTypes.bool,
  hierachy: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["icon-only", "outline", "default"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  text: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  onClick: PropTypes.func,
};
