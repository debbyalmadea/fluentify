import * as PropTypes from "prop-types";
import "./style.css";
export const Question = ({ number, total, question }) => {
  console.log(question);
  return (
    <div className="question">
      <div className="text-wrapper">
        Soal {number}/{total}
      </div>
      <p className="div">{question}</p>
    </div>
  );
};

Question.propTypes = {
  number: PropTypes.string,
  total: PropTypes.number,
  question: PropTypes.string,
};
