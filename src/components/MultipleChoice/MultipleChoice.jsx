import { useDispatch, useSelector } from "react-redux";
import { Choice } from "../Choice";
import { Question } from "../Question";
import "./style.css";
import * as PropTypes from "prop-types";
import { saveAnswer } from "../../actions";

export const MultipleChoice = ({
  questionId,
  number,
  total,
  question,
  answers,
}) => {
  console.log(question);
  const dispatch = useDispatch();
  const reduxAnswers = useSelector((state) => state.answers);
  console.log(reduxAnswers);
  // Function to handle saving the answer
  const handleSaveAnswer = (questionId, selectedAnswer) => {
    dispatch(saveAnswer(questionId, selectedAnswer));
    // Other logic...
  };
  return (
    <div className="multiple-choice">
      <Question number={number} total={total} question={question} />
      <div className="frame-2">
        {answers.map((answer, index) => (
          <Choice
            key={index}
            state={
              reduxAnswers[questionId] === answer.value ? "selected" : "default"
            }
            value={answer.value}
            label={answer.label}
            onClick={() => handleSaveAnswer(questionId, answer.value)}
          />
        ))}
      </div>
    </div>
  );
};

MultipleChoice.propTypes = {
  questionId: PropTypes.number,
  number: PropTypes.number,
  total: PropTypes.number,
  question: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
};
