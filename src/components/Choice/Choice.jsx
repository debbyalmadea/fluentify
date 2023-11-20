import PropTypes from "prop-types";
import "./style.css";

export const Choice = ({
  state,
  className,
  value,
  label,
  onClick,
  disabled,
}) => {
  console.log(value, state);
  return (
    <button className="choice-button" onClick={onClick} disabled={disabled}>
      <div className={`choice ${state} ${className}`}>
        <div className="choice-text-wrapper">{value}.</div>
        <div className="choice-div">{label}</div>
      </div>
    </button>
  );
};

Choice.propTypes = {
  state: PropTypes.oneOf(["wrong", "selected", "correct", "default"]),
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
