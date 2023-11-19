import PropTypes from "prop-types";
import { AnswerField } from "../AnswerField";
import "./style.css";
import { Question } from "../Question";
import { useDispatch, useSelector } from "react-redux";
import { saveAnswer } from "../../actions";
import { Button } from "../Button";
import { CheckFill } from "../../icons/CheckFill";
import { CloseCrossFill } from "../../icons/CloseCrossFill";

export const EssayQuestion = ({
  questionId,
  number,
  total,
  question,
  state,
  className,
  user_answer,
  correct_answer,
  explanation,
}) => {
  const dispatch = useDispatch();
  const reduxAnswers = useSelector((state) => state.answers);
  // Function to handle saving the answer
  const handleSaveAnswer = (questionId, selectedAnswer) => {
    dispatch(saveAnswer(questionId, selectedAnswer));
    // Other logic...
  };
  console.log(user_answer);
  return (
    <div className={`essay state-${state} ${className}`}>
      <Question
        flag={state !== "default"}
        number={number}
        total={total}
        question={question}
      />
      {state === "default" && (
        <AnswerField
          defaultValue={reduxAnswers[questionId]}
          onBlur={(e) => handleSaveAnswer(questionId, e.target.value)}
          placeholder="Ketik jawaban kamu..."
        />
      )}

      {state === "correct" && (
        <div className="correct-answer-field">
          <div className="jawaban-kamu-benar">
            <CheckFill />
            <p>Jawaban kamu benar</p>
          </div>
          <p className="answer">{user_answer}</p>
        </div>
      )}

      {state === "wrong" && (
        <>
          <div className="wrong-answer-field">
            <div className="jawaban-kamu-salah">
              <CloseCrossFill />
              <p>Jawaban kamu salah</p>
            </div>
            <p className="answer">{user_answer}</p>
          </div>
          <p className="solution-text">Jawaban benar</p>
          <div className="solution-answer-field">
            <img className="group" alt="Group" src="/img/group-12.png" />
            <p className="answer">{correct_answer}</p>
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
      {/* 
      {state === "wrong" && (
        <>
          <div className="answer-field-2">
            <div className="frame-2">
              <CloseCrossFill className="close-cross-fill" />
              <div className="text-wrapper-2">Jawaban kamu salah</div>
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="text-wrapper-3">Jawaban benar</div>
          <div className="answer-field-3">
            <img className="group" alt="Group" src="/img/group-12-2.png" />
            <p className="text-wrapper-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec qu
            </p>
          </div>
          <Button
            className="button-2"
            hierachy="secondary"
            size="large"
            text="Tanya Bot"
            type="default"
          />
        </>
      )} */}
    </div>
  );
};

EssayQuestion.propTypes = {
  state: PropTypes.oneOf(["correct", "default", "wrong"]),
  buttonIcon: PropTypes.element,
  number: PropTypes.string,
  total: PropTypes.number,
  question: PropTypes.string,
  questionId: PropTypes.number,
  className: PropTypes.string,
  user_answer: PropTypes.string,
  correct_answer: PropTypes.string,
  explanation: PropTypes.string,
};
