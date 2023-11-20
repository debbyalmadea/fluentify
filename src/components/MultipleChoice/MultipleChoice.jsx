import { useDispatch, useSelector } from "react-redux";
import { Choice } from "../Choice";
import { Question } from "../Question";
import "./style.css";
import * as PropTypes from "prop-types";
import { saveAnswer } from "../../actions";
import { Button } from "../Button";

export const MultipleChoice = ({
  questionId,
  number,
  total,
  question,
  answers,
  state = "default",
  user_answer,
  correct_answer,
  explanation,
  correct_answer_label,
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

  function getChoiceState(answer) {
    if (state === "default") {
      return reduxAnswers[questionId] === answer.value ? "selected" : "default";
    }

    if (answer.value === correct_answer) {
      return "correct";
    }

    if (answer.value === user_answer) {
      return state;
    }

    return "default";
  }
  return (
    <div className={`multiple-choice state-${state} slide-in`}>
      <Question
        flag={state !== "default"}
        number={number}
        total={total}
        question={question}
      />
      <div className="frame-2">
        {answers.map((answer, index) => (
          <Choice
            key={index}
            state={getChoiceState(answer)}
            value={answer.value}
            label={answer.label}
            onClick={() => handleSaveAnswer(questionId, answer.value)}
            disabled={state !== "default"}
          />
        ))}
      </div>

      {state === "wrong" && (
        <>
          <p className="solution-text">Jawaban benar</p>
          <div className="solution-answer-field">
            <img className="group" alt="Group" src="/img/group-12.png" />
            <p className="answer">
              {correct_answer}. {correct_answer_label}
            </p>
            <p className="answer">
              <span style={{ fontWeight: "bolder" }}>Penjelasan: </span>
              {explanation}
            </p>
          </div>
        </>
      )}

      {state !== "default" && (
        <Button
          className="button-2"
          hierachy="secondary"
          size="large"
          text="Tanya Bot"
          type="default"
        />
      )}
    </div>
  );
};

MultipleChoice.propTypes = {
  questionId: PropTypes.number,
  number: PropTypes.number,
  total: PropTypes.number,
  question: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.oneOf(["correct", "wrong", "default"]),
  user_answer: PropTypes.string,
  correct_answer: PropTypes.string,
  explanation: PropTypes.string,
  correct_answer_label: PropTypes.string,
};
