import { EssayQuestion } from "../../../components/EssayQuestion";
import { MultipleChoice } from "../../../components/MultipleChoice";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import "./style.css";
import data from "../../../data/reading_skill_questions.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Question } from "../../../assets/illusts/Question";
import { Modal } from "../../../components/Modal";
// import { useSelector } from "react-redux";

export const ReadingSkillQuestions = () => {
  // const reduxAnswers = useSelector((state) => state.answers);
  console.log(data);
  const { id, number } = useParams();
  const question = data.datas[id - 1].questions[number - 1];
  console.log(question);
  const progressBarRef = useRef();
  const dataTotal = data.datas[id - 1].total;
  const navigate = useNavigate();
  const reduxAnswers = useSelector((state) => state.answers);
  const totalAnswered = Object.keys(reduxAnswers).length;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    progressBarRef.current.max = dataTotal;
    progressBarRef.current.value = totalAnswered;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / dataTotal) * 100}%`
    );
  }, [totalAnswered]);

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="modal-content">
          <div className="modal-illust">
            <Question />
          </div>
          <div className="modal-header">
            <p className="modal-title">Lanjut ke hasil?</p>
          </div>
          <div className="modal-body">
            <p className="modal-text" style={{ textAlign: "center" }}>
              Kamu tidak bisa balik ke bagian ini, jadi pastikan kamu sudah
              menjawab bagian ini dengan baik!
            </p>
          </div>
          <div className="modal-footer">
            <Button
              hierachy={"primary"}
              size={"large"}
              style={{ marginRight: "16px" }}
              className="modal-button"
              onClick={() => {
                setOpen(false);
                navigate(`/skill-builder/reading/${id}/result`);
              }}
              type="default"
              text="Lanjut!"
            />
            <Button
              hierachy={"secondary"}
              size={"large"}
              className="modal-button"
              onClick={() => setOpen(false)}
              type="default"
              text="Batal"
            />
          </div>
        </div>
      </Modal>
      <div className="reading-skill-question">
        <div className="body">
          <Header
            title="Reading Builder: Question"
            backUrl={
              number == 1
                ? `/skill-builder/reading/text/${id}`
                : `/skill-builder/reading/${id}/question/${+number - 1}`
            }
          />
          <div className="main">
            <div className="progress">
              <input type="range" ref={progressBarRef} />
              <div className="text-wrapper-2">
                {number}/{dataTotal}
              </div>
            </div>
            <div className="container">
              {question.type === "multiple_choice" ? (
                <MultipleChoice
                  number={number}
                  total={dataTotal}
                  question={question.question}
                  answers={question.answers}
                  questionId={question.id}
                />
              ) : (
                <EssayQuestion
                  number={number}
                  total={dataTotal}
                  question={question.question}
                  questionId={question.id}
                  state={"default"}
                />
              )}
            </div>
          </div>
        </div>
        <footer className="footer">
          {dataTotal == number ? (
            <>
              <Button
                className="design-component-instance-node"
                hierachy="secondary"
                size="large"
                type="default"
                text="Kembali"
                onClick={() => {
                  navigate(
                    `/skill-builder/reading/${id}/question/${+number - 1}`
                  );
                }}
              />
              <Button
                className="design-component-instance-node"
                hierachy="primary"
                size="large"
                type="default"
                text="Selesai"
                onClick={() => setOpen(true)}
              />
            </>
          ) : (
            <>
              {number == 1 ? (
                <Button
                  className="design-component-instance-node"
                  hierachy="secondary"
                  size="large"
                  type="default"
                  text="Kembali"
                  onClick={() => {
                    navigate(`/skill-builder/reading/text/${id}`);
                  }}
                />
              ) : (
                <Button
                  className="design-component-instance-node"
                  hierachy="secondary"
                  size="large"
                  type="default"
                  text="Kembali"
                  onClick={() => {
                    navigate(
                      `/skill-builder/reading/${id}/question/${+number - 1}`
                    );
                  }}
                />
              )}
              <Button
                className="design-component-instance-node"
                hierachy="primary"
                size="large"
                type="default"
                text="Lanjutkan"
                onClick={() => {
                  navigate(
                    `/skill-builder/reading/${id}/question/${+number + 1}`
                  );
                }}
              />
            </>
          )}
        </footer>
      </div>
    </>
  );
};
