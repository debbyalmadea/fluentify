import * as PropTypes from "prop-types";
import "./style.css";
import { VuesaxLinearFlag } from "../../icons/VuesaxLinearFlag";

export const Question = ({ number, total, question, flag, onFlagClick }) => {
  return (
    <>
      <div className="question">
        <div className="question-text-wrapper">
          Soal {number}/{total}
        </div>
        <p className="question-div">{question}</p>
        {flag && (
          <button className="flag" onClick={onFlagClick}>
            <VuesaxLinearFlag />
          </button>
        )}
      </div>
    </>
  );
};

Question.propTypes = {
  number: PropTypes.string,
  total: PropTypes.number,
  question: PropTypes.string,
  flag: PropTypes.bool,
  title: PropTypes.string,
  onFlagClick: PropTypes.func,
};
