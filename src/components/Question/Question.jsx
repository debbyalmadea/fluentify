import * as PropTypes from "prop-types";
import "./style.css";
import { VuesaxLinearFlag } from "../../icons/VuesaxLinearFlag";
export const Question = ({ number, total, question, flag }) => {
  console.log(question);
  return (
    <div className="question">
      <div className="text-wrapper">
        Soal {number}/{total}
      </div>
      <p className="div">{question}</p>
      {flag && (
        <button className="flag">
          <VuesaxLinearFlag />
        </button>
      )}
    </div>
  );
};

Question.propTypes = {
  number: PropTypes.string,
  total: PropTypes.number,
  question: PropTypes.string,
  flag: PropTypes.bool,
};
