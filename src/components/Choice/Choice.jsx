import PropTypes from "prop-types";
import "./style.css";

export const Choice = ({ state, className, value, label, onClick }) => {
  return (
    <button className="choice-button" onClick={onClick}>
      <div className={`choice ${state} ${className}`}>
        <div className="text-wrapper">{value}.</div>
        <div className="div">{label}</div>
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
};
