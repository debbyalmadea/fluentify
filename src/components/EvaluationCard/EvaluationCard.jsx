import "./style.css";
import { Button } from "../Button";

export const EvaluationCard = ({
  evaluation_text
}) => {
  return (
    <div className={`essay`}>
      <div className="solution-answer-field">
        <img className="group" alt="Group" src="/img/group-12.png" />
        {/* <p className="answer">{correct_answer}</p> */}
        <p className="answer">
          <span style={{ fontWeight: "bolder" }}>Penjelasan: </span>
          {evaluation_text}
        </p>
      </div>

      <Button
        className="button-2"
        hierachy="secondary"
        size="large"
        text="Tanya Bot"
        type="default"
      />
    </div>
  );
};