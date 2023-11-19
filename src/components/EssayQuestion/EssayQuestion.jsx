import PropTypes from "prop-types";
import { AnswerField } from "../AnswerField";
import "./style.css";
import { Question } from "../Question";
import { useDispatch, useSelector } from "react-redux";
import { saveAnswer } from "../../actions";

export const EssayQuestion = ({
  questionId,
  number,
  total,
  question,
  state,
}) => {
  const dispatch = useDispatch();
  const reduxAnswers = useSelector((state) => state.answers);
  // Function to handle saving the answer
  const handleSaveAnswer = (questionId, selectedAnswer) => {
    dispatch(saveAnswer(questionId, selectedAnswer));
    // Other logic...
  };
  return (
    <div className="listening-question">
      {state === "default" && (
        <>
          <Question number={number} total={total} question={question} />
          <AnswerField
            defaultValue={reduxAnswers[questionId]}
            onBlur={(e) => handleSaveAnswer(questionId, e.target.value)}
            placeholder="Ketik jawaban kamu..."
          />
        </>
      )}
    </div>
  );
};

EssayQuestion.propTypes = {
  state: PropTypes.oneOf(["state-2", "default"]),
  buttonIcon: PropTypes.element,
  number: PropTypes.string,
  total: PropTypes.number,
  question: PropTypes.string,
  questionId: PropTypes.number,
};
