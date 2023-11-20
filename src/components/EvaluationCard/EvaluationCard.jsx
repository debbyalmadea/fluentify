import "./style.css";
import { Button } from "../Button";

export const EvaluationCard = ({ evaluation_text, bot }) => {
  return (
    <div className={`essay slide-in`}>
      <div className="solution-answer-field">
        <img className="group" alt="Group" src="/img/group-12.png" />
        {/* <p className="answer">{correct_answer}</p> */}
        <p
          className="answer"
          dangerouslySetInnerHTML={{
            __html: `<span style="font-weight: bolder;">Penjelasan: </span>${evaluation_text.replace(
              /\n/g,
              "<br />"
            )}`,
          }}
        />
      </div>

      {bot === undefined && (
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
